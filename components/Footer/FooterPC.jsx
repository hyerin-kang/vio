"use client";
import { LangContext } from "@/context/LangContext";
import Link from "next/link";
import { useContext } from "react";
import IcoLocation from "@/public/images/icon/footer-icon-location.svg";
import IcoTel from "@/public/images/icon/footer-icon-tel.svg";
import IcoMail from "@/public/images/icon/footer-icon-contact.svg";
import Image from "next/image";

const FooterPC = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="footer-pc">
      {/* 왼쪽 Info 영역 */}
      <div className="info">
        <div className="logo">
          <Link href="/" className="logo" />
        </div>
        <ul>
          <li>
            <Image src={IcoLocation} alt="ico-location" />
            <span>
              {lang == "kr"
                ? "경기도 안산시 단원구 산단로 163번길 97-11 서울바이오시스"
                : "97-11, Sandan-ro 163beon-gil, Danwon-gu, Ansan-si, Gyeonggi-do, Republic of Korea"}
            </span>
          </li>
          <li>
            <Image src={IcoTel} alt="ico-location" />
            <span>
              {lang == "kr"
                ? "경기도 안산시 단원구 산단로 163번길 97-11 서울바이오시스"
                : "97-11, Sandan-ro 163beon-gil, Danwon-gu, Ansan-si, Gyeonggi-do, Republic of Korea"}
            </span>
          </li>
          <li>
            <Image src={IcoMail} alt="ico-location" />
            <Link href={`${lang}/support/contact`} className="underline">
              {lang === "kr" ? "제품 및 샘플 문의하기" : "Get Support"}
            </Link>
          </li>
        </ul>
      </div>

      {/* 오른쪽 메뉴 영역 */}
      <div className="menu">
        <div className="menu-left">메뉴01</div>
        <div className="menu-right">메뉴02</div>
      </div>
    </div>
  );
};

export default FooterPC;
