import db from '../config/db.ts';
import { Workout } from '../types/index.ts';

const workout = db.collection('workout');

// Get all items
export const getWorkouts = async (ctx: any) => {
    try {
        const data: Workout[] = await workout.find();

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
export const getWorkout = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;

        const data: Workout = await workout.findOne({ _id: { $oid: id } });

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
export const createWorkout = async (ctx: any) => {
    try {
        let body: any = await ctx.request.body();

        const id: Workout = await workout.insertOne(body.value);

        ctx.response.body = id;
        ctx.response.status = 201;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Update item
export const updateWorkout = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;
        let body: any = await ctx.request.body();

        const result: any = await workout.updateOne({ _id: { $oid: id } }, { $set: body.value });

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
export const deleteWorkout = async (ctx: any) => {
    try {
        let id: string = ctx.params.id;
        const result: any = await workout.deleteOne({ _id: { $oid: id } });
        ctx.response.body = { result };
        ctx.response.status = 200;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};
