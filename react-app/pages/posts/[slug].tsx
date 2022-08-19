import Head from "next/head";
import { useQuery } from "@apollo/client";
import { getClient } from "../../lib/graphql.server";
import { AllPosts, GetPostBySlug } from "../../lib/queries";

export default function Post({ slug }) {
  const posts = useQuery(GetPostBySlug, {
    variables: {
      slug,
    },
  }).data;

  return (
    <>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      {JSON.stringify(posts, null, 2)}
    </>
  );
}

export async function getStaticProps({ preview = false, params }) {
  await getClient(preview).query({
    query: GetPostBySlug,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      initialQuery: getClient(preview).cache.extract(),
      slug: params.slug,
      preview,
    },
  };
}

export async function getStaticPaths({ preview = false }) {
  const paths = (
    await getClient(preview).query({
      query: AllPosts,
    })
  ).data.allPost;

  return {
    paths: paths.map((post) => ({ params: { slug: post.slug.current } })),
    fallback: false,
  };
}
