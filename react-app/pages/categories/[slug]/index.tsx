import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { AdvertCard } from "../../../components/adverts/advertCard";
import {
  Category,
  ListAdvertsByCategoryDocument,
  Subcategory,
  useListCategoriesQuery,
} from "../../../components/apollo-components";
import { Header } from "../../../components/layout/header";
import { initializeApollo } from "../../../lib/graphql.server";
import dynamic from "next/dynamic";
import { Accordion, Collapse } from "@mantine/core";

const Map = dynamic(() => import("../../../components/map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

const CategoriesPage = ({ adverts }) => {
  const [opened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Category>(null);
  const [selectedSubCat, setSelectedSubCat] = useState<Subcategory>(null);
  const { data } = useListCategoriesQuery();
  const listCategories = data && data?.allCategory ? data?.allCategory : [];
  return (
    <>
      <Header />
      <div className="grid grid-cols-5 h-screen">
        <aside className="top-0 sticky overflow-y-scroll p-10 scrollbar-hide  border-r col-span-1">
          Catégories
          <Accordion transitionDuration={300}>
            {listCategories.map((item, index) => (
              <Accordion.Item key={index} value={item?.name}>
                <Accordion.Control>{item?.name}</Accordion.Control>
                {item.subcategories.map((sub) => (
                  <Accordion.Panel key={sub._id}>
                    <p className="text-sm text-gray-400">{sub?.name}</p>
                  </Accordion.Panel>
                ))}
              </Accordion.Item>
            ))}
          </Accordion>
        </aside>
        <div className="col-span-2 bg-gray-100 p-10 space-y-10">
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
      <section className="py-8 px-40 bg-white ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <PaperAirplaneIcon className="w-10 h-10 mr-2 rotate-45" />
            <span className="">
              <h3 className="font-medium text-2xl">Subscribe To Newsletter</h3>
              <p className="">and receive new ads in inbox</p>
            </span>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-3 px-5 rounded-full rounded-r-none focus:outline-none border border-gray-300 text-sm"
            />
            <button className="p-3 px-5 text-sm text-white rounded-full rounded-l-none focus:outline-none bg-black">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-slate-600 py-10 px-40">
        <div className=""></div>
        <div className=""></div>
      </footer>
    </>

    // <>{JSON.stringify(adverts, null, 2)}</>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo();

  const slug = ctx.params.slug;
  const adverts = await client.query({
    query: ListAdvertsByCategoryDocument,
    variables: {
      slug: slug as string,
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
