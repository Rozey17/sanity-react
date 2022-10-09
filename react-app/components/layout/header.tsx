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
import { signUp } from "next-auth-sanity/client";
export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <header className="fixed top-0 w-full z-10">
      <div className="flex justify-between items-center px-40 py-5 text-white backdrop-blur-sm">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <h2 className="text-xl font-bold">Annonce 242</h2>
            <SpeakerphoneIcon className="w-7 h-7" />
          </a>
        </Link>
        <span className="flex space-x-5">
          <a href="#" className="flex capitalize">
            accueil
          </a>

          <a href="#" className="flex capitalize">
            nouveautés
          </a>

          <a href="#" className="flex capitalize">
            contact
          </a>
        </span>
        <span className="flex items-center gap-2">
          {session?.user ? (
            <div className="flex gap-2 items-center">
              <button onClick={() => router.push("/profile")}>
                {session?.user?.name}
              </button>
              <button onClick={() => signOut()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-5 w-5 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="flex items-center capitalize font-medium"
              onClick={() => router.push("/signin")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" h-5 w-5  ml-2 transform -scale-x-100 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z" />
              </svg>
            </button>
          )}

          <button
            onClick={() => {
              session?.user
                ? router.push("/advert/create")
                : router.push("/signin");
            }}
            className="button-primary "
          >
            <PlusSmIcon className="w-5 h-5" />
            déposer une annonce
          </button>
        </span>
      </div>
    </header>
  );
};
