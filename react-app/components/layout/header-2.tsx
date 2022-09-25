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
            accueil
          </a>

          <a href="#" className="flex capitalize">
            nouveautés
          </a>

          <a href="#" className="flex capitalize">
            contact
          </a>
        </span>
        <span className="flex items-center gap-5">
          {session?.user ? (
            <div className="flex gap-2 items-center">
              <button onClick={() => router.push("/profile")}>
                {session?.user?.name}
              </button>

              <button onClick={() => signOut()}>
                <LogoutIcon className=" h-7 w-7 " />
              </button>
            </div>
          ) : (
            <>
              <button
                className="flex items-center capitalize font-medium"
                onClick={() => router.push("/signin")}
              >
                se connecter
                <LoginIcon className=" h-7 w-7  ml-2 " />
              </button>
              <button
                onClick={() => router.push("/signup")}
                className="button-primary"
              >
                {`s'enregistrer`}
              </button>
            </>
          )}

          <button
            onClick={() => {
              session?.user
                ? router.push("/advert/create")
                : router.push("/signin");
            }}
            className="button-primary"
          >
            <PlusSmIcon className="w-5 h-5" />
            déposer une annonce
          </button>
        </span>
      </div>
    </header>
  );
};
