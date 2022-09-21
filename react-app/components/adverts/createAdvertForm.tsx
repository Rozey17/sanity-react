/* eslint-disable @next/next/no-img-element */
import { ClipboardIcon } from "@heroicons/react/outline";
import { NumberInput, Select, Textarea, TextInput } from "@mantine/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "../../lib/sanity.server";
import {
  useListSubCategoriesQuery,
  useListUsersByEmailQuery,
  User,
} from "../apollo-components";
import toast, { Toaster } from "react-hot-toast";
import { createReadStream } from "fs";
import { basename } from "path";
import { useRouter } from "next/router";
import slugify from "slugify";
import { useMapEvents, MapContainer, TileLayer } from "react-leaflet";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useSession } from "next-auth/react";
interface Location {
  lat: number;
  lng: number;
}

export function CreateAdvertForm() {
  const { data: session } = useSession();
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [imagesAssets, setImagesAssets] = useState(null);

  const [previewImage, setPreviewImage] = useState(null);
  const { data } = useListSubCategoriesQuery();
  const listSubCategories =
    data && data?.allSubcategory ? data?.allSubcategory : [];
  const router = useRouter();

  const { data: usersData } = useListUsersByEmailQuery({
    variables: {
      email: session?.user?.email,
    },
  });

  const user = usersData && usersData?.allUser ? usersData?.allUser[0] : null;

  console.log(user);
  useEffect(() => {
    if (navigator?.geolocation) {
      navigator.geolocation.watchPosition(function (
        position: GeolocationPosition
      ) {
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      });
    }
  }, []);

  console.log("lat:, lng", lat, lng);

  const validationSchema = zod.object({
    title: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(2, "trop court")
      .max(50, "trop long"),
    name: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(2, "trop court")
      .max(50, "trop long"),
    description: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(15, "trop court")
      .max(500, "trop long"),
    contact: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(2, "trop court")
      .max(50, "trop long"),
    subcategory: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(2, "trop court")
      .max(50, "trop long"),
    // location: zod.object({
    //   lat: zod.string(),
    //   lng: zod.string(),
    // }),
    // slug: zod.object({
    //   current: zod.string(),
    // }),
    // image: zod.object({}),
    price: zod.number().min(0).max(1000),
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    // resolver: zodResolver(validationSchema),
    shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      title: "",
      description: "",
      contact: "",
      subcategory: "",
      location: {
        lat: undefined,
        lng: undefined,
      },
      slug: {
        current: undefined,
      },
      price: 0,
      image: {
        asset: { url: undefined },
      },
      user: user,
    },
  });

  return (
    <>
      <form
        className="w-2/5 p-10 mx-auto space-y-5 bg-white rounded-lg"
        onSubmit={handleSubmit(async (input) => {
          await client
            .create({
              _type: "advert",
              title: input.title,
              description: input.description,
              contact: input.contact,
              slug: {
                current: slugify(input.title, { lower: true }),
              },
              subcategory: {
                _type: "reference",
                _weak: true,
                _ref: input.subcategory,
              },
              price: input.price,
              location: {
                _type: "geopoint",
                lat: lat,
                lng: lng,
              },
              image: {
                _type: "image",
                asset: {
                  _type: "image",
                  _ref: imagesAssets?._id,
                },
              },
              user: {
                _type: "reference",
                _weak: true,
                _ref: user?._id as User,
              },
            })
            .then((res) => {
              router.push(`/advert/${res._id}`);
            });
        })}
      >
        <TextInput
          classNames={{
            input: errors.title
              ? "border border-red-500 capitalize"
              : "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="titre"
          {...register("title")}
          placeholder="title"
          required
        />
        <Select
          classNames={{
            input: errors.subcategory
              ? "border border-red-500 capitalize"
              : "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
            dropdown: "font-sans",
          }}
          label="dans la catégorie"
          placeholder="Veuillez sélectionner une catégorie"
          searchable
          required
          // nothingFound={f({ id: Translation.no_item })}
          value={watch("subcategory")}
          onChange={(value) =>
            setValue("subcategory", value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }
          data={listSubCategories.map((subcategory) => {
            return {
              label: subcategory.name,
              value: subcategory._id,
              group: subcategory.category.name,
            };
          })}
          // icon={<ClipboardIcon className="w-5 h-5 text-sky-500" />}
        />
        <TextInput
          classNames={{
            input: errors.contact
              ? "border border-red-500 capitalize"
              : "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="contact"
          {...register("contact")}
          placeholder="contact"
          required
        />
        <Textarea
          classNames={{
            input: errors.description
              ? "border border-red-500 capitalize "
              : "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="Description"
          {...register("description")}
          placeholder="description"
          required
        />

        <NumberInput
          classNames={{
            input: errors.price
              ? "border border-red-500 capitalize "
              : "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="price"
          value={watch("price")}
          placeholder="price"
          onChange={(value) =>
            setValue("price", value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }
        />
        <input
          id="photo"
          type="file"
          accept="image/*"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            if (event?.target?.files?.[0]) {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setPreviewImage(reader.result as string);
              };
              reader.readAsDataURL(file);
              client.assets
                .upload("image", file, {
                  contentType: file.type,
                  filename: file.name,
                })
                .then((document) => {
                  setImagesAssets(document);
                });
            }
          }}
        />
        {previewImage && (
          <img
            src={previewImage}
            className="object-contain h-[500px] w-[500px]"
            alt="preview image"
          />
        )}

        <button
          disabled={!isValid || isSubmitting}
          className={
            !isValid
              ? "disabled:cursor-not-allowed text-gray-400 bg-gray-200  w-full px-4 py-2 rounded-md font-medium"
              : "button-primary w-full"
          }
        >
          {isSubmitting ? "Chargement..." : "Créer un compte"}
        </button>
      </form>
      <Toaster />
    </>
  );
}
