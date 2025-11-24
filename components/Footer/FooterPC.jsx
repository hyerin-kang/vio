"use client";
import { LangContext } from "@/context/LangContext";
import Link from "next/link";
import { useContext, useState } from "react";
import IcoLocation from "@/public/images/icon/footer-icon-location.svg";
import IcoTel from "@/public/images/icon/footer-icon-tel.svg";
import IcoMail from "@/public/images/icon/footer-icon-contact.svg";
import IcoSearch from "@/public/images/icon/footer-icon-search.svg";
import IcoYoutube from "@/public/images/icon/sns-youtube.svg";
import IcoLinkedin from "@/public/images/icon/sns-linkedin.svg";
import Image from "next/image";

const FooterPC = ({ gnbList }) => {
  const { lang } = useContext(LangContext);
  const [isFamilySite, setIsFamilySite] = useState(false);

  console.log(gnbList, "gnbListPC");

  if (!gnbList?.data) return null;

  const [
    GNBApplication,
    GNBTechnology,
    GNBProduct,
    GNBSupport,
    GNBCompany,
    GNBIR,
    GNBMedia,
  ] = gnbList?.data ?? [];

  const familySite = [
    {
      key: "1",
      label: (
        <a target="_blank" href="https://www.s-et.com/en/">
          SETi
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" href="https://www.seoulsemicon.com/">
          Seoul Seoulsemicon
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" href="https://violeds.com/">
          Violeds
        </a>
      ),
    },
  ];

  return (
    <div className="footer-pc hidden lg:grid">
      {/* 왼쪽 Info 영역 */}
      <div className="info">
        <div className="top">
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
                <span>
                  {lang === "kr" ? "제품 및 샘플 문의하기" : "Get Support"}
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <ul className="search-text">
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
          <div className="link-area">
            <Link href={`${lang}/policy/privacy`}>
              {lang === "kr" ? "개인정보처리방침" : "Privacy Policy"}
            </Link>
            <Link
              href="https://www.redwhistle.org/report/report.asp?organ=7555&RType=1"
              target="_blank"
            >
              REDWHISTLE HELPLINE
            </Link>
            <Link
              href="https://www.redwhistle.org/report/report.asp?organ=7555&RType=1"
              target="_blank"
            >
              CCPA Privacy Notice{" "}
            </Link>
            <Link
              href="https://www.redwhistle.org/report/report.asp?organ=7555&RType=1"
              target="_blank"
            >
              Cookie Policy{" "}
            </Link>
          </div>
          <p className="copyright">
            © Copyright 2024 Seoul Viosys Co., Ltd. All Right Reserved.
          </p>
        </div>
      </div>

      {/* 오른쪽 메뉴 영역 */}
      <div className="menu">
        <div className="menu-left">
          <div className="top">
            <div className="gnb-menu">
              <p className="gnb-title">{GNBApplication.title}</p>
              <ul className="gnb-list">
                {GNBApplication?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gnb-menu">
              <p className="gnb-title">{GNBTechnology.title}</p>
              <ul className="gnb-list">
                {GNBTechnology?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gnb-menu">
              <p className="gnb-title">{GNBProduct.title}</p>
              <ul className="gnb-list">
                {GNBProduct?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="footer-social">
              <a
                href="https://www.youtube.com/c/violedstechnology"
                target="_blank"
              >
                <Image src={IcoYoutube} alt="Youtube" width={20} height={20} />
                <span>Youtube</span>
              </a>
              <a
                href="https://www.linkedin.com/company/seoulviosys/"
                target="_blank"
              >
                <Image
                  src={IcoLinkedin}
                  alt="Linkedin"
                  width={20}
                  height={20}
                />
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="menu-right">
          <div className="top">
            <div className="gnb-menu">
              <p className="gnb-title">{GNBSupport.title}</p>
              <ul className="gnb-list">
                {GNBSupport?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gnb-menu">
              <p className="gnb-title">{GNBCompany.title}</p>
              <ul className="gnb-list">
                {GNBCompany?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gnb-menu">
              <p className="gnb-title">{GNBIR.title}</p>
              <ul className="gnb-list">
                {GNBIR?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gnb-menu">
              <p className="gnb-title">{GNBMedia.title}</p>
              <ul className="gnb-list">
                {GNBMedia?.children?.map((menu) => (
                  <li key={menu.id}>
                    <Link href={menu.url}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bottom">
            <div className="family-site">
              <button onClick={() => setIsFamilySite(!isFamilySite)}>
                <span>Family Site</span>
                <div className="ico">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path d="M0 6H12" stroke="white" strokeWidth="2" />
                    <path d="M6 0L6 12" stroke="white" strokeWidth="2" />
                  </svg>
                </div>
              </button>
              <ul className={`family-list ${isFamilySite ? "on" : ""}`}>
                {isFamilySite &&
                  familySite.map((site) => (
                    <li key={site.key}>{site.label}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPC;
