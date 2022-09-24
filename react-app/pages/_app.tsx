import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/graphql.server";
import { MantineProvider } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <SessionProvider>
      <MantineProvider>
        <ApolloProvider client={client}>
          <Head>
            <title>Annonce 242</title>
          </Head>

          <Component {...pageProps} />
        </ApolloProvider>
      </MantineProvider>
    </SessionProvider>
  );
}

export default MyApp;
