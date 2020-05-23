import { Controller, Delete, Put, Get, Post, Body, Param } from 'https:/deno.land/x/alosaur/src/mod.ts';
import db from '../../config/db.ts';
import { Exercise } from '../../types/index.ts';

const exercise = db.collection('exercise');

@Controller('/api/v1')
export class ExerciseController {
    constructor() {}
    @Get('/exercises')
    async getAll() {
        const data: Exercise[] = await exercise.find();

        if (data) {
            return data;
        }
    }

    @Get('/exercises/:id')
    async getItem(@Param('id') id: string) {
        const data: Exercise = await exercise.findOne({ _id: { $oid: id } });

        if (data) {
            return data;
        }
    }

    @Post('/exercises')
    async createItem(@Body() body: any) {
        let decoded = JSON.parse(new TextDecoder('utf-8').decode(body));
        const id: Exercise = await exercise.insertOne(decoded);

        return id;
    }

    @Delete('/exercises/:id')
    async deleteItem(@Param('id') id: string) {
        const result: any = await exercise.deleteOne({ _id: { $oid: id } });

        return result;
    }

    @Put('/exercises/:id')
    async updateItem(@Body() body: any, @Param('id') id: string) {
        const result: any = await exercise.updateOne({ _id: { $oid: id } }, { $set: body });
        return result;
    }
}
