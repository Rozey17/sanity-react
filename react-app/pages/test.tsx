import dynamic from "next/dynamic";
import { CheckboxComponent } from "../components/checkboxComponent";
const Map = dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Home() {
  return "hello";
}
