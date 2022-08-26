import { ClipboardIcon } from "@heroicons/react/outline";
import { NumberInput, Select, TextInput } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { client } from "../../lib/sanity.server";
import { useListSubCategoriesQuery } from "../apollo-components";
import toast, { Toaster } from "react-hot-toast";
import { createReadStream } from "fs";
import { basename } from "path";
export function CreateAdvertForm() {
  const [imagesAssets, setImagesAssets] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
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
      title: "",
      description: "",
      contact: "",
      subcategory: "",
      // location: {},
      price: 0,
      image: {},
    },
  });

  return (
    <>
      <form
        className="flex flex-col w-1/3 mx-auto"
        onSubmit={handleSubmit(async (input) => {
          await client
            .create({
              _type: "advert",
              title: input.title,
              description: input.description,
              contact: input.contact,
              subcategory: {
                _type: "reference",
                _ref: input.subcategory,
              },
              price: input.price,
              // location: input.location,
              image: {
                _type: "image",
                asset: {
                  _type: "image",
                  _ref: imagesAssets?._id,
                },
              },
            })
            .then((res) => {
              // console.log(`Ad was created, document ID is ${res._id}`);
              reset();
              toast.success(`Ad was created, document ID is ${res._id}`);
            });
        })}
      >
        <TextInput type="text" {...register("contact")} placeholder="contact" />
        <textarea {...register("description")} placeholder="description" />
        <TextInput type="text" {...register("title")} placeholder="title" />
        {/* <TextInput
          type="text"
          {...register("location")}
          placeholder="location"
        /> */}
        <Select
          classNames={{
            input: errors.subcategory ? "error-input" : "input",
            label: "text-sm font-medium text-gray-600 font-sans",
            dropdown: "font-sans",
          }}
          label=""
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
        <NumberInput
          defaultValue={0}
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
          // className={errors.photo ? "error-input" : "input"}
        />
        {previewImage && (
          <img src={previewImage} className="h-60 w-60 object-contain" />
        )}
        <button>submit</button>
      </form>
      <Toaster />
    </>
  );
}
