// src/server/router/index.ts

import { router } from "./utils";
import { authRouter } from "./subrouters/auth";
import { health } from './subrouters/health';
export const appRouter = router({
    auth: authRouter,
    health
});

// export type definition of API
export type AppRouter = typeof appRouter;
