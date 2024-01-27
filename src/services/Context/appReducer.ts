import { getLanguage } from "@/helpers/getLanguageFromLocalStorage";
import { LanguagesTypes, TLanguages } from "@/types/LanguagesTypes";

export enum ACTION_TYPES {
  SELECT_LANGUAGE = "SELECT_LANGUAGE",
}

export type Action = {
  type: ACTION_TYPES;
  payload: unknown;
};

export type State = {
  lang: LanguagesTypes;
};

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.SELECT_LANGUAGE:
      localStorage.setItem("lang", action.payload as TLanguages);
      return { ...state, lang: getLanguage() };

    default:
      throw new Error(`No action type ${action.type} found`);
  }
};

export default appReducer;
