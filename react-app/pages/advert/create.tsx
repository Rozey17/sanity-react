import React from "react";
import { CreateAdvertForm } from "../../components/adverts/createAdvertForm";
import { Layout } from "../../components/layout";

const CreateAdvertPage = () => {
  return (
    <Layout>
      <div className="flex flex-col  space-y-10 p-20 bg-gradient-to-r from-rose-100 to-teal-100">
        <CreateAdvertForm />
      </div>
    </Layout>
  );
};

export default CreateAdvertPage;
