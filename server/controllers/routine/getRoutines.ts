import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getRoutines } from '../../services/routineService.ts';

export default async ({ response }: { response: Response }) => {
    response.body = await getRoutines();
};
