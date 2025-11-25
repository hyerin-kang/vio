import KeyVisual from "@/components/Main/KeyVisual";
import Application from "@/components/Main/Application";
import Product from "@/components/Main/Product";
import AboutUs from "@/components/Main/AboutUs";
import Newsroom from "@/components/Main/Newsroom";
import ShowRoom from "@/components/Main/ShowRoom";
import ContactUs from "@/components/Main/ContactUs";
import "@/components/main/main.scss";

export default function Home() {
  return (
    <div className=" ">
      <KeyVisual />
      <Application />
      <Product />
      <AboutUs />
      <Newsroom />
      <ShowRoom />
      <ContactUs />
    </div>
  );
}
