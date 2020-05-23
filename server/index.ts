import { App, CorsBuilder } from 'https://deno.land/x/alosaur/src/mod.ts';
import { ApiArea } from './areas/api/api.area.ts';

const app = new App({
    areas: [ApiArea],
});

app.useCors(new CorsBuilder().AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.listen();
