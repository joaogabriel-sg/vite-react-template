import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { Languages } from "../constants/languages";
import { STORAGE_KEYS } from "../constants/storage-keys";
import { resources } from "./locales";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    detection: {
      caches: ["localStorage"],
      lookupLocalStorage: STORAGE_KEYS.LANGUAGE,
      order: ["localStorage", "navigator"],
    },
    fallbackLng: Languages.EN,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    resources,
  });

export { default as i18n } from "i18next";
