"use client";
import Counter from "@/components/AnimateText/Counter";
import { LangContext } from "@/context/LangContext";
import { useContext } from "react";

const AboutUs = () => {
  const { dict } = useContext(LangContext);
  return (
    <section className="aboutus">
      <p>{dict?.main?.aboutUs?.title}</p>
      <p>{dict?.main?.aboutUs?.titleMo}</p>
      <p>{dict?.main?.aboutUs?.text}</p>
      <p>{dict?.main?.aboutUs?.info?.tit1}</p>
      <Counter start={0} end={5000} duration={2} />
      <p>{dict?.main?.aboutUs?.info?.tit2}</p>
      <p>{dict?.main?.aboutUs?.info?.data2}</p>
    </section>
  );
};

export default AboutUs;
