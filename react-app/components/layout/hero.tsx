/* eslint-disable @next/next/no-img-element */
import { BriefcaseIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import { useListCategoriesQuery } from "../apollo-components";
import { Search } from "../search";
import { SliderComponent } from "../slider";
import { Header } from "./header";

export const Hero = () => {
 
  return (
    <section className="relative h-screen bg-cover bg-center bg-fixed bg-[url('/images/pexels-photo-4007744.jpeg')]">
      <div className="absolute inset-0 bg-opacity-40 bg-gray-800">
        <div className="relative space-y-40">
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
          {/* new technique */}
          <div className="w-3/5  p-10 mx-auto bg-gray-100 rounded-lg shadow-lg">
            <SliderComponent />
          </div>
        </div>
      </div>
    </section>
  );
};
