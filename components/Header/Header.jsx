"use client";
import { LangContext } from "@/context/LangContext";
import { useContext } from "react";
import useSWR from "swr";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);

const Header = () => {
  const { lang } = useContext(LangContext);
  const { data: gnbData, error: gnbErr } = useSWR(`/${lang}/main`, fetcher);
  return <div>Header</div>;
};

export default Header;
