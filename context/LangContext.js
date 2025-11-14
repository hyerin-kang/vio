// context/LangContext.jsx
"use client";
import { createContext, useState, useEffect } from "react";

export const LangContext = createContext();

export const LangProvider = ({ dict: initialDict, children }) => {
  const [dict, setDict] = useState(initialDict || { main: {} });
  const [lang, setLang] = useState(initialDict?.locale || "ko");

  useEffect(() => {
    setDict(initialDict);
  }, [initialDict]);

  return (
    <LangContext.Provider value={{ dict, lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
