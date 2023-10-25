import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    // backend: {
    //   loadPath: (language: string, namespace: string) =>
    //     `https://your-api.com/translations/${language}/${namespace}`,
    // },
    fallbackLng: "en_EN",
    debug: false,
    detection: {
      order: ["queryString", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
