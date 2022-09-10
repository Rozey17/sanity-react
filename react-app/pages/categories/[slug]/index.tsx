import { CheckIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { AdvertCard } from "../../../components/adverts/advertCard";
import {
  Advert,
  Category,
  ListAdvertsByCategoryDocument,
  Subcategory,
  useListCategoriesQuery,
} from "../../../components/apollo-components";
import { Header } from "../../../components/layout/header";
import { initializeApollo } from "../../../lib/graphql.server";
import dynamic from "next/dynamic";
import { Accordion, Collapse } from "@mantine/core";
import { useRouter } from "next/router";
import { Layout } from "../../../components/layout";

const Map = dynamic(() => import("../../../components/map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});

const CategoriesPage = ({ adverts }: { adverts: Advert[] }) => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;

  const [id, setId] = useState("");
  const { data } = useListCategoriesQuery();
  const listCategories = data && data?.allCategory ? data?.allCategory : [];
  return (
    <Layout>
      <div className="grid min-h-screen grid-cols-5">
        <aside className="sticky top-0 col-span-1 p-10 px-5 overflow-y-scroll border-r scrollbar-hide">
          Catégories
          <Accordion transitionDuration={300}>
            {listCategories.map((item, index) => (
              <Accordion.Item key={index} value={item?.name}>
                <Accordion.Control
                  icon={
                    item?.slug.current === slug && (
                      <CheckIcon className="w-5 h-5 text-teal-500" />
                    )
                  }
                >
                  {item?.name}
                </Accordion.Control>
                {item.subcategories.map((sub) => (
                  <Accordion.Panel key={sub._id} className="">
                    <input
                      type="checkbox"
                      className="mr-2 rounded-full"
                      onClick={() =>
                        router.push(
                          `/categories/${sub?.category?.slug?.current}/${sub?.slug?.current}`
                        )
                      }
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
          {adverts.length > 0 && <Map ads={adverts} />}
        </div>
      </div>
    </Layout>

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
