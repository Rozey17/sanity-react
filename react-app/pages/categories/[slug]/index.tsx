import { GetServerSideProps } from "next";
import React from "react";
import { AdvertCard } from "../../../components/adverts/advertCard";
import { ListAdvertsByCategoryDocument } from "../../../components/apollo-components";
import { initializeApollo } from "../../../lib/graphql.server";

const CategoriesPage = ({ adverts }) => {
  return (
    <>
      <div className="flex items-center justify-center p-5 bg-white border">
        showing {adverts.length} of {adverts.length} ad(s) found
      </div>
      <div className="grid grid-cols-4 gap-3">
        {adverts?.map((ad, index) => (
          <AdvertCard key={index} advert={ad} />
        ))}
      </div>
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
