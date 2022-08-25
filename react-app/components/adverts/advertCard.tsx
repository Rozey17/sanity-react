import {
  AtSymbolIcon,
  BriefcaseIcon,
  HeartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { Advert } from "../../utils/types";

export const AdvertCard = ({ ad }: { ad: Advert }) => {
  return (
    <div className="cursor-pointer duration-300 hover:shadow-md rounded-md overflow-hidden bg-white h-[360px]">
      {/* <Image
        src={ad?.image?.asset.url}
        objectFit="cover"
        layout="fill"
        objectPosition="center"
      /> */}
      <img
        src={ad?.image?.asset.url}
        alt=""
        className="object-cover w-full h-3/5"
      />
      <div className="p-5 flex space-y-5 flex-col">
        <div className="flex justify-between">
          <span className="flex items-center">
            <AtSymbolIcon className="w-4 h-4 mr-1" />
            <p className="text-sm">{ad?.subcategory?.name}</p>
          </span>
          <span className="flex items-center">
            <LocationMarkerIcon className="w-4 h-4 mr-1" />
            <p className="text-sm">{ad?.location}</p>
          </span>
        </div>
        <h4>{ad?.title}</h4>
        <div className="flex justify-between items-center">
          <h4 className="text-red-600 font-medium">{ad?.price} €</h4>
          <HeartIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
