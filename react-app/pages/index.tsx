import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import React from "react";
import { GetAdsDocument } from "../components/apollo-components";
import { Header } from "../components/layout/header";
import { Hero } from "../components/layout/hero";
import { initializeApollo } from "../lib/graphql.server";

const Home = ({ ads }: any) => {
  console.log(ads);
  return (
    <div>
      <Hero />
      {ads.map((ad: any) => (
        <div key={ad._id}>
          <h1 className="text-cyan-500">{ad.title}</h1>
          <p>{ad?.description}</p>
          {ad?.image && (
            <img
              src={ad?.image?.asset.url}
              className="object-cover h-80 w-80"
              alt=""
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const client = initializeApollo();

  const { data } = await client.query({
    query: GetAdsDocument,
  });
  const ads = data.allAd;

  return {
    props: { ads },
  };
};

export default Home;
