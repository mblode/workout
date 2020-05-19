import { Application } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { APP_HOST, APP_PORT } from './config.ts';
import router from './routes.ts';
import notFound from './controllers/notFound.ts';
import errorHandler from './controllers/errorHandler.ts';

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

console.log(`Listening on http://localhost:${APP_PORT}`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
