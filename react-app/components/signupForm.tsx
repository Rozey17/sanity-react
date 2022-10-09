import React from "react";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { TextInput } from "@mantine/core";
import { signUp } from "next-auth-sanity/client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export const SignupForm = () => {
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
    // shouldUseNativeValidation: true, //show native error messages on the browser
    // mode: "onChange", // show errors as you type
    defaultValues: {
      name: "",
      email: "",
      password: "",
      // image: undefined,
    },
  });
  return (
    <>
      <div className="flex w-2/3 mx-auto h-[500px] shadow-lg rounded-3xl overflow-hidden">
        <img
          src="/images/pexels-photo-3843285.jpeg"
          alt=""
          className="h-full w-[45%] object-cover"
        />
        <form
          action=""
          className="w-[55%] space-y-5 p-10 bg-white"
          onSubmit={handleSubmit(async (input) => {
            try {
              await signUp({
                email: input.email,
                password: input.password,
                name: input.name,
              }).then(async (res) =>
                !!res.id
                  ? await signIn("sanity-login", {
                      redirect: false,
                      email: input.email,
                      password: input.password,
                    }).then((res) => {
                      if (res.status === 200) {
                        router.push("/profile");
                      } else if (res.error) {
                        toast.error(res.error);
                      } else {
                        toast.error("Une erreur est survenue");
                      }
                    })
                  : toast.error("Cet email est déjà utilisé")
              );
            } catch (error) {
              toast.error;
            }
          })}
        >
          <h1 className="text-center text-xl font-extrabold pb-5 text-shadow-sm">
            Détails du compte
          </h1>
          <TextInput
            classNames={{
              label: "font-sans font-medium",
              input: "font-sans ",
            }}
            label="Nom d'utilisateur"
            {...register("name")}
            placeholder="Nom d'utilisateur"
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
              label: "font-sans font-medium",
              input: "font-sans",
            }}
            type="password"
            label="Mot de passe"
            {...register("password")}
            placeholder="Mot de passe"
            required
          />
          <button
            disabled={!isValid || isSubmitting}
            className={
              !isValid
                ? "disabled:cursor-not-allowed text-gray-400 bg-gray-200  w-full px-4 py-2 rounded-md font-medium"
                : "button-third w-full"
            }
          >
            {isSubmitting ? "Chargement..." : "Créer un compte"}
          </button>
          <div className="">
            Si vous avez déjà un compte{" "}
            <Link href="/signin">
              <a className="text-teal-500 font-medium">connectez vous ici</a>
            </Link>
          </div>
        </form>
      </div>

      <Toaster />
    </>
  );
};
