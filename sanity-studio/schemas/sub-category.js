export default {
  name: "subcategory",
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
      weak: true,
      to: [{ type: "category" }],
    },
    {
      name: "adverts",
      title: "Adverts",
      type: "array",
      of: [{ type: "reference", weak: true, to: [{ type: "advert" }] }],
    },
  ],
};
