/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "images4.alphacoders.com",
      "images7.alphacoders.com",
      "cdn.sanity.io",
    ],
  },
  env: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    SECRET: process.env.SECRET,
  },
};
