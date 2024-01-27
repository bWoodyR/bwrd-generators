import { TLanguages } from "@/types/LanguagesTypes";
import { enData, czData, skData } from "@/lang";

export const getLanguageFromLocalStorage = () => {
  const supportedLanguages = ["en", "sk", "cz"];
  const lang = localStorage.getItem("lang") || "en";
  if (supportedLanguages.includes(lang)) return lang as TLanguages;
  return "en";
};

export const getLanguageDataFile = (): Record<string, string | string[]> => {
  switch (getLanguageFromLocalStorage()) {
    case "en":
      return enData;
    case "sk":
      return skData;
    case "cz":
      return czData;
    default:
      return enData;
  }
};

export const getLanguage = () => {
  return {
    language: getLanguageFromLocalStorage(),
    langFile: getLanguageDataFile(),
  };
};
