import db from '../config/db.ts';
import { Exercise } from '../types/index.ts';

const exercise = db.collection('exercise');

// Get all items
export const getExercises = async (ctx: any) => {
    try {
        const data: Exercise[] = await exercise.find();

        if (data) {
            ctx.response.body = data;
            ctx.response.status = 200;
            console.log(data);
        } else {
            ctx.response.body = 'not found';
            ctx.response.status = 204;
        }
    } catch (error) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(error);
    }
};

// Get item
export const getExercise = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;

        const data: Exercise = await exercise.findOne({ _id: { $oid: id } });

        if (data) {
            ctx.response.body = data;
            ctx.response.status = 200;
        } else {
            ctx.response.body = 'not found';
            ctx.response.status = 204;
        }
    } catch (error) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(error);
    }
};

// Create item
export const createExercise = async (ctx: any) => {
    try {
        let body: any = await ctx.request.body();

        const id: Exercise = await exercise.insertOne(body.value);

        ctx.response.body = id;
        ctx.response.status = 201;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Update item
export const updateExercise = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;
        let body: any = await ctx.request.body();

        const result: any = await exercise.updateOne({ _id: { $oid: id } }, { $set: body.value });

        console.log(result);
        ctx.response.body = result;
        ctx.response.status = 200;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Delete item
export const deleteExercise = async (ctx: any) => {
    try {
        let id: string = ctx.params.id;
        const result: any = await exercise.deleteOne({ _id: { $oid: id } });
        ctx.response.body = { result };
        ctx.response.status = 200;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};
