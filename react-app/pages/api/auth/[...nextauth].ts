// import { NextApiRequest, NextApiResponse } from "next";
// import NextAuth from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

// export default NextAuth({
//   //   session: {
//   //     strategy: "jwt",
//   //     maxAge: 60 * 10,
//   //   },
//   //   jwt: {
//   //     secret: process.env.JWT_SECRET,
//   //   },
//   theme: {
//     colorScheme: "light", // "auto" | "dark" | "light"
//     brandColor: "#008080", // Hex color code
//     logo: "/images/", // Absolute URL to image
//   },
//   secret: process.env.SECRET,
//   providers: [
//     Auth0Provider({
//       clientId: process.env.AUTH0_CLIENT_ID as string,
//       clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
//       issuer: process.env.AUTH0_DOMAIN as string,
//       //   domain: process.env.AUTH0_DOMAIN as string,
//     }),
//   ],
//   //   pages: {
//   //     signIn: '/signin',
//   //   },
// });

import NextAuth, { NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";
import { NextApiRequest, NextApiResponse } from "next";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { client } from "../../../lib/sanity.server";

const options: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_DOMAIN as string,
      //   domain: process.env.AUTH0_DOMAIN as string,
    }),
    SanityCredentials(client), // only if you use sign in with credentials
  ],
  session: {
    strategy: "jwt",
  },
  adapter: SanityAdapter(client),
};

export default NextAuth(options);
