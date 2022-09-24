import { gql } from "@apollo/client";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import { GetStaticProps } from "next";
import React from "react";
import { AdvertCard } from "../components/adverts/advertCard";
import {
  ListAdvertsDocument,
  useListUsersQuery,
} from "../components/apollo-components";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { Hero } from "../components/layout/hero";
import { initializeApollo } from "../lib/graphql.server";

const Home = ({ ads }: any) => {
  // console.log(ads);
 

  return (
    <>
      <Hero />
      <section className="p-40 bg-gray-100 space-y-10">
        <div className="flex justify-center items-center gap-2">
          <button className="button-primary">latest ads</button>
          <button className="button-primary">ending soon</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {ads.map((ad, index) => (
            <AdvertCard key={index} advert={ad} />
          ))}
        </div>
      </section>
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
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();

  const { data } = await client.query({
    query: ListAdvertsDocument,
  });
  const ads = data.allAdvert;

  return {
    props: { ads },
    revalidate: 60 * 5,
  };
};

export default Home;
