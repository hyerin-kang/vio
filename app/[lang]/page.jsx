import KeyVisual from "@/components/main/KeyVisual";
import Application from "@/components/main/Application";
import "@/components/main/main.scss";

export default function Home({ dict, params }) {
  console.log(params.lang);
  return (
    <div className=" ">
      <KeyVisual />
      <Application dict={dict} params={params} />
    </div>
  );
}
