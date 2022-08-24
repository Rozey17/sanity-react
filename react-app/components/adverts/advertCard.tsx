import {
  AtSymbolIcon,
  HeartIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

interface AdProps {
  title: string;
  description: string;
  slug: string;
  contact: string;
  location: string;
  image: {
    asset: {
      url: string;
    };
  };
  price: number;
  subcategory: {
    name: string;
    adverts: { title: string };
    category: { name: string; slug: { current: string } };
  };
}

export const AdvertCard = ({ ad }: { ad: AdProps }) => {
  return (
    <div className="cursor-pointer hover:shadow-md w-1/4 rounded-md overflow-hidden bg-white h-[360px]">
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
            <label className="text-sm">{ad?.subcategory?.name}</label>
          </span>
          <span className="flex items-center">
            <LocationMarkerIcon className="w-4 h-4 mr-1" />
            <label className="text-sm">{ad?.location}</label>
          </span>
        </div>
        <h4>{ad?.title}</h4>
        <div className="flex justify-between items-center">
          <h4 className="text-red-600 font-medium">{ad?.price}</h4>
          <HeartIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
