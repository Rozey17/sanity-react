import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from "next";
import React, { useState } from "react";

import dynamic from "next/dynamic";
import { Accordion, Collapse } from "@mantine/core";
import { useRouter } from "next/router";
import {
  Advert,
  ListAdvertsBySubCategoryDocument,
  useListCategoriesQuery,
} from "../../../../components/apollo-components";
import { Header } from "../../../../components/layout/header";
import { AdvertCard } from "../../../../components/adverts/advertCard";
import { initializeApollo } from "../../../../lib/graphql.server";
import Link from "next/link";

const Map = dynamic(() => import("../../../../components/map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

const CategoriesPage = ({ adverts }: { adverts: Advert[] }) => {
  const router = useRouter();
  // const slug = router.query.slug;
  const [id, setId] = useState("");
  const { data } = useListCategoriesQuery();
  const listCategories = data && data?.allCategory ? data?.allCategory : [];

  const [focusArea, setFocusArea] = useState([
    { focus: "No Poverty", isAdded: false },
    { focus: "Zero Hunger", isAdded: false },
    { focus: "Good Healthy and Well-Being", isAdded: false },
    { focus: "Quality Education", isAdded: false },
    { focus: "Gender Equality", isAdded: false },
    { focus: "Clean Water and Sanitation", isAdded: false },
    { focus: "Affordance and clean energy", isAdded: false },
    { focus: "Decent work and economic growth", isAdded: false },
    { focus: "Industry Innovation and Infrastructure", isAdded: false },
    { focus: "Reduced Inequalities", isAdded: false },
    { focus: "Sustainable cities and communities", isAdded: false },
    { focus: "Responsible Consumption and Production", isAdded: false },
    { focus: "Climate Action", isAdded: false },
    { focus: "Life Below Wate", isAdded: false },
    { focus: "Life on Land", isAdded: false },
    { focus: "Peace, Justice and Strong Institutions", isAdded: false },
    { focus: "Partnerships for the goals", isAdded: false },
    { focus: "Sustainable Development Goals", isAdded: false },
  ]);
  return (
    <>
      <Header />
      <div className="grid min-h-screen grid-cols-5">
        <aside className="sticky top-0 col-span-1 p-10 px-5 overflow-y-scroll border-r scrollbar-hide">
          Catégories
          <Accordion transitionDuration={300}>
            {listCategories.map((item, index) => (
              <Accordion.Item key={index} value={item?.name}>
                <Accordion.Control>{item?.name}</Accordion.Control>
                {item.subcategories.map((sub) => (
                  <Accordion.Panel key={sub._id} className="">
                    <input
                      type="checkbox"
                      className="mr-2 rounded-full"
                      // checked={}
                      onChange={(value) => !value.target.checked}
                      onClick={() => {
                        setId(sub?._id);
                        router.push(
                          `/categories/${sub?.category?.slug?.current}/${sub?.slug?.current}`
                        );
                      }}
                    />
                    <span className="text-sm text-gray-400">{sub?.name}</span>
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            ))}
          </Accordion>
        </aside>
        <div className="col-span-2 p-10 space-y-10 bg-gray-100">
          <div className="flex items-center justify-center p-5 bg-white border">
            showing {adverts.length} of {adverts.length} ad(s) found
          </div>
          <div className="grid grid-cols-3 gap-3">
            {adverts?.map((ad, index) => (
              <AdvertCard key={index} advert={ad} />
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <Map ads={adverts} />
        </div>
      </div>
      {/* newsletter section */}
      <section className="px-40 py-8 bg-white ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <PaperAirplaneIcon className="w-10 h-10 mr-2 rotate-45" />
            <span className="">
              <h3 className="text-2xl font-medium">Subscribe To Newsletter</h3>
              <p className="">and receive new ads in inbox</p>
            </span>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-3 px-5 text-sm border border-gray-300 rounded-full rounded-r-none focus:outline-none"
            />
            <button className="p-3 px-5 text-sm text-white bg-black rounded-full rounded-l-none focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="px-40 py-10 bg-slate-700">
        <div className="grid grid-cols-3 gap-10">
          <div className="space-y-3">
            <h1 className="text-xl text-white capitalize font-bold">
              annonce 242
            </h1>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam distinctio porro optio ea nostrum quod corrupti illum
              non itaque quisquam!
            </p>
            <p className="text-gray-400 text-sm">if ou wish to contact us</p>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl text-white capitalize font-bold">
              quick links
            </h1>
            {[
              "How It Works",
              "FAQ",
              "News",
              "Browse With Map",
              "Browse Ads",
            ].map((item, index) => (
              <Link key={index} href="#">
                <a className="text-gray-400 hover:text-white text-sm flex flex-col w-fit">
                  {item}
                </a>
              </Link>
            ))}
          </div>
          <div className="space-y-3">
            <h1 className="text-xl text-white capitalize font-bold">
              popular ads
            </h1>
            {[
              "How It Works",
              "FAQ",
              "News",
              "Browse With Map",
              "Browse Ads",
            ].map((item, index) => (
              <Link key={index} href="#">
                <a className="text-gray-400 hover:text-white text-sm flex flex-col w-fit">
                  {item}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className=""></div>
      </footer>
    </>

    // <>{JSON.stringify(adverts, null, 2)}</>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo();

  const subcategory = ctx.params.subcategory;
  const adverts = await client.query({
    query: ListAdvertsBySubCategoryDocument,
    variables: {
      slug: subcategory as string,
    },
  });
  console.log(adverts.data.allAdvert);
  return {
    props: {
      adverts: adverts.data?.allAdvert,
    },
  };
};

export default CategoriesPage;
