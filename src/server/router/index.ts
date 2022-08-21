// src/server/router/index.ts

import { t } from "./utils";
import { authRouter } from "./subrouters/auth";
import { health } from './subrouters/health';
export const appRouter = t.router({
    auth: authRouter,
    health
});

// export type definition of API
export type AppRouter = typeof appRouter;
