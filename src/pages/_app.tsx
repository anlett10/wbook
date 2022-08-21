// src/pages/_app.tsx
import "~/styles/globals.css";

import { NextPage } from "next";
import { AppProps } from "next/app";
import { AppType } from "next/dist/shared/lib/utils";
import { ReactElement, ReactNode } from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}) as AppType;

export default trpc.withTRPC(MyApp);
