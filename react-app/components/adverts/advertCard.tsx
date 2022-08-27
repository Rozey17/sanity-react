import {
  AtSymbolIcon,
  BriefcaseIcon,
  HeartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Advert } from "../../utils/types";

export const AdvertCard = ({ advert }: { advert: Advert }) => {
  const router = useRouter();
  return (
    <div
      className="cursor-pointer duration-300 hover:shadow-md rounded-md overflow-hidden bg-white h-[360px]"
      onClick={() => router.push(`/advert/${advert?._id}`)}
    >
      {/* <Image
        src={ad?.image?.asset.url}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
      /> */}
      <img
        src={advert?.image?.asset?.url}
        alt=""
        className="object-cover w-full h-3/5"
      />
      <div className="flex flex-col p-5 space-y-5">
        <div className="flex justify-between">
          <span className="flex items-center">
            <AtSymbolIcon className="w-4 h-4 mr-1" />
            <p className="text-sm">{advert?.subcategory?.name}</p>
          </span>
          <span className="flex items-center">
            <LocationMarkerIcon className="w-4 h-4 mr-1" />
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
