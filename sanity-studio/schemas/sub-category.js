export default {
  name: "sub-category",
  title: "Sub Category",
  type: "document",
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
        source: "name",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "adverts",
      title: "Adverts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "advert" }] }],
    },
  ],
};
