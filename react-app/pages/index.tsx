import { GetStaticProps } from "next";
import { groq } from "next-sanity";
import React from "react";
import { getClient } from "../lib/sanity.server";

const Home = ({ ads }: any) => {
  console.log(ads);
  return (
    <div>
      {/* {JSON.stringify(ads)} */}
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
  const ads = await getClient(preview).fetch(groq`*[_type == "ad"]{
      _id,
    title,
    description,
    image {
      asset-> {
        _id,
        url
      }}
  }`);
  return {
    props: { ads },
  };
};

export default Home;
