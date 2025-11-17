import { Dropdown } from "antd";
import { i18n } from "@/i18n.config";
import { useContext } from "react";
import { LangContext } from "@/context/LangContext";
import { redirect } from "next/navigation";

const LocaleSwitcher = () => {
  const { lang } = useContext(LangContext);
  return (
    <Dropdown
      menu={{
        items: i18n.locales.map((item) => ({
          key: item,
          label: item.toUpperCase(),
        })),
        selectable: true,
        defaultSelectedKeys: [lang || "kr"],
        onClick: (item) => {
          redirect(item.key);
        },
      }}
      rootClassName="locale-dropdown"
      placement="bottom"
    >
      <a
        href="#"
        className="flex items-center justify-center gap-[4px]"
        onClick={(e) => e.preventDefault()}
        title="언어선택"
      >
        {lang?.toUpperCase()}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path
            d="M6.00003 9.40867L11.5 4.01562L10.4628 2.99859L4.96283 8.39163L6.00003 9.40867Z"
            fill="currentColor"
          />
          <path
            d="M7.03708 8.39304L1.53711 3L0.499907 4.01704L5.99987 9.41008L7.03708 8.39304Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </Dropdown>
  );
};

export default LocaleSwitcher;
