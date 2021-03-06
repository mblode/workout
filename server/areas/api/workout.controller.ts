import { Controller, Delete, Put, Get, Post, Body, Param } from 'https:/deno.land/x/alosaur/src/mod.ts';
import db from '../../config/db.ts';
import { Workout } from '../../types/index.ts';

const workout = db.collection('workout');

@Controller('/api/v1/workouts')
export class WorkoutController {
    constructor() { }
    @Get()
    async getAll() {
        const data: Workout[] = await workout.find();

        if (data) {
            return data;
        }
    }

    @Get('/:id')
    async getItem(@Param('id') id: string) {
        const data: Workout = await workout.findOne({ _id: { $oid: id } });

        if (data) {
            return data;
        }
    }

    @Post('/workouts')
    async createItem(@Body() body: any) {
        let decoded = JSON.parse(new TextDecoder('utf-8').decode(body));
        const id: Workout = await workout.insertOne(decoded);

        return id;
    }

    @Delete('/:id')
    async deleteItem(@Param('id') id: string) {
        const result: any = await workout.deleteOne({ _id: { $oid: id } });

        return result;
    }

    @Put('/:id')
    async updateItem(@Body() body: any, @Param('id') id: string) {
        let decoded = JSON.parse(new TextDecoder('utf-8').decode(body));
        const result: any = await workout.updateOne({ _id: { $oid: id } }, { $set: decoded });
        return result;
    }
}
