import React from "react";
import { CreateAdvertForm } from "../../components/adverts/createAdvertForm";
import { Layout } from "../../components/layout";

const CreateAdvertPage = () => {
  return (
    <Layout>
      <div className="flex flex-col  space-y-10 p-20 bg-[url('https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg')] bg-cover ">
        <h1 className="text-3xl font-extrabold text-center uppercase text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-200">
          créér votre annonce gratuitement
        </h1>
        <CreateAdvertForm />
      </div>
    </Layout>
  );
};

export default CreateAdvertPage;
