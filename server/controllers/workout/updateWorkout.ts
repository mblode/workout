import { Request, Response, RouteParams } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { updateWorkout } from '../../services/workoutService.ts';

export default async ({ params, request, response }: { params: RouteParams; request: Request; response: Response }) => {
    const workoutId = params.id;

    if (!workoutId) {
        response.status = 400;
        response.body = { msg: 'Invalid workout id' };
        return;
    }

    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: 'Invalid workout data' };
        return;
    }

    const {
        value: { name, brand, is_premium },
    } = await request.body();

    await updateWorkout(workoutId, { name, brand, is_premium });

    response.body = { msg: 'Workout updated' };
};
