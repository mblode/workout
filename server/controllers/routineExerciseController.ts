import db from '../config/db.ts';
import { RoutineExercise } from '../types/index.ts';

const routineexercise = db.collection('routineexercise');

// Get all items
export const getRoutineExercises = async (context: any) => {
    try {
        const data: RoutineExercise[] = await routineexercise.find();

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
export const getRoutineExercise = async (context: any) => {
    try {
        const id: string = context.params.id;

        const data: RoutineExercise = await routineexercise.findOne({ _id: { $oid: id } });

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
export const createRoutineExercise = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: RoutineExercise = await routineexercise.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Update item
export const updateRoutineExercise = async (context: any) => {
    try {
        const id: string = context.params.id;
        let body: any = await context.request.body();

        const result: any = await routineexercise.updateOne({ _id: { $oid: id } }, { $set: body.value });

        context.response.body = result;
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Delete item
export const deleteRoutineExercise = async (context: any) => {
    try {
        let id: string = context.params.id;
        const result: any = await routineexercise.deleteOne({ _id: { $oid: id } });
        context.response.body = { result };
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};
