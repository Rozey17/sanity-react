export default {
  name: "ad-category",
  title: "Ad Category",
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
      title: "Ad Sub Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ad-sub-category" }] }],
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
};