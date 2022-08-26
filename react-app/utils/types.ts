export type Advert = {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  contact: string;
  location: {
    lat: number;
    lng: number;
    alt: number;
  };
  image: {
    asset: {
      url: string;
    };
  };
  price: number;
  subcategory: {
    name: string;
    adverts: { title: string };
    category: { name: string; slug: { current: string } };
  };
};
