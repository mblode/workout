import { Response, Request, Status } from 'https://deno.land/x/oak@v4.0.0/mod.ts';

export default async ({ response, request }: { response: Response; request: Request }) => {
    response.status = Status.NotFound;
    response.body = `<html><body><h1>404 - Not Found</h1><p>Path <code>${request.url}</code> not found.`;
};
