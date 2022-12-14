import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { AdvertCard } from "../components/adverts/advertCard";
import {
  ListUsersByEmailDocument,
  useListAdvertsQuery,
  useListUsersByEmailQuery,
  User,
} from "../components/apollo-components";
import { Layout } from "../components/layout";
import { initializeApollo } from "../lib/graphql.server";
import { client } from "../lib/sanity.server";

const Profile = ({ user }) => {
  const router = useRouter();
  const { data: advertsData } = useListAdvertsQuery();
  const adverts =
    advertsData && advertsData?.allAdvert ? advertsData?.allAdvert : [];
  return (
    <Layout>
      <div className="text-center p-20 bg-gray-100 space-y-10">
        <h1 className="text-center text-3xl font-extrabold">Vos annonces</h1>
        <div className="">
          {adverts.length === 0 ? (
            <p className="">{`Vous n'avez aucune annonce`}</p>
          ) : (
            <div className="grid grid-cols-5 gap-3">
              {adverts
                .filter((item) => item?.user?.email === user?.email)
                .map((ad, index) => (
                  <div key={index} className="flex flex-col gap-5">
                    <AdvertCard advert={ad} />
                    <div className="flex space-x-2 items-center">
                      <button
                        className="button-primary"
                        onClick={() =>
                          router.push(`/advert/${ad.slug.current}/edit`)
                        }
                      >
                        modifier
                      </button>
                      <button
                        className="button-secondary"
                        onClick={() => {
                          alert("sûr ?");
                          client
                            .delete(ad._id)
                            .then(() => {
                              toast.success("Effacé avec succès !");
                              router.push("/");
                            })
                            .catch((error) => toast.error(error));
                        }}
                      >
                        supprimer
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
      <Toaster />
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initializeApollo();

  const session = await getSession(ctx);
  const currentUser = session?.user;
  console.log(currentUser);
  if (!currentUser) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const { data } = await client.query({
    query: ListUsersByEmailDocument,
    variables: {
      email: currentUser?.email,
    },
  });
  const user = data && data.allUser ? data.allUser[0] : null;

  return {
    props: {
      user,
    },
  };
};
