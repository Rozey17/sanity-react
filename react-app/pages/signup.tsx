import { TextInput } from "@mantine/core";
import { signUp } from "next-auth-sanity/client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "../components/layout";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Signup = () => {
  const router = useRouter();
  const validationSchema = zod.object({
    name: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(2, "Trop court")
      .max(50, "Trop long"),
    email: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .email("Email invalide"),

    password: zod
      .string({
        required_error: "Ce champ est obligatoire",
      })
      .min(7, "Minimum 7 caractères")
      .max(50, "Maximum 50 caractères"),
    //  image: zod.object({

    //  }).optional(),
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(validationSchema),
    shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      name: "",
      email: "",
      password: "",
      // image: undefined,
    },
  });

  return (
    <Layout>
      <div className="p-20 bg-gray-100 space-y-10">
        <h1 className="text-center text-3xl font-extrabold">
          Créer votre compte
        </h1>
        <form
          action=""
          className="w-1/3 mx-auto space-y-5"
          onSubmit={handleSubmit(async (input) => {
            try {
              await signUp({
                email: input.email,
                password: input.password,
                name: input.name,
              });
              // .then(
              //   async (res) =>
              //     await signIn("sanity-login", {
              //       redirect: false,
              //       email: input.email,
              //       password: input.password,
              //     })
              // );

              toast.success(
                `l'utilisateur ${input.name} a été créé avec succès`
              );
              reset();
              // router.push("/profile");
            } catch (error) {
              toast.error(error);
            }
          })}
        >
          <TextInput
            classNames={{
              label: "font-sans capitalize font-medium",
              input: "font-sans placeholder:capitalize",
            }}
            label="nom d'utilisateur"
            {...register("name")}
            placeholder="name"
            required
          />
          <TextInput
            classNames={{
              label: "font-sans capitalize font-medium",
              input: "font-sans placeholder:capitalize",
            }}
            label="email"
            {...register("email")}
            placeholder="email"
            required
          />
          <TextInput
            classNames={{
              label: "font-sans capitalize font-medium",
              input: "font-sans placeholder:capitalize",
            }}
            type="password"
            label="mot de passe"
            {...register("password")}
            placeholder="mot de passe"
            required
          />
          <button
            disabled={!isValid || isSubmitting}
            className={
              !isValid
                ? "disabled:cursor-not-allowed text-gray-400 bg-gray-200  w-full px-4 py-2 rounded-md font-medium"
                : "button-primary w-full"
            }
          >
            {isSubmitting ? "Chargement..." : "Créer un compte"}
          </button>
        </form>
        <Toaster />
      </div>
    </Layout>
  );
};

export default Signup;
