import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { apolloClient } from "../lib/graphql";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.initialQuery) {
    apolloClient.cache.restore(pageProps.initialQuery);
  }

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      {/* <ExitPreviewBar preview={pageProps.preview} /> */}
    </ApolloProvider>
  );
}

export default MyApp
