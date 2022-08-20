import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { client } from "../../lib/sanity.server";

function CreateAdForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    //   resolver: zodResolver(validationSchema),
    shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      title: "",
      description: "",
      contact: "",
      subcategories: [
        {
          _id: "86574630-c631-4b5f-b3f3-8a11e4572bdd",
        },
      ],
    },
  });

  const mutations = [
    {
      createOrReplace: {
        _id: "123",
        _type: "cms.article",
        title: "An article",
      },
    },
  ];
  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit(async (input) => {
        client
          .create({
            _type: "ad",
            title: input.title,
            description: input.description,
            contact: input.contact,
            subcategories: input.subcategories,
          })
          .then((res) => {
            console.log(`Ad was created, document ID is ${res._id}`);
          });
      })}
    >
      <input type="text" {...register("contact")} placeholder="contact" />
      <textarea {...register("description")} placeholder="description" />
      <input type="text" {...register("title")} placeholder="title" />
      <button>submit</button>
    </form>
  );
}

export default CreateAdForm;
