import {
  AtSymbolIcon,
  ClipboardListIcon,
  LocationMarkerIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { Select, TextInput } from "@mantine/core";
import React from "react";
import { useListSubCategoriesQuery } from "./apollo-components";

export const Search = () => {
  const { data } = useListSubCategoriesQuery();
  const listSubCategories =
    data && data?.allSubcategory ? data?.allSubcategory : [];

  return (
    <form className=" pt-6 ">
      <div className="flex items-center justify-center gap-2">
        <TextInput
          type="text"
          className="  text-sm capitalize rounded focus:outline-none"
          classNames={{
            input: "py-5 text-sm capitalize rounded focus:outline-none",
            label: "text-sm font-medium text-gray-600 font-sans",
          }}
          placeholder="search for.."
          icon={<SpeakerphoneIcon className=" w-5 h-5 text-current " />}
        />

        <TextInput
          type="text"
          className="  text-sm capitalize rounded focus:outline-none"
          classNames={{
            input: "py-5 text-sm capitalize rounded focus:outline-none",
            label: "text-sm font-medium text-gray-600 font-sans",
          }}
          placeholder="located in"
          icon={<LocationMarkerIcon className=" w-5 h-5 text-current " />}
        />

        <Select
          classNames={{
            input: "py-5 text-sm capitalize rounded focus:outline-none",
            label: "text-sm font-medium text-gray-600 font-sans",
            dropdown: "font-sans",
          }}
          // label="sous catégorie"
          className="  text-sm capitalize rounded focus:outline-none"
          placeholder="sélection de catégorie"
          searchable
          required
          // nothingFound={f({ id: Translation.no_item })}
          // value={watch("subcategory")}
          // onChange={(value) =>
          //   setValue("subcategory", value, {
          //     shouldValidate: true,
          //     shouldDirty: true,
          //     shouldTouch: true,
          //   })
          // }
          data={listSubCategories.map((subcategory) => {
            return {
              label: subcategory.name,
              value: subcategory._id,
              group: subcategory.category.name,
            };
          })}
        />

        <button className="button-primary py-3">search</button>
      </div>
    </form>
  );
};
