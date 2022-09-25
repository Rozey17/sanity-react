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
                <LogoutIcon className=" h-7 w-7 text-white" />
              </button>
            </div>
          ) : (
            <button
              className="flex items-center capitalize font-medium"
              onClick={() => router.push("/signin")}
            >
              <LoginIcon className=" h-7 w-7  ml-2 " />
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
