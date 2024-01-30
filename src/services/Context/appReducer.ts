import { getLanguage } from "@/helpers/getLanguageFromLocalStorage";
import { TGeneratorsUser } from "@/types/GeneratorsUserType";
import { LanguagesTypes, TLanguages } from "@/types/LanguagesTypes";

export enum ACTION_TYPES {
  SELECT_LANGUAGE = "SELECT_LANGUAGE",
  SET_USER = "SET_USER",
}

export type Action = {
  type: ACTION_TYPES;
  payload: unknown;
};

export type State = {
  lang: LanguagesTypes;
  user: TGeneratorsUser | undefined;
};

const appReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.SELECT_LANGUAGE:
      localStorage.setItem("lang", action.payload as TLanguages);
      return { ...state, lang: getLanguage() };
    case ACTION_TYPES.SET_USER:
      return { ...state, user: action.payload as TGeneratorsUser };
    default:
      throw new Error(`No action type ${action.type} found`);
  }
};

export default appReducer;
