import Image from "next/image";
import { Category } from "../components/apollo-components";

export const iconRenderer = (category: Category) => {
  switch (category?.slug?.current) {
    case "cours-formations":
      return (
        <Image
          height={56}
          width={56}
          src="/images/books-study-svgrepo-com.svg"
          alt="image"
        />
      );
    case "immobilier":
      return (
        <Image
          height={56}
          width={56}
          src="/images/real-estate-rent-svgrepo-com.svg"
          alt="image"
        />
      );
    case "a-vendre":
      return (
        <Image
          height={56}
          width={56}
          src="/images/a-vendre-y.png"
          alt="image"
        />
      );
    case "animaux":
      return (
        <Image
          height={56}
          width={56}
          src="/images/cat-svgrepo-com.svg"
          alt="image"
        />
      );
    case "vehicules":
      return (
        <Image
          height={56}
          width={56}
          src="/images/car-svgrepo-com.svg"
          alt="image"
        />
      );
    // case "immobilier":
    //   return <img src="images/"  />;
    default:
      break;
  }
};
