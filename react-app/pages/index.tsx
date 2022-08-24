import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { AdvertCard } from "../components/adverts/advertCard";
import { ListAdvertsDocument } from "../components/apollo-components";
import { Header } from "../components/layout/header";
import { Hero } from "../components/layout/hero";
import { initializeApollo } from "../lib/graphql.server";

const Home = ({ ads }: any) => {
  console.log(ads);

  return (
    <div>
      <Hero />
      <section className="p-40 bg-gray-100 space-y-10">
        <div className="flex justify-center items-center gap-2">
          <button className="button-primary">latest ads</button>
          <button className="button-primary">ending soon</button>
        </div>
        <div className="flex gap-3">
          {ads.map((ad, index) => (
            <AdvertCard key={index} ad={ad} />
          ))}
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const client = initializeApollo();

  const { data } = await client.query({
    query: ListAdvertsDocument,
  });
  const ads = data.allAdvert;

  return {
    props: { ads },
  };
};

export default Home;
