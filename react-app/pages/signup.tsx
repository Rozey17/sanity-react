import { TextInput } from "@mantine/core";
import { signUp } from "next-auth-sanity/client";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "../components/layout";

const Signup = () => {
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
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Layout>
      <form
        action=""
        className="w-1/3 mx-auto space-y-5"
        onSubmit={handleSubmit(async (input) => {
          await signUp(input)
            .then((res) =>
              toast.success(`l'utilisateur ${res.name} a été créé avec succès`)
            )
            .catch((err) => toast.error(err));
          reset();
        })}
      >
        <TextInput
          label="nom d'utilisateur"
          {...register("name")}
          placeholder="name"
        />
        <TextInput label="email" {...register("email")} placeholder="email" />
        <TextInput
          type="password"
          label="mot de passe"
          {...register("password")}
          placeholder="mot de passe"
        />
        <button className="button-primary">créer compte</button>
      </form>
      <Toaster />
    </Layout>
  );
};

export default Signup;
