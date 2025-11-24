"use client";
import Link from "next/link";
import Logo from "@/public/images/common/footer-logo.svg";
import Image from "next/image";
import IcoLocation from "@/public/images/icon/footer-icon-location.svg";
import IcoTel from "@/public/images/icon/footer-icon-tel.svg";
import IcoMail from "@/public/images/icon/footer-icon-contact.svg";
import IcoSearch from "@/public/images/icon/footer-icon-search.svg";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import { Collapse } from "antd";

const FooterMO = ({ gnbList }) => {
  const { lang } = useContext(LangContext);

  return (
    <div className="footer-mo block lg:hidden">
      <div className="info">
        <Link href={"/"} className="logo">
          <Image src={Logo} alt="logo" />
        </Link>
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
            <Link href={`${lang}/support/contact`}>
              <span className="underline">
                {lang === "kr" ? "제품 및 샘플 문의하기" : "Get Support"}
              </span>
            </Link>
          </li>
          <li>
            <Image src={IcoSearch} alt="ico-search" />
            <Link href={`${lang}/search/product`}>
              <span className="underline">
                {lang === "kr"
                  ? "최적의 제품을 지금 바로 검색해보세요."
                  : "Search Products"}
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="menu">
        {gnbList?.data?.map((menu, index) => {
          const items = [
            {
              key: menu.id,
              label: menu.title,
              children: menu.children?.map((dep2) => (
                <a href={dep2.url} key={dep2.id}>
                  {dep2.title}
                </a>
              )),
            },
          ];

          return <Collapse key={menu.id} items={items} />;
        })}
      </div>
    </div>
  );
};

export default FooterMO;
