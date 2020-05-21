import { config } from 'https://deno.land/x/dotenv/mod.ts';

export const APP_HOST = config()['APP_HOST'] || '127.0.0.1';
export const APP_PORT = config()['APP_PORT'] || 4000;
export const DB_NAME = config()['DB_USER'] || 'deno_demo';
export const DB_URL = config()['DB_PASSWORD'] || 'mongodb://localhost:27017';
