import { useReducer } from "react";
import appReducer, { Action, State } from "./appReducer";
import React from "react";
import { getLanguage } from "@/helpers/getLanguageFromLocalStorage";

type AppContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initState: State = {
  lang: getLanguage(),
  user: undefined,
};

const AppContext = React.createContext<AppContextType>({
  state: initState,
  dispatch: () => {
    /* empty */
  },
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
