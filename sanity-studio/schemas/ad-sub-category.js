export default {
  name: "ad-sub-category",
  title: "Ad Sub Category",
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
      title: "Ad Category",
      type: "reference",
        to: [{ type: "ad-category" }],
    },
    {
        name:'publishedAt',
        title:'Published At',
        type:'datetime',
    }
  ],
};