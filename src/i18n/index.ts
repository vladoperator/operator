import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./locales/en";
import { ro } from "./locales/ro";
import { ru } from "./locales/ru";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        ro: { translation: ro },
        ru: { translation: ru },
      },
      fallbackLng: "en",
      supportedLngs: ["en", "ro", "ru"],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "crosta-lang",
      },
    });
}

export default i18n;