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
      className="cursor-pointer duration-300 hover:shadow-md rounded-md overflow-hidden bg-white h-[360px]"
      onClick={() => router.push(`/advert/${advert?._id}`)}
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
        className="object-cover w-full h-3/5"
      />
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-between text-gray-500">
          <span className="flex items-center">
            <AtSymbolIcon className="w-3 h-3 mr-1 " />
            <p className="text-[12px] line-clamp-1">
              {advert?.subcategory?.name}
            </p>
          </span>
          <span className="flex items-center">
            <LocationMarkerIcon className="w-3 h-3 mr-1" />
            <p className="text-[12px]">{address}</p>
          </span>
        </div>
        <h4>{advert?.title}</h4>
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-red-600">{advert?.price} €</h4>
          <HeartIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
