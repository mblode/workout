import { RouteParams, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getExcersice } from '../../services/excersiceService.ts';

export default async ({ params, response }: { params: RouteParams; response: Response }) => {
    const excersiceId = params.id;

    if (!excersiceId) {
        response.status = 400;
        response.body = { msg: 'Invalid excersice id' };
        return;
    }

    const foundExcersice = await getExcersice(excersiceId);
    if (!foundExcersice) {
        response.status = 404;
        response.body = { msg: `Excersice with ID ${excersiceId} not found` };
        return;
    }

    response.body = foundExcersice;
};
