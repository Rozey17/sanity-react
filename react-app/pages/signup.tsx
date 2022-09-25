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
      <div className="p-20 bg-gradient-to-r from-rose-100 to-teal-100 space-y-10">
        <div className="flex w-2/3 mx-auto h-[500px] shadow-lg rounded-3xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3843285/pexels-photo-3843285.jpeg"
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
            <h1 className="text-center text-3xl font-extrabold pb-5 text-shadow-sm">
              Créer votre compte
            </h1>
            <TextInput
              classNames={{
                label: "font-sans capitalize font-medium",
                input: "font-sans placeholder:capitalize",
              }}
              label="nom d'utilisateur"
              {...register("name")}
              placeholder="nom d'utilisateur"
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
                  : "button-third w-full"
              }
            >
              {isSubmitting ? "Chargement..." : "Créer un compte"}
            </button>
          </form>
        </div>

        <Toaster />
      </div>
    </Layout>
  );
};

export default Signup;
