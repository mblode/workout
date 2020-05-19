import { RouteParams, Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getBeer } from '../services/beerService.ts';

export default async ({ params, response }: { params: RouteParams; response: Response }) => {
    const beerId = params.id;

    if (!beerId) {
        response.status = 400;
        response.body = { msg: 'Invalid beer id' };
        return;
    }

    const foundBeer = await getBeer(beerId);
    if (!foundBeer) {
        response.status = 404;
        response.body = { msg: `Beer with ID ${beerId} not found` };
        return;
    }

    response.body = foundBeer;
};
