// app/[lang]/layout.jsx
import { getDict } from "@/lib/getDict";
import { LangProvider } from "@/context/LangContext";
import "@/styles/global.scss";

export default async function LangLayout({ children, params: paramsPromise }) {
  // params는 Promise로 들어오므로 await 필요
  const params = await paramsPromise;
  const lang = params.lang;

  const dict = await getDict(lang);

  console.log(lang, "lang > Layout"); // 이제 undefined 아님

  return (
    <LangProvider dict={dict} params={params}>
      <main>{children}</main>
    </LangProvider>
  );
}
