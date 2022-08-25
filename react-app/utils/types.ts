export type Advert = {
  title: string;
  description: string;
  slug: string;
  contact: string;
  location: string;
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
