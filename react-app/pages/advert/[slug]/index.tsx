import Head from "next/head";
import { initializeApollo } from "../../../lib/graphql.server";
import { GetAdvertDocument } from "../../../components/apollo-components";
import { Header } from "../../../components/layout/header";
import { GetServerSideProps } from "next";

export default function AdvertPage({ advert }) {
  console.log(advert?.title);
  return (
    <>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>
      <Header />
      <div className="relative h-32 bg-slate-600">
        <img
          src="https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg"
          alt=""
          className="object-cover w-full h-full opacity-30"
        />
        <div className="absolute inset-0">
          <div className="flex items-center justify-between px-40 py-10 text-white">
            <span>hey</span>
            <span>hey</span>
          </div>
        </div>
      </div>
      <section className="px-40 py-20 bg-gray-100">
        <div className="grid grid-cols-3 gap-5">
          <div className="h-[500px] col-span-2">
            <img
              src={advert?.image?.asset?.url}
              alt=""
              className="object-contain w-full h-full "
            />
          </div>
          <div className="">{advert?.title}</div>
        </div>
      </section>
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
  const client = initializeApollo();

  const slug = ctx.params.slug;
  const advert = await client.query({
    query: GetAdvertDocument,
    variables: {
      id: slug as string,
    },
  });
  console.log(advert?.data?.Advert);
  return {
    props: {
      advert: advert?.data?.Advert,
    },
  };
};
