import db from '../config/db.ts';
import { Workout } from '../types/index.ts';

const workout = db.collection('workout');

// Get all items
export const getWorkouts = async (context: any) => {
    try {
        const data: Workout[] = await workout.find();

        if (data) {
            context.response.body = data;
            context.response.status = 200;
        } else {
            context.response.body = 'not found';
            context.response.status = 204;
        }
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Get item
export const getWorkout = async (context: any) => {
    try {
        const id: string = context.params.id;

        const data: Workout = await workout.findOne({ _id: { $oid: id } });

        if (data) {
            context.response.body = data;
            context.response.status = 200;
        } else {
            context.response.body = 'not found';
            context.response.status = 204;
        }
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Create item
export const createWorkout = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: Workout = await workout.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Update item
export const updateWorkout = async (context: any) => {
    try {
        const id: string = context.params.id;
        let body: any = await context.request.body();

        const result: any = await workout.updateOne({ _id: { $oid: id } }, { $set: body.value });

        context.response.body = result;
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Delete item
export const deleteWorkout = async (context: any) => {
    try {
        let id: string = context.params.id;
        const result: any = await workout.deleteOne({ _id: { $oid: id } });
        context.response.body = { result };
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};
