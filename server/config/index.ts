import 'https://deno.land/x/dotenv/load.ts';

const env = Deno.env;

export const APP_HOST = env.get('APP_HOST') || '127.0.0.1';
export const APP_PORT = env.get('APP_PORT') || 4000;
export const DB_USER = env.get('DB_USER') || '';
export const DB_PASSWORD = env.get('DB_PASSWORD') || '';
export const DB_DATABASE = env.get('DB_DATABASE') || '';
export const DB_PORT: number = Number(env.get('DB_PORT')) || 5432;
