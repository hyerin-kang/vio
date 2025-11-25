"use client";
// import SubpageBG from "@/components/SubpageBG/page";
import { LangContext } from "@/context/LangContext";
import SubpageBG from "../../../../components/SubpageBG/page";
import { useContext } from "react";
// import VideoHomeAppliance from "@/public/video/application/HomeAppliance.mp4";

const Appliance = () => {
  const { dict, lang } = useContext(LangContext);
  return (
    <div>
      <SubpageBG
        data={[
          { title: dict?.breadcrumb?.home, link: "/" },
          { title: dict?.breadcrumb?.application, link: "" },
          { title: "Home Appliance & Industrial", link: "" },
        ]}
        title={["Home Appliance & Industrial"]}
        video={"/video/application/HomeAppliance.mp4"}
        subTitle="Seoul Viosys<br/>Application"
        subText="World's 1st UV LED"
        lang={lang}
        // sns
        // src=""
        dimmed={true}
        heading
      />
    </div>
  );
};

export default Appliance;
