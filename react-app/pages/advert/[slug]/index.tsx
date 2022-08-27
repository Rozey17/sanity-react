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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <section className="px-40 py-20 bg-gray-100">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-2 space-y-10">
            <img
              src={advert?.image?.asset?.url}
              alt=""
              className="object-cover w-full h-[500px] "
            />
            <div className="p-8 bg-white"></div>
          </div>
          <div className="space-y-10">
            <p>{advert?.title}</p>

            <div className="flex flex-col justify-between p-8 space-y-10 bg-white">
              <p className="font-medium capitalize">ad owner</p>
              <span className="p-5 text-white bg-red-400">
                {advert?.contact}
              </span>
            </div>
          </div>
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
