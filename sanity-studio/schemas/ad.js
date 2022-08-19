export default {
  name: "ad",
  title: "Ad",
  type: "document",
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
      name: "description",
      title: "Description",
      type: "string",
      options:{
        maxLength:500
      }

    },
    {
      name: "subcategories",
      title: "Ad Sub Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ad-sub-category" }] }],
    },
    {
      name: "contact",
      title: "Contact",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};