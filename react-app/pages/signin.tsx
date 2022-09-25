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
    // photo: zod.string().optional(),
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
      email: "",
      password: "",
    },
  });

  return (
    <Layout>
      <div className="p-20 space-y-10 bg-gradient-to-r from-rose-100 to-teal-100">
        <form
          action=""
          className="w-1/3 p-10 mx-auto space-y-5 overflow-hidden bg-white shadow-lg rounded-3xl"
          onSubmit={handleSubmit(async (input) => {
            await signIn("sanity-login", {
              redirect: false,
              email: input.email,
              password: input.password,
            }).then((res) => {
              if (res.status === 200) {
                router.push("/profile");
              } else if (res.status === 401) {
                toast.error('Email ou mot de passe invalide');
              } else {
                toast.error("Une erreur est survenue");
              }
            });
          })}
        >
          <h1 className="text-3xl font-extrabold text-center text-shadow-md">
            Se connecter
          </h1>

          <TextInput
            classNames={{
              label: "font-sans capitalize font-medium",
              input: "font-sans placeholder:capitalize",
            }}
            label="email"
            {...register("email")}
            placeholder="email"
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
          />
          <button
            disabled={!isValid || isSubmitting}
            className={
              !isValid
                ? "disabled:cursor-not-allowed text-gray-400 bg-gray-200  w-full px-4 py-2 rounded-md font-medium"
                : "button-primary w-full"
            }
          >
            {isSubmitting ? "Chargement..." : "Se connecter"}
          </button>
        </form>
      </div>

      {/* <button className="" onClick={() => signIn("auth0")}>
        connexion via auth0
      </button> */}
      <Toaster />
    </Layout>
  );
};

export default Signup;
