import { Controller, Delete, Put, Get, Post, Body, Param } from 'https:/deno.land/x/alosaur/src/mod.ts';
import db from '../../config/db.ts';
import { Routine } from '../../types/index.ts';

const routine = db.collection('routine');

@Controller('/api/v1/routines')
export class RoutineController {
    constructor() { }
    @Get()
    async getAll() {
        const data: Routine[] = await routine.find();

        if (data) {
            console.log(data);
            return data;
        }
    }

    @Get('/:id')
    async getItem(@Param('id') id: string) {
        const data: Routine = await routine.findOne({ _id: { $oid: id } });

        if (data) {
            console.log(data);
            return data;
        }
    }

    @Post()
    async createItem(@Body() body: any) {
        let decoded = JSON.parse(new TextDecoder('utf-8').decode(body));
        const id: Routine = await routine.insertOne(decoded);

        return id;
    }

    @Delete('/:id')
    async deleteItem(@Param('id') id: string) {
        const result: any = await routine.deleteOne({ _id: { $oid: id } });

        return result;
    }

    @Put('/:id')
    async updateItem(@Body() body: any, @Param('id') id: string) {
        let decoded = JSON.parse(new TextDecoder('utf-8').decode(body));
        const result: any = await routine.updateOne({ _id: { $oid: id } }, { $set: decoded });
        return result;
    }
}
