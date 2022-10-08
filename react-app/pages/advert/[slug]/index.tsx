/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { initializeApollo } from "../../../lib/graphql.server";
import {
  Advert,
  GetAdvertDocument,
  ListAdvertsBySlugDocument,
} from "../../../components/apollo-components";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../../../lib/sanity.server";
import { Layout } from "../../../components/layout";
import { AdActionComponent } from "../../../components/adActionComponent";
import { useSession } from "next-auth/react";
import { UserCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Map = dynamic(() => import("../../../components/map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

export default function AdvertPage({ advert }: { advert: Advert }) {
  const router = useRouter();
  const slug = router.query.slug;
  const { data: session } = useSession();
  return (
    <Layout>
      <Head>
        <title>{advert?.title}</title>
      </Head>

      <div className="relative h-32 bg-slate-800">
        <img
          src="/images/pexels-photo-4007744.jpeg"
          alt=""
          className="object-cover object-center w-full h-full opacity-30"
        />
        <div className="absolute inset-0">
          <div className="flex items-center justify-between px-40 py-10 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{advert.title}</h1>
              <div className="flex gap-3 items-center text-sm">
                <Link href="/">Accueil</Link> {">"}{" "}
                <Link
                  href={`/categories/${advert.subcategory.category.slug.current}`}
                >
                  {advert.subcategory.category.name}
                </Link>
                {">"}{" "}
                <Link
                  href={`/categories/${advert.subcategory.category.slug.current}/${advert.subcategory.slug.current}`}
                  className=""
                >
                  {advert.subcategory.name}
                </Link>
              </div>
            </div>

            {/* <svg
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
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-10 h-10 "
              viewBox="0 0 24 24"
            >
              <path d="M13.895 15.875l-.895-.447v-11c6.65 2.217 9 2.363 9 5.162v9.41h-7v-1.336c0-.758-.428-1.45-1.105-1.789zm-4.895-15.875h-4v4.292l4-1.292v-3zm10 0h-4v3l4 1.292v-4.292zm-10 17.664c0-.757.428-1.45 1.105-1.789l.895-.447v-11c-6.523 2.175-9 2.307-9 5.162v9.41h7v-1.336zm6 6.336h7v-3h-7v3zm-13 0h7v-3h-7v3z" />
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
                src={
                  advert?.image?.asset
                    ? advert?.image?.asset?.url
                    : "/images/placeholder.jpg"
                }
                alt=""
                className="object-cover w-full h-[500px] "
              />
              <div className="p-8 bg-white space-y-10">
                <h1 className="text-3xl font-bold capitalize">
                  {advert?.title}
                </h1>
                <p className="text-gray-700">{advert?.description}</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className=" p-5 bg-teal-500">
                <p className="font-semibold text-white text-2xl text-center">
                  {advert.price && `${advert.price} €`}
                </p>
              </div>

              <div className="flex flex-col justify-between p-8 space-y-5 bg-white">
                <p className="font-medium">Annonce publiée par</p>
                <div className="flex items-center gap-3">
                  <UserCircleIcon className="h-20 w-20" />
                  <p className="">{advert?.user?.name}</p>
                </div>
                <div className="p-5 text-white bg-red-400">
                  {advert?.contact}
                </div>
              </div>
              <div className=" p-8  bg-white">
                <AdActionComponent />
              </div>
              <div className="h-80">
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
  const adverts = await client.query({
    query: ListAdvertsBySlugDocument,
    variables: {
      slug: slug as string,
    },
  });

  const advert = adverts.data.allAdvert[0] || null;
  console.log(advert);
  return {
    props: {
      advert: advert,
    },
  };
};
