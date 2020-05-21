import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getWorkouts } from '../../services/workoutService.ts';

export default async ({ response }: { response: Response }) => {
    response.body = await getWorkouts();
};
