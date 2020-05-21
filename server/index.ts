import { Application, send } from 'https://deno.land/x/oak@v4.0.0/mod.ts';
import { APP_HOST, APP_PORT } from './config/index.ts';
import router from './routes/index.ts';
import notFound from './utils/notFound.ts';
import errorHandler from './utils/errorHandler.ts';
import timing from './utils/timing.ts';
import logger from './utils/logger.ts';

const app = new Application();

app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);
app.use(logger);
app.use(timing);

app.use(async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/client/build`,
        index: 'index.html',
    });
});

console.log(`Listening on http://localhost:${APP_PORT}`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
