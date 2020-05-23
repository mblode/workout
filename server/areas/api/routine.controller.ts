import { Controller, Delete, Put, Get, Post, Body, Param } from 'https:/deno.land/x/alosaur/src/mod.ts';
import db from '../../config/db.ts';
import { Routine } from '../../types/index.ts';

const routine = db.collection('routine');

@Controller('/api/v1')
export class RoutineController {
    constructor() {}
    @Get('/routines')
    async getAll() {
        const data: Routine[] = await routine.find();

        if (data) {
            console.log(data);
            return data;
        }
    }

    @Get('/routines/:id')
    async getItem(@Param('id') id: string) {
        const data: Routine = await routine.findOne({ _id: { $oid: id } });

        if (data) {
            console.log(data);
            return data;
        }
    }

    @Post('/routines')
    async createItem(@Body() body: any) {
        let decoded = JSON.parse(new TextDecoder('utf-8').decode(body));
        const id: Routine = await routine.insertOne(decoded);

        return id;
    }

    @Delete('/routines/:id')
    async deleteItem(@Param('id') id: string) {
        const result: any = await routine.deleteOne({ _id: { $oid: id } });

        return result;
    }

    @Put('/routines/:id')
    async updateItem(@Body() body: any, @Param('id') id: string) {
        const result: any = await routine.updateOne({ _id: { $oid: id } }, { $set: body });
        return result;
    }
}
