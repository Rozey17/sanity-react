/* eslint-disable @next/next/no-img-element */
import {
  AtSymbolIcon,
  BriefcaseIcon,
  HeartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Advert } from "../apollo-components";
import Geocode from "react-geocode";

export const AdvertCard = ({ advert }: { advert: Advert }) => {
  const router = useRouter();
  const [address, setAddress] = useState();
  Geocode.setApiKey("AIzaSyCzgrgiyAUkKbLlAR2vT2PuEYw7hiRv7gg");
  Geocode.setRegion("fr");
  // Geocode.fromLatLng(advert?.location?.lat, advert?.location?.lng).then(
  //   (response) => {
  //     const address = response.results[0].formatted_address;
  //     setAddress(address);
  //   }
  // );

  Geocode.fromLatLng(advert?.location?.lat, advert?.location?.lng).then(
    (response) => {
      const address = response.results[0].formatted_address;
      let city, state, country;
      for (let i = 0; i < response.results[0].address_components.length; i++) {
        for (
          let j = 0;
          j < response.results[0].address_components[i].types.length;
          j++
        ) {
          switch (response.results[0].address_components[i].types[j]) {
            case "locality":
              city = response.results[0].address_components[i].long_name;
              break;
            case "administrative_area_level_1":
              state = response.results[0].address_components[i].long_name;
              break;
            case "country":
              country = response.results[0].address_components[i].long_name;
              break;
          }
        }
      }
      // console.log(city, state, country);
      // console.log(advert?.location?.lat);
      setAddress(city);
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <div
      className="cursor-pointer duration-300 hover:shadow-md rounded-md overflow-hidden bg-white h-[300px]"
      onClick={() => router.push(`/advert/${advert?.slug.current}`)}
    >
      {/* <Image
        src={advert?.image?.asset?.url}
        quality="100%"
        objectFit="cover"
        layout="fill"
        // height="60%"
        // width="100%"
        objectPosition="center"
        alt="image"
      /> */}
      <img
        src={
          advert?.image?.asset
            ? advert?.image?.asset?.url
            : "/images/placeholder.jpg"
        }
        alt=""
        className="object-cover w-full h-[55%]"
      />
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-between text-gray-500">
          <span className="flex items-center ">
            {/* <AtSymbolIcon className="w-3 h-3 mr-1 " /> */}
            <svg
              className="w-4 h-4 mr-1 fill-gray-500"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z" />
            </svg>
            <p className="text-[13px] line-clamp-1">
              {advert?.subcategory?.name}
            </p>
          </span>
          <span className="flex items-center">
            <LocationMarkerIcon className="w-4 h-4 mr-1" />
            <p className="text-[13px] line-clamp-1">{address}</p>
          </span>
        </div>
        <h4 className="line-clamp-1">{advert?.title}</h4>
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-red-600">{advert?.price} €</h4>
          <HeartIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
