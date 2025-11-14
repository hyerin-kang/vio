// app/[lang]/layout.jsx
import { getDict } from "@/lib/getDict";
import { LangProvider } from "@/context/LangContext"; // app/[lang]/layout.jsx
import Header from "@/components/Header/Header";
import "@/styles/global.scss";

export default async function LangLayout({ children, params: paramsPromise }) {
  const params = await paramsPromise;
  const lang = params.lang;
  const dict = await getDict(lang);

  return (
    <LangProvider dict={dict} params={params}>
      <Header />
      <main>{children}</main>
    </LangProvider>
  );
}
