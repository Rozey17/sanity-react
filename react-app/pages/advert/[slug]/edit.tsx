import { ClipboardIcon } from "@heroicons/react/outline";
import { NumberInput, Select, TextInput } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

import toast, { Toaster } from "react-hot-toast";
import { createReadStream } from "fs";
import { basename } from "path";

import { useRouter } from "next/router";
import {
  Advert,
  GetAdvertDocument,
  ListAdvertsBySlugDocument,
  useGetAdvertQuery,
  useListSubCategoriesQuery,
} from "../../../components/apollo-components";
import { client } from "../../../lib/sanity.server";
import { GetServerSideProps } from "next";
import { initializeApollo } from "../../../lib/graphql.server";
import { EditAdvertForm } from "../../../components/adverts/editAdvertForm";
import { Layout } from "../../../components/layout";

export default function EditAdvertPage({ advert }: { advert: Advert }) {
  return (
    <Layout>
      <div className=" relative p-20 space-y-10 bg-gradient-to-r from-rose-100 to-teal-100">
        {/* <img
          src="https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0">
          <div className="relative p-20 space-y-10"> */}
        <EditAdvertForm advert={advert} />
        {/* </div>
        </div> */}
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
