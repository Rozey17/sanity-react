import {
  AtSymbolIcon,
  ClipboardListIcon,
  LocationMarkerIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { Select, TextInput } from "@mantine/core";
import React, { useState } from "react";
import {
  useListAdvertSearchQuery,
  useListSubCategoriesQuery,
} from "./apollo-components";
import Autocomplete from "react-google-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { useRouter } from "next/router";

export const Search = () => {
  const router = useRouter();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [title, setTitle] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const { data } = useListSubCategoriesQuery();
  const listSubCategories =
    data && data?.allSubcategory ? data?.allSubcategory : [];

  return (
    <>
      <form className=" pt-6 ">
        <div className="flex items-center justify-center gap-2">
          <TextInput
            type="text"
            className="  text-sm  rounded focus:outline-none"
            classNames={{
              input: "py-5 text-sm  rounded focus:outline-none",
              label: "text-sm font-medium text-gray-600 font-sans",
            }}
            placeholder="search for.."
            onChange={(e) => setTitle(e.target.value)}
            icon={<SpeakerphoneIcon className=" w-5 h-5 text-current " />}
          />

          <Autocomplete
            className="rounded p-3 text-black border border-gray-300 font-sans text-sm focus:outline-none"
            apiKey="AIzaSyCzgrgiyAUkKbLlAR2vT2PuEYw7hiRv7gg"
            onPlaceSelected={(place) =>
              geocodeByAddress(place.formatted_address)
                .then((results) => getLatLng(results[0]))
                .then(({ lat, lng }) => {
                  setLatitude(lat);
                  setLongitude(lng);
                })
            }
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
            onChange={(value) => setSubCategory(value)}
            data={listSubCategories.map((subcategory) => {
              return {
                label: subcategory.name,
                value: subcategory._id,
                group: subcategory.category.name,
              };
            })}
          />

          <button
            onClick={() =>
              router.push(
                `/adverts?lat=${latitude}&lng=${longitude}&title=${title}&subcategory=${subCategory}`
              )
            }
            className="button-primary py-3"
          >
            search
          </button>
        </div>
      </form>
    </>
  );
};
