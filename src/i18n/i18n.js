// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslation from "./locales/en/translation.json";
import srTranslation from "./locales/sr/translation.json";
import ruTranslation from "./locales/ru/translation.json";
import ukTranslation from "./locales/uk/translation.json";
import svTranslation from "./locales/sv/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        sr: { translation: srTranslation },
        ru: { translation: ruTranslation },
        uk: { translation: ukTranslation },
        sv: { translation: svTranslation },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
