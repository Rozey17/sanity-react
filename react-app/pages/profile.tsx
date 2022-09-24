import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import React from "react";
import {
  useListAdvertsQuery,
  useListUsersByEmailQuery,
  User,
} from "../components/apollo-components";
import { Layout } from "../components/layout";

const Profile = ({ currentUser }) => {
  const { data } = useListUsersByEmailQuery({
    variables: {
      email: currentUser?.email,
    },
  });

  const user = data && data.allUser ? data.allUser[0] : null;

  const { data: advertsData } = useListAdvertsQuery();
  const adverts =
    advertsData && advertsData?.allAdvert ? advertsData?.allAdvert : [];
  return (
    <Layout>
      <div className="text-center p-20 bg-gray-100">
        <h1 className="text-center text-3xl font-extrabold">
          liste des annonces
        </h1>
        <div className="">
          {adverts
            .filter((item) => item?.user?.email === user?.email)
            .map((ad) => ad.title)}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
  return {
    props: {
      currentUser,
    },
  };
};
