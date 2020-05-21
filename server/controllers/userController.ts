import db from '../config/db.ts';
import { User } from '../types/index.ts';

const user = db.collection('user');

// Get user
export const getUser = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;

        const data: User = await user.findOne({ _id: { $oid: id } });

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

// Sign up user
export const signUpUser = async (ctx: any) => {
    try {
        let body: any = await ctx.request.body();

        const id: User = await user.insertOne(body.value);

        ctx.response.body = id;
        ctx.response.status = 201;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Sign in user
export const signInUser = async (ctx: any) => {
    try {
        let body: any = await ctx.request.body();

        const id: User = await user.insertOne(body.value);

        ctx.response.body = id;
        ctx.response.status = 201;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Update user
export const updateUser = async (ctx: any) => {
    try {
        const id: string = ctx.params.id;
        let body: any = await ctx.request.body();

        const result: any = await user.updateOne({ _id: { $oid: id } }, { $set: body.value });

        console.log(result);
        ctx.response.body = result;
        ctx.response.status = 200;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};

// Delete user
export const deleteUser = async (ctx: any) => {
    try {
        let id: string = ctx.params.id;
        const result: any = await user.deleteOne({ _id: { $oid: id } });
        ctx.response.body = { result };
        ctx.response.status = 200;
    } catch (e) {
        ctx.response.body = null;
        ctx.response.status = 500;
        console.log(e);
    }
};
