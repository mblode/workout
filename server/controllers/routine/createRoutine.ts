import { Request, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { createRoutine } from '../../services/routineService.ts';

export default async ({ request, response }: { request: Request; response: Response }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: 'Invalid routine data' };
        return;
    }

    const {
        value: { name, brand, is_premium },
    } = await request.body();

    if (!name || !brand) {
        response.status = 422;
        response.body = { msg: 'Incorrect routine data. Name and brand are required' };
        return;
    }

    const routineId = await createRoutine({ name, brand, is_premium });

    response.body = { msg: 'Routine created', routineId };
};
