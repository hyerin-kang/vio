"use client";
import { LangContext } from "@/context/LangContext";
import Link from "next/link";
import React, { useContext } from "react";

const ContactUs = () => {
  const { dict, lang } = useContext(LangContext);
  return (
    <section className="main-section">
      <div className="title-area">
        <h2 className="title">ContactUs</h2>
      </div>
      <p>{dict.main.contactUs.desc}</p>
      <Link href={`${lang}/company/network`}>Global Network</Link>
    </section>
  );
};

export default ContactUs;
