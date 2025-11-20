"use client";
import { useContext } from "react";
import "./footer.scss";
import FooterPC from "./FooterPC";
import { LangContext } from "@/context/LangContext";
import useSWR from "swr";

const fetcher = (url) => axiosInstance.get(url);

const Footer = () => {
  const { lang } = useContext(LangContext);

  const { data: gnbList, error: gnbListErr } = useSWR(`/${lang}/gnb`, fetcher);

  //   console.log(gnbList, "gnbList");
  return (
    <footer className="footer">
      <FooterPC gnbList={gnbList} />
    </footer>
  );
};

export default Footer;
