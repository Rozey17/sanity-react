import {
  AtSymbolIcon,
  LocationMarkerIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import React from "react";

export const Search = () => {
  return (
    <form className="flex items-center justify-center pt-6 space-x-2">
      <span className="relative flex items-center text-gray-400">
        <input
          type="text"
          className="flex p-3 text-sm capitalize rounded focus:outline-none"
          placeholder="search for.."
        />
        <SpeakerphoneIcon className="absolute w-5 h-5 text-current right-3" />
      </span>

      <span className="relative flex items-center text-gray-400">
        <input
          type="text"
          className="flex p-3 text-sm capitalize rounded focus:outline-none"
          placeholder="located in"
        />
        <LocationMarkerIcon className="absolute w-5 h-5 text-current right-3" />
      </span>

      <span className="relative flex items-center text-gray-400">
        <input
          type="text"
          className="flex p-3 text-sm capitalize rounded focus:outline-none"
          placeholder="in category"
        />

        <AtSymbolIcon className="absolute w-5 h-5 text-current right-3" />
      </span>

      <button className="p-3 button-primary">search</button>
    </form>
  );
};
