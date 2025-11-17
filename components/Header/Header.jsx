"use client";
import { LangContext } from "@/context/LangContext";
import { axiosInstance } from "@/lib/axiosInstance";
import Link from "next/link";
import { useContext, useState } from "react";
import useSWR from "swr";
import "./header.scss";

const fetcher = (url) => axiosInstance.get(url);

const Header = () => {
  const [hoverIndex, setHoverIndex] = useState(1);

  const { lang } = useContext(LangContext);
  const { data: gnbData, error: gnbErr } = useSWR(`/${lang}/gnb`, fetcher);

  console.log(gnbData?.data, "gnbData");

  return (
    <>
      <div className="header">
        <div className="left">
          <div className="logo">
            <Link href={`/${lang}`} />
          </div>
          <ul className="nav-list">
            {gnbData?.data?.map((navItem, navIndex) => {
              return (
                <li
                  key={navIndex}
                  onMouseEnter={() => setHoverIndex(navIndex)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  <span>{navItem.title}</span>
                  {hoverIndex === navIndex && navItem.children?.length > 0 && (
                    <div className="sub-nav">
                      {navItem.children.map((child) => {
                        return <p key={child.id}>{child.title}</p>;
                      })}
                    </div>
                  )}
                </li>
              );
            })}
            <li></li>
          </ul>
        </div>
        <div className="rigth">
          <ul>
            <li>
              <Link href={`/${lang}/company/sustainable`}>ESG</Link>
            </li>
            <li>
              <Link href={`/${lang}/support/contact`}>Contact us</Link>
            </li>
            <li>언어변경</li>
            <li>검색영역</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
