export type TLanguages = "en" | "sk" | "cz";

export type LanguagesTypes = {
  language: TLanguages;
  langFile: Record<string, string>;
};
