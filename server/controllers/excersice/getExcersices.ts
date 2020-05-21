import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getExcersices } from '../../services/excersiceService.ts';

export default async ({ response }: { response: Response }) => {
    response.body = await getExcersices();
};
