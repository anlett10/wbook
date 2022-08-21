// src/server/router/index.ts

import { t } from "./utils";
import { health } from './subrouters/health';
export const appRouter = t.router({
    health
});

// export type definition of API
export type AppRouter = typeof appRouter;
