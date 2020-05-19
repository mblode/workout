import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getBeers } from '../services/beerService.ts';

export default async ({ response }: { response: Response }) => {
    response.body = await getBeers();
};
