import React from "react";
import { Layout } from "../components/layout";
import { SignupForm } from "../components/signupForm";

const Signup = () => {
  return (
    <Layout>
      <div className="p-20 bg-gradient-to-r from-rose-100 to-teal-100 space-y-10">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20"
            viewBox="0 0 24 24"
          >
            <path d="M22 8v12h-16v-12h16zm2-2h-20v16h20v-16zm-8 11.677v.323h-8v-.333c-.004-.89.035-1.398 1.059-1.634 1.123-.259 2.23-.491 1.697-1.473-1.577-2.911-.449-4.56 1.244-4.56 1.662 0 2.816 1.588 1.244 4.56-.518.976.551 1.208 1.697 1.473 1.028.237 1.063.748 1.059 1.644zm4-7.677h-3v2h3v-2zm0 3h-3v2h3v-2zm0 3h-3v2h3v-2zm2-12h-20v16h1v-15h19v-1zm-2-2h-20v16h1v-15h19v-1z" />
          </svg>
          <h1 className="text-center text-3xl font-extrabold pb-5 text-shadow-sm">
            Créer votre compte
          </h1>
        </div>

        <SignupForm />
      </div>
    </Layout>
  );
};

export default Signup;
