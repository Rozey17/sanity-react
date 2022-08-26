export default {
  name: "category",
  title: "Category",
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
      name: "subcategories",
      title: " Sub Categories",
      type: "array",
      of: [{ type: "reference", weak: true, to: [{ type: "subcategory" }] }],
    },
  ],
};
