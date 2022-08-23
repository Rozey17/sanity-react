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
    {
      name: "subcategories",
      title: "Sub Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "sub-category" }] }],
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
