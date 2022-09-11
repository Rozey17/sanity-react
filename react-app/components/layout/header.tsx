import React from "react";
import {
  LoginIcon,
  PlusIcon,
  PlusSmIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
export const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="flex justify-between items-center px-40 py-5 text-white bg-black bg-opacity-10">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">Annonce 242</h2>
            <SpeakerphoneIcon className="w-7 h-7" />
          </a>
        </Link>
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
        <span className="flex items-center gap-5">
          <Link href="/profile">
            <a>
              <LoginIcon className=" h-7 w-7 text-white" />
            </a>
          </Link>
          <button>compare</button>
          <button
            onClick={() => router.push("/advert/create")}
            className="flex items-center px-4 py-2 capitalize bg-teal-500 rounded-full font-medium"
          >
            <PlusSmIcon className="w-5 h-5" />
            submit ad
          </button>
        </span>
      </div>
    </header>
  );
};
