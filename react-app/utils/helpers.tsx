import { Category } from "../components/apollo-components";

export const iconRenderer = (category: Category) => {
  switch (category?.slug?.current) {
    case "cours-formations":
      return (
        <img src="images/books-study-svgrepo-com.svg" className=" h-14 w-14" />
      );
    case "immobilier":
      return (
        <img
          src="images/real-estate-rent-svgrepo-com.svg"
          className=" h-14 w-14"
        />
      );
    case "a-vendre":
      return <img src="images/ads-svgrepo-com.svg" className=" h-14 w-14" />;
    case "animaux":
      return <img src="images/cat-svgrepo-com.svg" className=" h-14 w-14" />;
    case "vehicules":
      return <img src="images/car-svgrepo-com.svg" className=" h-14 w-14" />;
    // case "immobilier":
    //   return <img src="images/" className=" h-14 w-14" />;
    default:
      break;
  }
};
