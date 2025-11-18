"use client";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import HomeAppliance from "@/public/images/content/application-HomeAppliance.png";
import MicroLED from "@/public/images/content/application-MicroDisplay.png";
import SensorData from "@/public/images/content/application-SensorData.png";
import Link from "next/link";

const Application = () => {
  const { dict, lang } = useContext(LangContext);
  const menuItems = [
    {
      title: "Home Appliance & Industrial",
      description: dict?.main?.applications?.homeAppliance?.text,
      link: `${lang}/application/appliance`,
      img: HomeAppliance,
    },
    {
      title: "MicroLED Display",
      description: dict?.main?.applications?.microDisplay?.text,
      link: `${lang}/application/display`,
      img: MicroLED,
    },
    {
      title: "Sensor & Data Comm.",
      description: dict?.main?.applications?.sensorData?.text,
      link: `${lang}/application/sensor`,
      img: SensorData,
    },
  ];

  if (!dict?.main) return <p>Loading...</p>;

  return (
    <section className="main-section application">
      <div className="title-area">
        <h2 className="title">Applications</h2>
        <p className="desc">{dict.main.applications.desc}</p>
      </div>

      <div className="itme-list">
        {menuItems.map((item, i) => {
          return (
            <Link href={item.link} key={i}>
              <p className="title">{item.title}</p>
              <p className="desc">{item.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Application;
