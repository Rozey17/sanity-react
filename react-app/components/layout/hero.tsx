import { BriefcaseIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import { useListCategoriesQuery } from "../apollo-components";
import { Search } from "../search";
import { Header } from "./header";

export const Hero = () => {
  const { data } = useListCategoriesQuery();
  const router = useRouter();
  const iconRenderer = (category: any) => {
    switch (category?.slug?.current) {
      case "cours-formations":
        return <BriefcaseIcon className="text-teal-600 h-14 w-14" />;
      default:
        break;
    }
  };
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
              {data?.allCategory?.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center h-32 p-4 duration-300 bg-white cursor-pointer gap-y-2 w-44 hover:shadow-md"
                  onClick={() =>
                    router.push(`/categories/${category.slug.current}`)
                  }
                >
                  {iconRenderer(category)}
                  <span className="text-center">
                    <h4 className="text-sm font-medium">
                      {category?.name as string}
                    </h4>
                    <p>
                      {category?.subcategories?.map((item, index) => (
                        <span key={index} className="text-xs text-gray-400">
                          {item?.adverts?.length > 0
                            ? item?.adverts?.length
                            : 0}{" "}
                          advert(s)
                        </span>
                      ))}
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
