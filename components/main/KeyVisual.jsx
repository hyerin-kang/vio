"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);
const KeyVisual = () => {
  const { data: bannerData, error: bannerErr } = useSWR(`/kr/main`, fetcher);

  console.log(bannerData, "bannerData");

  if (bannerErr) {
    <div>에러발생</div>;
  }
  return (
    <div>
      {bannerData?.data?.map((item, i) => (
        <div key={i} className="border">
          <p>{item.title}</p>
          <p>{item.subTitle}</p>
          <Link href={item.butUrl}>{item.butText}</Link>
        </div>
      ))}
    </div>
  );
};

export default KeyVisual;
