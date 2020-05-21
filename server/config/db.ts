import { MongoClient } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';
import { DB_NAME, DB_URL } from './index.ts';

const client = new MongoClient();
client.connectWithUri(DB_URL);

const db = client.database(DB_NAME);

export default db;
