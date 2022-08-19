import groq from "groq";
import React from "react";
import { getClient, sanityClient } from "../../lib/sanity.server";

const query = groq`*[_type == "ad" && slug.current == $slug][0]{
  _id,
  title,
  description,
  image {
    asset-> {
      _id,
      url
    }
  }

}`;

const ad = ({ ad }) => {
  return (
    <div key={ad._id}>
      <h1 className="text-red-500">{ad.title}</h1>
      <p>{ad?.description}</p>
      {ad?.image && (
        <img
          src={ad?.image?.asset.url}
          className="object-cover h-80 w-80"
          alt=""
        />
      )}
    </div>
  );
};

export const getStaticPaths = async () => {
  const ad = await getClient().fetch(
    groq`*[_type == "ad" && defined(slug.current)][].slug.current`
  );
  return {
    paths: ad.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const ad = await getClient(preview).fetch(query, { slug: params.slug });
  return {
    props: { ad },
  };
};

export default ad;
