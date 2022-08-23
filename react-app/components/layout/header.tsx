import React from "react";
import {
  PlusIcon,
  PlusSmIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
export const Header = () => {
  return (
    <header>
      <div className="flex justify-between px-40 py-5 text-white bg-black bg-opacity-10">
        <span className="">
          <SpeakerphoneIcon className="w-5 h-5" />
        </span>
        <span className="flex space-x-5">
          <a href="#" className="flex capitalize">
            home
          </a>
          <a href="#" className="flex capitalize">
            browse ads
          </a>
          <a href="#" className="flex capitalize">
            news
          </a>
          <a href="#" className="flex capitalize">
            pages
          </a>
          <a href="#" className="flex capitalize">
            contact
          </a>
        </span>
        <span className="flex items-center justify-between">
          <button></button>
          <button></button>
          <button className="flex items-center px-4 py-2 capitalize bg-teal-500 rounded-full">
            <PlusSmIcon className="w-5 h-5" />
            submit ad
          </button>
        </span>
      </div>
    </header>
  );
};
