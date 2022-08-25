export default {
  name: "advert",
  title: "Advert",
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
      options: {
        maxLength: 500,
      },
    },
    // {
    //   name: "subcategories",
    //   title: "Sub Categories",
    //   type: "array",
    //   of: [{ type: "reference", to: [{ type: "subcategory" }] }],
    // },
    {
      name: "subcategory",
      title: "Sub Category",
      type: "reference",
      to: [{ type: "subcategory" }],
    },
    {
      name: "contact",
      title: "Contact",
      type: "string",
    },
    {
      name: "price",
      title: "price",
      type: "number",
    },
    {
      name: "location",
      title: "location",
      type: "string",
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
