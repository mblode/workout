import { Client } from 'https://deno.land/x/postgres/mod.ts';
import { DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } from './index.ts';

export default async function connect() {
    const client = new Client({
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
        port: DB_PORT,
    });

    await client.connect();

    return client;
}
