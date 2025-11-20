"use client";
import { LangContext } from "@/context/LangContext";
import { axiosInstance } from "@/lib/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import useSWR from "swr";

const fetcher = (url) => axiosInstance.get(url);

const Newsroom = () => {
  const { dict, lang } = useContext(LangContext);

  const { data: newsData, error: newsErr } = useSWR(
    `${lang}/media/news?recordCountPerPage=3`,
    fetcher
  );

  return (
    <section className="main-section newsroom">
      <div className="title-area">
        <h2 className="title">Newsroom</h2>
        <p className="desc">{dict.main.newsroom.desc}</p>
      </div>

      <div className="news-list">
        {newsData?.data?.map((item) => (
          <div key={item.mediaCenterMasterId} className="news-item">
            <Link href={`/media/news/${item.mediaCenterMasterId}`}>
              <div className="img">
                <Image
                  src={item.file.webPath}
                  width={640}
                  height={427}
                  alt={item.title}
                />
              </div>
              <div className="txt">
                <p className="division">{item.division}</p>
                <p className="title">{item.title}</p>
                <p className="prev">{item.preview}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newsroom;
