import { RouteParams, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getWorkout } from '../../services/workoutService.ts';

export default async ({ params, response }: { params: RouteParams; response: Response }) => {
    const workoutId = params.id;

    if (!workoutId) {
        response.status = 400;
        response.body = { msg: 'Invalid workout id' };
        return;
    }

    const foundWorkout = await getWorkout(workoutId);
    if (!foundWorkout) {
        response.status = 404;
        response.body = { msg: `Workout with ID ${workoutId} not found` };
        return;
    }

    response.body = foundWorkout;
};
