import { TextInput } from "@mantine/core";
import { signUp } from "next-auth-sanity/client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "../components/layout";

const Signup = () => {
  const router = useRouter();
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
          await signIn("sanity-login", {
            redirect: false,
            email: input.email,
            password: input.password,
          }).then((res) => {
            if (res.status === 200) {
              // return toast.success("connexion réussie");
              router.push("/profile");
            } else if (res.error) {
              toast.error(res.error);
            } else {
              toast.error("Une erreur est survenue");
            }
          });
          // .catch((res) => res.error && toast.error(res.error));
          //   reset();
        })}
      >
        {/* <TextInput
          label="nom d'utilisateur"
          {...register("name")}
          placeholder="name"
        /> */}
        <TextInput label="email" {...register("email")} placeholder="email" />
        <TextInput
          type="password"
          label="mot de passe"
          {...register("password")}
          placeholder="mot de passe"
        />
        <button className="button-primary">se connecter</button>
      </form>
      <button className="" onClick={() => signIn("auth0")}>
        connexion via auth0
      </button>
      <Toaster />
    </Layout>
  );
};

export default Signup;
