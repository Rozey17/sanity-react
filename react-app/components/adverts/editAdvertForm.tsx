import { NumberInput, Select, Textarea, TextInput } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import toast, { Toaster } from "react-hot-toast";
import { client } from "../../lib/sanity.server";
import { Advert, useListSubCategoriesQuery } from "../apollo-components";
import { useRouter } from "next/router";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export function EditAdvertForm({ advert }: { advert: Advert }) {
  const [imagesAssets, setImagesAssets] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const router = useRouter();

  const { data } = useListSubCategoriesQuery();
  const listSubCategories =
    data && data?.allSubcategory ? data?.allSubcategory : [];

  const validationSchema = zod.object({
    title: zod
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
    resolver: zodResolver(validationSchema),
    // shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      title: advert?.title,
      description: advert?.description,
      contact: advert?.contact,
      subcategory: advert?.subcategory?._id,
      slug: advert?.slug?.current,
      price: advert?.price,
      image: advert?.image,
    },
  });

  return (
    <>
      <form
        className="flex flex-col w-2/5 rounded-lg shadow-lg mx-auto space-y-5 p-10 bg-white"
        onSubmit={handleSubmit(async (input) => {
          await client
            .patch(advert?._id)
            .set({
              title: input?.title,
              description: input?.description,
              contact: input?.contact,
              slug: {
                current: slugify(input?.title, { lower: true }),
              },
              subcategory: {
                _type: "reference",
                _ref: input?.subcategory,
              },
              price: input?.price,

              image:
                imagesAssets !== null
                  ? {
                      _type: "image",
                      asset: {
                        _type: "image",
                        _ref: imagesAssets?._id,
                      },
                    }
                  : advert?.image?.asset?._id,
            })
            .commit()
            .then((res) => {
              router.push(`/advert/${advert?.slug?.current}`);
            });
        })}
      >
        <h1 className="text-center text-3xl font-extrabold text-shadow-md line-clamp-2">
          Modifier votre annonce
        </h1>
        <TextInput
          classNames={{
            input: "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="titre"
          {...register("title")}
          placeholder="intitulé de l'annonce"
          required
          error={errors.title && errors.title.message}
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
            input: "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="contact"
          {...register("contact")}
          placeholder="contact"
          required
          error={errors.contact && errors.contact.message}
        />
        <Textarea
          classNames={{
            input: " font-sans placeholder:capitalize",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="Description"
          {...register("description")}
          placeholder="description"
          required
          error={errors.description && errors.description.message}
        />

        <NumberInput
          classNames={{
            input: "capitalize font-sans",
            label: " font-medium text-gray-600 font-sans capitalize",
          }}
          label="prix"
          value={watch("price")}
          placeholder="prix"
          onChange={(value) =>
            setValue("price", value, {
              shouldValidate: true,
              shouldDirty: true,
              shouldTouch: true,
            })
          }
          required
          error={errors.price && errors.price.message}
        />
        <input
          {...register("image")}
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
          <img src={previewImage} className="object-contain h-60 w-60" />
        )}
        <button
          disabled={!isValid || isSubmitting}
          className={
            !isValid
              ? "disabled:cursor-not-allowed text-gray-400 bg-gray-200  w-full px-4 py-2 rounded-md font-medium"
              : "button-third w-full"
          }
        >
          {isSubmitting ? "Chargement..." : "Modifier"}
        </button>
      </form>
      <Toaster />
    </>
  );
}
