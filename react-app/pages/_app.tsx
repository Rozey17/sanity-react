import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/graphql.server";
import { MantineProvider } from "@mantine/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps);

  return (
    <MantineProvider>
      <ApolloProvider client={client}>
        {/* <Layout> */}
        <Component {...pageProps} />
        {/* </Layout> */}
      </ApolloProvider>
    </MantineProvider>
  );
}

export default MyApp;
