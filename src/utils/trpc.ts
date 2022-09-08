// src/utils/trpc.ts
import { createTRPCNext } from '@trpc/next';
import type { AppRouter } from "../server/router";
import superjson from "superjson";
import { NextPageContext } from 'next';

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export interface SSRContext extends NextPageContext {
  /**
   * Set HTTP Status code
   * @example
   * const utils = trpc.useContext();
   * if (utils.ssrContext) {
   *   utils.ssrContext.status = 404;
   * }
   */
  status?: number;
}

export const trpc = createTRPCNext<AppRouter, SSRContext>({
  config() {
    return {
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
    };
  },
  ssr: false,
});

