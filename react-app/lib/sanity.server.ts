// import { createClient } from "next-sanity";
// import { sanityConfig } from "./config";

// export const sanityClient = createClient(sanityConfig);

// export const previewClient = createClient({
//   ...sanityConfig,
//   token:
//  "skcn0RnsUGujJ27QjlRtnIqlt6X5KhKGcg0xVUgSEkC6J6FP9w7Z5gw1js9GGCiUZt1cXaJUcmPGcuNJsYfqEW6Tb5ofdsMCmSWoqpDu58PqvhP7M1ufSHd7Lb9iBBtYqdXauzlN5VSJemLUEYY2HPRRIpDM3JQ2BVEiVAbBKLdhzAANcwXg",
//   useCdn: false,
// });

// export const getClient = (preview: any) =>
//   preview ? previewClient : sanityClient;

import sanityClient from "@sanity/client";
export const client = sanityClient({
  dataset: "production",
  projectId: "uv20u4vv",
  useCdn: true,
  token:
    "skcn0RnsUGujJ27QjlRtnIqlt6X5KhKGcg0xVUgSEkC6J6FP9w7Z5gw1js9GGCiUZt1cXaJUcmPGcuNJsYfqEW6Tb5ofdsMCmSWoqpDu58PqvhP7M1ufSHd7Lb9iBBtYqdXauzlN5VSJemLUEYY2HPRRIpDM3JQ2BVEiVAbBKLdhzAANcwXg",
  apiVersion: "2021-03-25",
});
