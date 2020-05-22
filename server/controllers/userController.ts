import db from '../config/db.ts';
import { User } from '../types/index.ts';

const user = db.collection('user');

// Get user
export const getUser = async (context: any) => {
    try {
        const id: string = context.params.id;

        const data: User = await user.findOne({ _id: { $oid: id } });

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
    }
};

// Sign up user
export const signUpUser = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: User = await user.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Sign in user
export const signInUser = async (context: any) => {
    try {
        let body: any = await context.request.body();

        const id: User = await user.insertOne(body.value);

        context.response.body = id;
        context.response.status = 201;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Update user
export const updateUser = async (context: any) => {
    try {
        const id: string = context.params.id;
        let body: any = await context.request.body();

        const result: any = await user.updateOne({ _id: { $oid: id } }, { $set: body.value });

        context.response.body = result;
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};

// Delete user
export const deleteUser = async (context: any) => {
    try {
        let id: string = context.params.id;
        const result: any = await user.deleteOne({ _id: { $oid: id } });
        context.response.body = { result };
        context.response.status = 200;
    } catch (error) {
        context.response.body = null;
        context.response.status = 500;
        console.log(error);
    }
};
