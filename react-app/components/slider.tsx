import { BriefcaseIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { initializeApollo } from "../lib/graphql.server";
import {
  Category,
  useListAdvertsBySubCategoryQuery,
  useListAdvertsQuery,
  useListCategoriesQuery,
} from "./apollo-components";

export const SliderComponent = () => {
  const [slug, setSlug] = useState(null);
  const { data } = useListCategoriesQuery();

  const { data: advertsData } = useListAdvertsQuery();
  // const { data: advertsData } = useListAdvertsBySubCategoryQuery({
  //   variables: {
  //     slug: "a-vendre",
  //   },
  // });

  const adverts =
    advertsData && advertsData?.allAdvert ? advertsData?.allAdvert : [];

  const router = useRouter();

  function getSlug(slug: string) {
    setSlug(slug);
  }
  const iconRenderer = (category: Category) => {
    switch (category?.slug?.current) {
      case "cours-formations":
        return <BriefcaseIcon className="text-teal-600 h-14 w-14" />;
      case "immobilier":
        return <BriefcaseIcon className="text-teal-600 h-14 w-14" />;
      default:
        break;
    }
  };

  const settings = {
    // className: "center",
    // centerPadding: "60px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // draggable:true
    // arrows: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <Slider {...settings}>
      {data?.allCategory?.map((category, index) => (
        <div key={index} className="">
          <div
            className="flex flex-col items-center h-32 p-4 duration-300 bg-white cursor-pointer gap-y-2 w-44 hover:shadow-md"
            onClick={() => {
              router.push(`/categories/${category.slug.current}`);
              // setSlug(category.slug.current);
            }}
          >
            {iconRenderer(category)}
            {/* {getSlug(category.slug.current)} */}
            <span className="text-center">
              <p className="text-sm font-medium">{category?.name as string}</p>
              <p className="text-xs text-gray-400">
                {" "}
                {
                  adverts.filter(
                    (ad) =>
                      ad?.subcategory?.category?.slug?.current ===
                      category.slug.current
                  ).length
                }{" "}
                advert(s)
              </p>
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
