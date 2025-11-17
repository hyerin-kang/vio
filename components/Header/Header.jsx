"use client";
import { LangContext } from "@/context/LangContext";
import { axiosInstance } from "@/lib/axiosInstance";
import Link from "next/link";
import { useContext, useState } from "react";
import useSWR from "swr";
import "./header.scss";
import LocaleSwitcher from "./LocaleSwitcher";
import SearchArea from "./SearchArea";
import SubNav from "./SubNav";

const fetcher = (url) => axiosInstance.get(url);

const Header = () => {
  const [hoverIndex, setHoverIndex] = useState(1);

  const { lang } = useContext(LangContext);
  const { data: gnbData, error: gnbErr } = useSWR(`/${lang}/gnb`, fetcher);

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
                  // onMouseLeave={() => setHoverIndex(null)}
                >
                  <span
                    className={`laben ${hoverIndex === navIndex ? "on" : ""}`}
                  >
                    {navItem.title}
                  </span>
                  {hoverIndex === navIndex && navItem.children?.length > 0 && (
                    <SubNav navItem={navItem} lang={lang} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="rigth">
          <ul>
            <li className="link-contact">
              <Link href={`/${lang}/company/sustainable`}>ESG</Link>
            </li>
            <li className="link-contact">
              <Link href={`/${lang}/support/contact`}>Contact us</Link>
            </li>
            <li className="min-w-[65px]">
              <LocaleSwitcher />
            </li>
            <li>
              <SearchArea />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
