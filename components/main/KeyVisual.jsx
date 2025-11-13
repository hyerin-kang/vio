"use client";
import { axiosInstance } from "@/lib/axiosInstance";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimatedTextWrapper from "@/components/AnimateText/AnimatedTextWrapper";
import AnimatedTextCharacter from "@/components/AnimateText/AnimatedTextCharacter";
import useSWR from "swr";
import { motion } from "framer-motion";
import { useRef } from "react";

const fetcher = (url) => axiosInstance.get(url).then((res) => res);

const KeyVisual = () => {
  const progressLine = useRef(null);
  const { data: bannerData, error: bannerErr } = useSWR(`/kr/main`, fetcher);

  const onAutoplayTimeLeft = (swiper, time, progress) => {
    console.log("autoplay event →", { time, progress });
    if (progressLine.current) {
      progressLine.current.style.width = `${(1 - progress) * 100}%`;
    }
  };

  if (bannerErr) return <div>에러발생</div>;

  return (
    <div>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ type: "fraction", clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="main-visual-swiper"
      >
        {bannerData?.data?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="border">
              <div className="bg">
                <video
                  playsInline
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item.file.webPath}`}
                />
              </div>

              <div className="text-area">
                <AnimatedTextWrapper>
                  <AnimatedTextCharacter
                    text={item.title}
                    style={{ "font-size": "40px" }}
                  />
                </AnimatedTextWrapper>
                <motion.div
                  className="sub-title"
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.8,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item?.subTitle.replace(/\n/g, "<br />"),
                  }}
                />{" "}
                <div className="btn-area">
                  <Link href={item.butUrl}>{item.butText}</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress-wrap">
          <div className="autoplay-progress" ref={progressLine}></div>
        </div>
      </Swiper>
    </div>
  );
};

export default KeyVisual;
