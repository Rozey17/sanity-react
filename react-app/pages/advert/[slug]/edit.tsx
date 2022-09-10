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
      <EditAdvertForm advert={advert} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo();

  const slug = ctx.params.slug;
  const advert = await client.query({
    query: GetAdvertDocument,
    variables: {
      id: slug as string,
    },
  });
  console.log(advert.data.Advert);
  return {
    props: {
      advert: advert?.data?.Advert,
    },
  };
};
