import { BriefcaseIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { initializeApollo } from "../lib/graphql.server";
import {
  ListAdvertsByCategoryDocument,
  useListAdvertsByCategoryQuery,
  useListCategoriesQuery,
} from "./apollo-components";

export const SliderComponent = () => {
  // const [slug, setSlug] = useState(null);
  const { data } = useListCategoriesQuery();
  // async function advertsRenderer(slug: string) {
  //  const {data} = useListCategoriesQuery({
  //   variables:{
  //     slug: slug
  //   }
  //  })
  //   return adverts;
  // }

  const router = useRouter();
  const iconRenderer = (category: any) => {
    switch (category?.slug?.current) {
      case "cours-formations":
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
            //   key={index}
            className="flex flex-col items-center h-32 p-4 duration-300 bg-white cursor-pointer gap-y-2 w-44 hover:shadow-md"
            onClick={() => router.push(`/categories/${category.slug.current}`)}
          >
            {iconRenderer(category)}
            <span className="text-center">
              <p className="text-sm font-medium">{category?.name as string}</p>
              {/* <p className="text-xs text-gray-400">
                {advertsRenderer(category?.slug?.current).then(()=>console.log('nice'))} advert(s)
              </p> */}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
};
