import db from '../config/db.ts';
import { WorkoutExercise } from '../types/index.ts';

const workoutexercise = db.collection('workoutexercise');

// Get all items
export const getWorkoutExercises = async (context: any) => {
    try {
        const data: WorkoutExercise[] = await workoutexercise.find();

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
export const getWorkoutExercise = async (context: any) => {
    try {
        const id: string = context.params.id;

        const data: WorkoutExercise = await workoutexercise.findOne({ _id: { $oid: id } });

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
export const createWorkoutExercise = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: WorkoutExercise = await workoutexercise.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Update item
export const updateWorkoutExercise = async (context: any) => {
    try {
        const id: string = context.params.id;
        let body: any = await context.request.body();

        const result: any = await workoutexercise.updateOne({ _id: { $oid: id } }, { $set: body.value });

        context.response.body = result;
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Delete item
export const deleteWorkoutExercise = async (context: any) => {
    try {
        let id: string = context.params.id;
        const result: any = await workoutexercise.deleteOne({ _id: { $oid: id } });
        context.response.body = { result };
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};
