import { Request, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { createBeer } from '../services/beerService.ts';

export default async ({ request, response }: { request: Request; response: Response }) => {
    if (!request.hasBody) {
        response.status = 400;
        response.body = { msg: 'Invalid beer data' };
        return;
    }

    const {
        value: { name, brand, is_premium },
    } = await request.body();

    if (!name || !brand) {
        response.status = 422;
        response.body = { msg: 'Incorrect beer data. Name and brand are required' };
        return;
    }

    const beerId = await createBeer({ name, brand, is_premium });

    response.body = { msg: 'Beer created', beerId };
};
