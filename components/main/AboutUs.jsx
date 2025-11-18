"use client";
import Counter from "@/components/AnimateText/Counter";
import { LangContext } from "@/context/LangContext";
import Link from "next/link";
import { useContext } from "react";

const AboutUs = () => {
  const { dict, lang } = useContext(LangContext);
  return (
    <section className="aboutus main-section">
      <div className="title-area text-white">
        <p className="title">{dict?.main?.aboutUs?.title}</p>
        <p className="!mt-5 text-4xl">A New History of Light</p>
        <p className="!mt-6 text-xl opacity-50">
          {dict?.main?.aboutUs?.text}
        </p>{" "}
        <Link
          href={`${lang}/search/product`}
          className="border border-white py-2 px-4 block mt-4 w-fit rounded-full color-whit mt-10"
        >
          Product Search
        </Link>
      </div>

      <div className="bottom-area">
        <div className="left">
          <p className="text-green-500">{dict?.main?.aboutUs?.info?.tit1}</p>
          <p className="mt-4 flex items-center gap-1 text-7xl">
            <Counter start={0} end={5000} duration={2} /> +
          </p>
        </div>
        <div className="right">
          <p className="text-green-500">{dict?.main?.aboutUs?.info?.tit2}</p>
          <p className="mt-4 flex items-center gap-1 text-7xl">
            {dict?.main?.aboutUs?.info?.data2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
