import React from "react";
import {
  LoginIcon,
  LogoutIcon,
  PlusIcon,
  PlusSmIcon,
  SpeakerphoneIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header2 = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <header>
      <div className="flex justify-between items-center px-40 py-5 bg-white text-gray-600">
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
          <button
            onClick={() => router.push("/signup")}
            className="button-primary"
          >
            signup
          </button>
          {session?.user ? (
            <div className="flex gap-2">
              <p>{session?.user?.name}</p>
              <button onClick={() => signOut()}>
                <LogoutIcon className=" h-7 w-7 " />
              </button>
            </div>
          ) : (
            <button
              className="flex items-center"
              onClick={() => router.push("/signin")}
            >
              login
              <LoginIcon className=" h-7 w-7  ml-2 " />
            </button>
          )}

          <button
            onClick={() => {
              session?.user ? router.push("/advert/create") : signIn();
            }}
            className="flex items-center px-4 py-2 capitalize bg-teal-500 rounded-full font-medium text-white"
          >
            <PlusSmIcon className="w-5 h-5" />
            submit ad
          </button>
        </span>
      </div>
    </header>
  );
};
