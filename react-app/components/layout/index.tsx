import { PaperAirplaneIcon } from "@heroicons/react/outline";
import React from "react";
import { Footer } from "./footer";
import { Header2 } from "./header-2";

export const Layout = ({ children }: { children: any }) => {
  return (
    <div className="">
      <main className=" relative min-h-screen ">
        <Header2 />
        <div className="py-10">{children}</div>
        <section className="px-40 py-8 bg-white ">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <PaperAirplaneIcon className="w-10 h-10 mr-2 rotate-45" />
              <span className="">
                <h3 className="text-2xl font-medium">
                  Subscribe To Newsletter
                </h3>
                <p className="">and receive new ads in inbox</p>
              </span>
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-3 px-5 text-sm border border-gray-300 rounded-full rounded-r-none focus:outline-none"
              />
              <button className="p-3 px-5 text-sm text-white bg-black rounded-full rounded-l-none focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};
