import React from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { TextInput } from "@mantine/core";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const SigninForm = () => {
  const router = useRouter();
  const validationSchema = zod.object({
    email: zod
      .string({
        required_error: "Une adresse email est requise",
      })
      .email("Email invalide"),

    password: zod.string({
      required_error: "Un mot de passe est requis",
    }),
    // .min(7, "Minimum 7 caractères")
    // .max(50, "Maximum 50 caractères"),
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
    // shouldUseNativeValidation: true, //show native error messages on the browser
    mode: "onChange", // show errors as you type
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
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
              toast.error("Email ou mot de passe invalide");
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
          error={errors.email && errors.email.message}
        />
        <TextInput
          classNames={{
            label: "font-sans font-medium",
            input: "font-sans",
          }}
          type="password"
          label="Mot de passe"
          {...register("password")}
          placeholder="Mot de passe"
          error={errors.password && errors.password.message}
        />
        <button
          disabled={!isValid || isSubmitting}
          className={
            !isValid
              ? "disabled:cursor-not-allowed text-gray-400 bg-gray-200  w-full px-4 py-2 rounded-md font-medium"
              : "button-third w-full"
          }
        >
          {isSubmitting ? "Chargement..." : "Se connecter"}
        </button>
        <div className="">
          {` Si vous n'avez pas encore de compte`}{" "}
          <Link href="/signup">
            <a className="text-teal-500 font-medium">créez-en un ici</a>
          </Link>
        </div>
      </form>
      <Toaster />
    </>
  );
};
