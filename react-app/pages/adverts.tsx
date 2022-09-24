import { useRouter } from "next/router";
import { useListAdvertSearchQuery } from "../components/apollo-components";
import { Layout } from "../components/layout";

const Adverts = () => {
  const router = useRouter();

  const latitude = router.query.lat as any;
  const longitude = router.query.lng as any;
  const title = router.query.title as string;
  const subCategory = router.query.subCategory as string;

  const { data: adverts } = useListAdvertSearchQuery({
    variables: {
      lat: latitude,
      lng: longitude,
      subcategory: subCategory,
      title: title,
    },
  });

  const listAdverts = adverts && adverts.allAdvert ? adverts.allAdvert : [];

  return <Layout> {JSON.stringify(listAdverts, null, 2)}</Layout>;
};

export default Adverts;
