"use client";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import useSWR from "swr";
import { axiosInstance } from "@/lib/axiosInstance";
import Link from "next/link";
import Image from "next/image";

const fetcher = (url) => axiosInstance.get(url);

const Product = () => {
  const { dict, lang } = useContext(LangContext);

  const { data: productData, error: productErr } = useSWR(
    `${lang}/main/product`,
    fetcher
  );

  const prdtCategory = {
    pd01: "UV LED",
    pd02: "Micro LED",
    pd03: "VCSEL LD",
  };

  return (
    <section className="main-section bg-[#f9f9f9] pb-30">
      <div className="title-area">
        <h2 className="title">Product Highlights</h2>
        <p className="desc">{dict.main.product.desc}</p>
        <Link
          href={`${lang}/search/product`}
          className="border py-2 px-4 block mt-4 w-fit rounded-full"
        >
          Product Search
        </Link>
      </div>

      <div className="product-list">
        {productData?.data?.map((item) => (
          <div className="product-item" key={item.id}>
            <Link
              href={
                !!item.url
                  ? item.url
                  : `/${lang}/product/detail/${item.productId}`
              }
            >
              <div className="img">
                <Image
                  src={
                    !!item.file.webPath
                      ? item.file.webPath
                      : `${process.env.NEXT_PUBLIC_URL}${item.file.webPath}`
                  }
                  width={640}
                  height={307}
                  alt={item.title}
                  className="bg-gray-100"
                />
              </div>
              <div className="txt">
                <p className="cate">{prdtCategory[item.subCode]}</p>
                <p className="title">{item.title}</p>

                <div className="data">
                  {!!item.wave && (
                    <dl>
                      <dt>Wavelength[nm]</dt>
                      <dd>{item.wave}</dd>
                    </dl>
                  )}
                  {!!item.size && (
                    <dl>
                      <dt>Size</dt>
                      <dd>{item.size}</dd>
                    </dl>
                  )}
                  {!!item.type && (
                    <dl>
                      <dt>Type</dt>
                      <dd>{item.type}</dd>
                    </dl>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
