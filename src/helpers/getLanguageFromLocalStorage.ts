import { TLanguages } from "@/types/LanguagesTypes";
import { enData, czData, skData } from "@/lang";

export const getLanguageFromLocalStorage = () => {
  const supportedLanguages = ["en", "sk", "cz"];
  const lang = localStorage.getItem("lang") || "en";
  if (supportedLanguages.includes(lang)) return lang as TLanguages;
  return "en";
};

export const getLanguageDataFile = () => {
  switch (getLanguageFromLocalStorage()) {
    case "en":
      return enData;
    case "sk":
      return skData;
    case "cz":
      return czData;
    default:
      throw new Error("Unknown language");
  }
};


export const getLanguage = () => {
    return {
      language: getLanguageFromLocalStorage(),
      langFile: getLanguageDataFile(),
    };
}