import {
  AtSymbolIcon,
  BriefcaseIcon,
  HeartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Advert } from "../apollo-components";


export const AdvertCard = ({ advert }: { advert: Advert }) => {
  const router = useRouter();
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
        src={advert?.image?.asset?.url}
        alt=""
        className="object-cover w-full h-3/5"
      />
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-between">
          <span className="flex items-center">
            <AtSymbolIcon className="w-3 h-3 mr-1" />
            <p className="text-[12px]">{advert?.subcategory?.name}</p>
          </span>
          <span className="flex items-center">
            <LocationMarkerIcon className="w-3 h-3 mr-1" />
            {/* <p className="text-sm">{advert?.location?.}</p> */}
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
