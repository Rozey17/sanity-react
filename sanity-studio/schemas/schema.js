// // First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator'

// // Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type'

// // We import object and document schemas
// import blockContent from './blockContent'
// import category from './category'
// import post from './post'
// import author from './author'

// // Then we give our schema to the builder and provide the result to Sanity
// export default createSchema({
//   // We name our schema
//   name: 'default',
//   // Then proceed to concatenate our document type
//   // to the ones provided by any plugins that are installed
//   types: schemaTypes.concat([
//     // The following are document types which will appear
//     // in the studio.
//     post,
//     author,
//     category,
//     // When added to this list, object types can be used as
//     // { type: 'typename' } in other document schemas
//     blockContent,
//   ]),
// })

import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// import { user, account, verificationToken } from "next-auth-sanity/schemas";
import adSubCategory from "./sub-category";
import adCategory from "./category";
import ad from "./advert";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    adSubCategory,
    adCategory,
    ad,
    // user,
    // account,
    // verificationToken,
    {
      name: "post",
      type: "document",
      title: "Post",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
          },
        },
        {
          name: "content",
          title: "Content",
          type: "array",
          of: [{ type: "block" }],
        },
        {
          name: "excerpt",
          title: "Excerpt",
          type: "string",
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
        },
        {
          name: "date",
          title: "Date",
          type: "datetime",
        },
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },

    {
      name: "author",
      type: "document",
      title: "Author",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "picture",
          title: "Picture",
          type: "image",
        },
      ],
    },

    {
      name: "game",
      type: "document",
      title: "Game",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "title",
          },
        },
      ],
    },
  ]),
});
