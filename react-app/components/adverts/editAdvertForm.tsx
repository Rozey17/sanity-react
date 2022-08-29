import { ClipboardIcon } from "@heroicons/react/outline";
import { NumberInput, Select, TextInput } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import toast, { Toaster } from "react-hot-toast";
import { createReadStream } from "fs";
import { basename } from "path";
import { client } from "../../lib/sanity.server";
import {
  useGetAdvertQuery,
  useListSubCategoriesQuery,
} from "../apollo-components";
import { useRouter } from "next/router";

export function EditAdvertForm() {
  const [imagesAssets, setImagesAssets] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const router = useRouter();
  const slug = router.query.slug;
  const { data: advertData } = useGetAdvertQuery({
    variables: {
      id: slug as string,
    },
  });

  const advert = advertData && advertData?.Advert ? advertData?.Advert : null;
  //   console.log(advert?.title);
  const { data } = useListSubCategoriesQuery();
  const listSubCategories =
    data && data?.allSubcategory ? data?.allSubcategory : [];
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    //   resolver: zodResolver(validationSchema),
    shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      title: advert?.title,
      description: advert?.description,
      contact: advert?.contact,
      subcategory: advert?.subcategory?._id,
      slug: advert?.slug,
      price: advert?.price,
      image: advert?.image,
    },
  });

  return (
    <>
      <form
        className="flex flex-col w-1/3 mx-auto"
        onSubmit={handleSubmit(async (input) => {
          await client
            .createOrReplace({
              _id: advert?._id,
              _type: "advert",
              title: input?.title,
              description: input?.description,
              contact: input?.contact,
              slug: {
                current: slugify(input?.title, { lower: true }),
              },
              // slug: input.slug,
              subcategory: {
                _type: "reference",
                _ref: input?.subcategory,
              },
              price: input?.price,
              // location: input.location,
              // image: {
              //   _type: "image",
              //   asset: {
              //     _type: "image",
              //     _ref: imagesAssets && imagesAssets?._id,
              //   },
              // },
              image: input.image,
            })
            .then((res) => {
              // console.log(`Ad was created, document ID is ${res._id}`);
              // reset();
              toast.success(`Ad was created, document ID is ${res._id}`);
              router.push(`/advert/${res._id}`);
            });
        })}
      >
        <TextInput label="Titre" {...register("title")} placeholder="title" />

        <TextInput
          label="Contact"
          {...register("contact")}
          placeholder="contact"
        />
        <textarea
          //   value={watch("description")}
          {...register("description")}
          placeholder="description"
        />
        <Select
          classNames={{
            input: errors.subcategory ? "error-input" : "input",
            label: "text-sm font-medium text-gray-600 font-sans",
            dropdown: "font-sans",
          }}
          label="catégorie"
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
            };
          })}
          // icon={<ClipboardIcon className="w-5 h-5 text-sky-500" />}
        />
        {/* <TextInput
          type="text"
          {...register("location")}
          placeholder="location"
        /> */}

        <NumberInput
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
          // value={watch("image")}
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
          // className={errors.photo ? "error-input" : "input"}
        />
        {previewImage && (
          <img src={previewImage} className="object-contain h-60 w-60" />
        )}
        <button>submit</button>
      </form>
      <Toaster />
    </>
  );
}
