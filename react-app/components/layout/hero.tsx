import React from "react";
import { useListCategoriesQuery } from "../apollo-components";
import { Search } from "../search";
import { Header } from "./header";

export const Hero = () => {
  const { data } = useListCategoriesQuery();
  return (
    <section className="relative h-screen bg-slate-600">
      <img
        src="https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg"
        alt=""
        className="object-cover w-full h-full opacity-30"
      />
      <div className="absolute inset-0">
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
          <div className="w-1/2 h-40 p-10 mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="flex items-center justify-center h-full gap-3">
              {data?.allAdCategory?.map((category, index) => (
                <div key={index} className="p-5 bg-white gap-y-2">
                  {category?.name as string}
                  <p>
                    {category.subcategories?.map((item, index) => item?.name)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
