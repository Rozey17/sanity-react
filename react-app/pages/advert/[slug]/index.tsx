import Head from "next/head";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../../lib/graphql.server";
import {
  GetAdvertDocument,
  ListAdvertsDocument,
} from "../../../components/apollo-components";
import { GetServerSideProps } from "next";

const client = initializeApollo();

export default function Post({ advert }) {
  // const advert = client.query({
  //   query: GetAdvertDocument,
  //   variables: { slug },
  // });

  return (
    <>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      {JSON.stringify(advert, null, 2)}
    </>
  );
}

// export async function getStaticProps(params) {
//   // const slug = ctx.params.slug;
//   await client.query({
//     query: GetAdvertDocument,
//     variables: {
//       slug: params.slug,
//     },
//   });

//   return {
//     props: {
//       slug: params.slug,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const paths = (
//     await client.query({
//       query: ListAdvertsDocument,
//     })
//   ).data.allAdvert;

//   return {
//     paths: paths.map((advert) => ({ params: { slug: advert?.slug?.current } })),
//     fallback: false,
//   };
// }

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params.slug;
  const advert = await client.query({
    query: GetAdvertDocument,
    variables: {
      id: slug as string,
    },
  });
  console.log(advert);
  return {
    props: {
      advert: advert.data,
    },
  };
};
