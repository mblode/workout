import db from '../config/db.ts';
import { RoutineExercise } from '../types/index.ts';

const routineexercise = db.collection('routineexercise');

// Get all items
export const getRoutineExercises = async (ctx: any) => {
    try {
        const data: RoutineExercise[] = await routineexercise.find();

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
export const getRoutineExercise = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;

        const data: RoutineExercise = await routineexercise.findOne({ _id: { $oid: id } });

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
export const createRoutineExercise = async (ctx: any) => {
    try {
        let body: any = await ctx.request.body();

        const id: RoutineExercise = await routineexercise.insertOne(body.value);

        ctx.response.body = id;
        ctx.response.status = 201;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Update item
export const updateRoutineExercise = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;
        let body: any = await ctx.request.body();

        const result: any = await routineexercise.updateOne({ _id: { $oid: id } }, { $set: body.value });

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
export const deleteRoutineExercise = async (ctx: any) => {
    try {
        let id: string = ctx.params.id;
        const result: any = await routineexercise.deleteOne({ _id: { $oid: id } });
        ctx.response.body = { result };
        ctx.response.status = 200;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};
