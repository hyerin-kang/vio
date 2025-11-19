"use client";
import { LangContext } from "@/context/LangContext";
import Link from "next/link";
import { useContext } from "react";

const ShowRoom = () => {
  const { dict } = useContext(LangContext);
  return (
    <section className="show-room">
      <div className="content">
        <h2 className="title">Violeds Virtual Showroom</h2>
        <p className="desc">{dict.main.showroom.desc}</p>
        <Link
          href="https://violeds.com/showroom"
          target="_blank"
          className="btn"
        >
          View more
        </Link>
      </div>
    </section>
  );
};

export default ShowRoom;
