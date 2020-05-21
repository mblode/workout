import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { getUsers } from '../../services/userService.ts';

export default async ({ response }: { response: Response }) => {
    response.body = await getUsers();
};
