import React from "react";
import { Search } from "../search";
import { Header } from "./header";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-slate-600">
      <img
        src="https://images.pexels.com/photos/11538636/pexels-photo-11538636.jpeg"
        alt=""
        className="object-cover w-full h-full opacity-30"
      />
      <div className="absolute inset-0">
        <div className="space-y-40">
          <Header />
          <div className="space-y-5 text-center text-white">
            <span className="text-4xl font-bold capitalize">
              all you need is here & classified
            </span>
            <p>
              Browse from more than 15,000,000 adverts while new ones come on
              daily bassis
            </p>
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};
