import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-96 w-96">
      <Map />
    </div>
  );
}
