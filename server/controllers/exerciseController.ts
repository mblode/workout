import db from '../config/db.ts';
import { Exercise } from '../types/index.ts';

const exercise = db.collection('exercise');

// Get all items
export const getExercises = async (context: any) => {
    try {
        const data: Exercise[] = await exercise.find();

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
export const getExercise = async (context: any) => {
    try {
        const id: string = context.params.id;

        const data: Exercise = await exercise.findOne({ _id: { $oid: id } });

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
export const createExercise = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: Exercise = await exercise.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Update item
export const updateExercise = async (context: any) => {
    try {
        const id: string = context.params.id;
        let body: any = await context.request.body();

        const result: any = await exercise.updateOne({ _id: { $oid: id } }, { $set: body.value });

        context.response.body = result;
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Delete item
export const deleteExercise = async (context: any) => {
    try {
        let id: string = context.params.id;
        const result: any = await exercise.deleteOne({ _id: { $oid: id } });
        context.response.body = { result };
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};
