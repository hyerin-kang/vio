import React, { useContext, useMemo } from "react";
import { LangContext } from "@/context/LangContext";
import { useRouter } from "next/navigation";
import { Select } from "antd";
import { DownOutlined } from "@ant-design/icons";

const SelectSubMenu = ({ currentMenu, category, lang }) => {
  const { dict } = useContext(LangContext);
  const router = useRouter();
  //전체메뉴
  const MENU_MAP = useMemo(
    () => ({
      application: [
        {
          label: "Home Appliance & Industrial",
          url: `/${lang}/application/appliance`,
        },
        { label: "MicroLED Display", url: `/${lang}/application/display` },
        {
          label: "Sensor & Data Communications",
          url: `/${lang}/application/sensor`,
        },
      ],
      product: [
        { label: "UV LED", url: `/${lang}/product/violet` },
        { label: "Micro LED", url: `/${lang}/technology/wicop_pixel` },
        { label: "VCSEL LD", url: `/${lang}/product/vcsel` },
      ],
      technology: [
        { label: "WICOP", url: `/${lang}/technology/wicop` },
        { label: "WICOP Pixel", url: `/${lang}/technology/wicop_pixel` },
        { label: "Acrich", url: `/${lang}/technology/acrich` },
        { label: "SunLike", url: `/${lang}/technology/sunlike` },
        { label: "Violeds", url: `/${lang}/technology/violeds` },
      ],
      support: [
        {
          label: dict.support?.documentLibrary?.title,
          url: `/${lang}/support/download`,
        },
        {
          label: dict.support?.contactUs?.title,
          url: `/${lang}/support/contact`,
        },
      ],
      company: [
        { label: dict.company?.title, url: `/${lang}/company/information` },
        {
          label: dict.company?.certification?.title,
          url: `/${lang}/company/certificates`,
        },
        {
          label: dict.company?.sustainableManagement?.title,
          url: `/${lang}/company/sustainable`,
        },
        { label: dict.company?.career?.title, url: `/${lang}/company/career` },
        {
          label: dict.company?.network?.title,
          url: `/${lang}/company/network`,
        },
        { label: dict.company?.brand?.title, url: `/${lang}/company/brand` },
      ],
      applyVn: [
        {
          label: "Nhân sự lý tưởng",
          url: `/${lang}/company/career?tab=talent`,
        },
        {
          label: "Chế độ phúc lợi",
          url: `/${lang}/company/career?tab=welfare`,
        },
        { label: "Thông tin tuyển dụng", url: `/${lang}/company/career/apply` },
      ],
      ir: [
        { label: dict.ir?.irInfomation?.title, url: `/${lang}/ir/information` },
        { label: dict.ir?.irReport?.title, url: `/${lang}/ir/report` },
        ...(lang === "kr"
          ? [{ label: dict.ir?.irNotice?.title, url: `/${lang}/ir/notice` }]
          : []),
      ],
      media: [
        { label: dict.media?.news?.title, url: `/${lang}/media/news` },
        { label: dict.media?.event?.title, url: `/${lang}/media/event` },
        { label: dict.media?.insight?.title, url: `/${lang}/media/insight` },
      ],
    }),
    [dict, lang]
  );

  const list = MENU_MAP[category] ?? [];

  const defaultValue =
    list.find((x) => x.label === currentMenu)?.label ?? list[0]?.label;

  const handleChange = (label) => {
    const item = list.find((x) => x.label === label);
    if (item) router.push(item.url);
  };
  return (
    <Select
      defaultValue={defaultValue}
      onChange={handleChange}
      suffixIcon={<DownOutlined />}
      variant="borderless"
      className="lnb-selectmenu-select"
      dropdownAlign={{
        points: ["tl", "bl"],
        offset: [0, 0],
      }}
      virtual={false}
      //   listHeight={40}
    >
      {list.map((item) => (
        <Select.Option key={item.label} value={item.label}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectSubMenu;
