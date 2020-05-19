import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';

export default async ({ response }: { response: Response }) => {
    response.status = 404;
    response.body = { msg: 'Not Found' };
};
