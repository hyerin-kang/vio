"use client";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";

const Application = () => {
  const { dict } = useContext(LangContext);

  if (!dict?.main) return <p>Loading...</p>;

  return (
    <section className="main-section">
      <div className="title-area">
        <h2 className="title">Applications</h2>
        <p>{dict.main.applications.desc}</p>
      </div>
    </section>
  );
};

export default Application;
