import { useContext } from "react";
import Breadcrumb from "@/components/Breadcrumb/page";

import Select from "./Select";

const FloationLnb = ({ data, title, category, lang }) => {
  return (
    <div className="floating-lnb">
      <Breadcrumb data={data} />
      <div className="select">
        <Select currentMenu={title} category={category} lang={lang} />
      </div>
    </div>
  );
};

export default FloationLnb;
