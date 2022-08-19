import { createClient } from "next-sanity";
import { sanityConfig } from "./config";

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  // token:
  //   "skTFiYrFJAyGt5JAblQVceC2yOEbI35VcnVg0k7gO1PXciY1MSTz4Pw3nUffrPeiBxhJn9NC1Lb22egNM2GyrAFaQvfQQ6s1SQ8oyEtG7BirmSx3njVpv6eVVsBkLd9GgwV7w7RkTnLwZQrNQgvapSqajPWpjBNSFfs8hbylQ2zNurl8PR8g",
  useCdn: false,
});

export const getClient = (preview: any) =>
  preview ? previewClient : sanityClient;
