import * as path from 'https://deno.land/std/path/mod.ts';
import { Application, send } from 'https://deno.land/x/oak/mod.ts';
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { APP_HOST, APP_PORT } from './config/index.ts';
import router from './routes/index.ts';
import notFound from './utils/notFound.ts';
import errorHandler from './utils/errorHandler.ts';
import timing from './utils/timing.ts';
import logger from './utils/logger.ts';

const app = new Application();

app.use(oakCors());

// app.use(function (context, next) {
//     context.response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
//     context.response.headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context) => {
    const filePath = path.join(Deno.cwd(), '../client/build');

    await send(context, context.request.url.pathname, {
        root: filePath,
        index: 'index.html',
    });
});

app.use(notFound);
app.use(logger);
app.use(timing);
app.use(errorHandler);

console.log(`Listening on http://localhost:${APP_PORT}`);

await app.listen(`${APP_HOST}:${APP_PORT}`);
