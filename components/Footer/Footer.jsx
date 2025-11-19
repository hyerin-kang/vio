import Link from "next/link";
import "./footer.scss";
import FooterPC from "./FooterPC";

const Footer = () => {
  return (
    <footer className="footer">
      <FooterPC className="hidden lg:block" />
    </footer>
  );
};

export default Footer;
