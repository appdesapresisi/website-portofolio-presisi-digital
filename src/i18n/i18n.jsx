import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const storage = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
  const [locale, setLocale] = useState(storage || "en");

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch (e) {}
  }, [locale]);

  const t = (key, fallback = "") => {
    const parts = key.split(".");
    let cur = translations[locale] || {};
    for (const p of parts) {
      cur = cur?.[p];
      if (cur === undefined) return fallback || key;
    }
    return cur;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
};

export default I18nContext;
