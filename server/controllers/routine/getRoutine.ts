import { RouteParams, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getRoutine } from '../../services/routineService.ts';

export default async ({ params, response }: { params: RouteParams; response: Response }) => {
    const routineId = params.id;

    if (!routineId) {
        response.status = 400;
        response.body = { msg: 'Invalid routine id' };
        return;
    }

    const foundRoutine = await getRoutine(routineId);
    if (!foundRoutine) {
        response.status = 404;
        response.body = { msg: `Routine with ID ${routineId} not found` };
        return;
    }

    response.body = foundRoutine;
};
