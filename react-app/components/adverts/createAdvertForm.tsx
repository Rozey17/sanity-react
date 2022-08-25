import { ClipboardIcon } from "@heroicons/react/outline";
import { NumberInput, Select, TextInput } from "@mantine/core";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { client } from "../../lib/sanity.server";
import { useListSubCategoriesQuery } from "../apollo-components";

export function CreateAdvertForm() {
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
      location: "",
      price: 0,
      // image: "",
    },
  });

  const mutations = [
    {
      createOrReplace: {
        _id: "123",
        _type: "cms.article",
        title: "An article",
      },
    },
  ];
  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(async (input) => {
        client
          .create({
            _type: "advert",
            title: input.title,
            description: input.description,
            contact: input.contact,
            subcategory: {
              _type: "subcategory",
              _ref: input.subcategory,
            },
            price: input.price,
            location: input.location,
            // image: input.image,
          })
          .then((res) => {
            console.log(`Ad was created, document ID is ${res._id}`);
          });
      })}
    >
      <TextInput type="text" {...register("contact")} placeholder="contact" />
      <textarea {...register("description")} placeholder="description" />
      <TextInput type="text" {...register("title")} placeholder="title" />
      <TextInput type="text" {...register("location")} placeholder="location" />
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
        icon={<ClipboardIcon className="w-5 h-5 text-sky-500" />}
      />
      <NumberInput
        placeholder="price"
        onChange={(value) =>
          setValue("price", value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          })
        }
      />
      <button>submit</button>
    </form>
  );
}
