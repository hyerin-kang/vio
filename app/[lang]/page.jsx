import KeyVisual from "@/components/main/KeyVisual";
import Application from "@/components/main/Application";
import Product from "@/components/main/Product";
import AboutUs from "@/components/main/AboutUs";
import "@/components/main/main.scss";

export default function Home() {
  return (
    <div className=" ">
      <KeyVisual />
      <Application />
      <Product />
      <AboutUs />
    </div>
  );
}
