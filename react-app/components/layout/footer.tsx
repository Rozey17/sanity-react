import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className=" bg-slate-700">
      <div className="grid grid-cols-3 gap-10 px-40 py-10">
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-white capitalize">
            annonce 242
          </h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            distinctio porro optio ea nostrum quod corrupti illum non itaque
            quisquam!
          </p>
          <p className="text-sm text-gray-400">if ou wish to contact us</p>
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-white capitalize">
            quick links
          </h1>
          {["How It Works", "FAQ", "News", "Browse With Map", "Browse Ads"].map(
            (item, index) => (
              <Link key={index} href="#">
                <a className="flex flex-col text-sm text-gray-400 hover:text-white w-fit">
                  {item}
                </a>
              </Link>
            )
          )}
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-white capitalize">
            popular ads
          </h1>
          {["How It Works", "FAQ", "News", "Browse With Map", "Browse Ads"].map(
            (item, index) => (
              <Link key={index} href="#">
                <a className="flex flex-col text-sm text-gray-400 hover:text-white w-fit">
                  {item}
                </a>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="bg-gray-800 p-6"></div>
    </footer>
  );
};
