/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { initializeApollo } from "../../../lib/graphql.server";
import {
  Advert,
  GetAdvertDocument,
} from "../../../components/apollo-components";
import { Header } from "../../../components/layout/header";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../../../lib/sanity.server";
import { Layout } from "../../../components/layout";
import {
  FlagIcon,
  HeartIcon,
  PrinterIcon,
  ShareIcon,
} from "@heroicons/react/outline";

const Map = dynamic(() => import("../../../components/map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function AdvertPage({ advert }: { advert: Advert }) {
  // console.log(advert?.title);
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example</title>
      </Head>

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
      {!advert ? (
        <section className="px-40 py-20 bg-gray-100">No ad found</section>
      ) : (
        <section className="px-40 py-20 bg-gray-100">
          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2 space-y-10">
              <img
                src={advert?.image?.asset?.url}
                alt=""
                className="object-cover w-full h-[500px] "
              />
              <div className="p-8 bg-white space-y-10">
                <h1 className="text-3xl font-bold capitalize">
                  {advert?.title}
                </h1>
                <p className="text-gray-700">{advert?.description}</p>
              </div>
              <div className="flex gap-5">
                <button
                  className="button-primary"
                  onClick={() => router.push(`/advert/${slug}/edit`)}
                >
                  modifier
                </button>
                <button
                  className="button-secondary"
                  onClick={() => {
                    alert("sûr ?");
                    client
                      .delete(advert?._id)
                      .then(() => {
                        toast.success("Effacé avec succès !");
                        router.push("/");
                      })
                      .catch((error) => toast.error(error));
                  }}
                >
                  delete
                </button>
              </div>
            </div>
            <div className="space-y-10">
              <div className=" p-5 bg-teal-600">
                <p className="font-semibold text-white text-2xl text-center">
                  {advert.price && `${advert.price} €`}
                </p>
              </div>

              <div className="flex flex-col justify-between p-8 space-y-10 bg-white">
                <p className="font-medium capitalize">ad owner</p>
                <span className="p-5 text-white bg-red-400">
                  {advert?.contact}
                </span>
              </div>
              <div className="flex flex-col justify-between p-8 space-y-5 bg-white">
                <p className="font-medium capitalize">ad action</p>
                <div className="flex justify-between text-gray-500">
                  <a href="#" className="flex flex-col">
                    <ShareIcon className="h-5" />
                    <p className="capitalize">share</p>
                  </a>
                  <a href="#" className="flex flex-col">
                    <PrinterIcon className="h-5" />
                    <p className="capitalize">print</p>
                  </a>{" "}
                  <a href="#" className="flex flex-col">
                    <HeartIcon className="h-5" />
                    <p className="capitalize">favoris</p>
                  </a>{" "}
                  <a href="#" className="flex flex-col">
                    <FlagIcon className="h-5" />
                    <p className="capitalize">report</p>
                  </a>
                </div>
              </div>
              <div className="h-96">
                {advert?.location && <Map ads={[advert]} />}
              </div>
            </div>
          </div>
        </section>
      )}

      <Toaster />
    </Layout>
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
