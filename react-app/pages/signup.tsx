import React from "react";
import { Layout } from "../components/layout";
import { SignupForm } from "../components/signupForm";

const Signup = () => {
  return (
    <Layout>
      <div className="p-20 bg-gradient-to-r from-rose-100 to-teal-100 space-y-10">
        <SignupForm />
      </div>
    </Layout>
  );
};

export default Signup;
