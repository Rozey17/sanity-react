const getPosition = (options) => {
  if (navigator.geolocation) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
};

export default {
  name: "advert",
  title: "Advert",
  type: "document",
  initialValue: async () => ({
    location: await getPosition().then(({ coords }) => {
      const { longitude, latitude, altitude } = coords;
      return {
        _type: "geopoint",
        lat: latitude,
        lng: longitude,
        alt: altitude,
      };
    }),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(80),
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
      name: "subcategory",
      title: "Sub Category",
      type: "reference",
      weak: true,
      to: [{ type: "subcategory" }],
      validation: (Rule) => Rule.required(),
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
      type: "geopoint",
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
