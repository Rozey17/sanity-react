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
      of: [{ type: "reference", to: [{ type: "subcategory" }] }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
};
