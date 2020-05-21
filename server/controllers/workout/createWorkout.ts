import { Request, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { createWorkout } from '../../services/workoutService.ts';

export default async ({ request, response }: { request: Request; response: Response }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: 'Invalid workout data' };
        return;
    }

    const {
        value: { name, brand, is_premium },
    } = await request.body();

    if (!name || !brand) {
        response.status = 422;
        response.body = { msg: 'Incorrect workout data. Name and brand are required' };
        return;
    }

    const workoutId = await createWorkout({ name, brand, is_premium });

    response.body = { msg: 'Workout created', workoutId };
};
