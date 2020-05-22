import db from '../config/db.ts';
import { Routine } from '../types/index.ts';

const routine = db.collection('routine');

// Get all items
export const getRoutines = async (context: any) => {
    try {
        const data: Routine[] = await routine.find();

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
export const getRoutine = async (context: any) => {
    try {
        const id: string = context.params.id;

        const data: Routine = await routine.findOne({ _id: { $oid: id } });

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
export const createRoutine = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: Routine = await routine.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Update item
export const updateRoutine = async (context: any) => {
    try {
        const id: string = context.params.id;
        let body: any = await context.request.body();

        const result: any = await routine.updateOne({ _id: { $oid: id } }, { $set: body.value });

        context.response.body = result;
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Delete item
export const deleteRoutine = async (context: any) => {
    try {
        let id: string = context.params.id;
        const result: any = await routine.deleteOne({ _id: { $oid: id } });
        context.response.body = { result };
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};
