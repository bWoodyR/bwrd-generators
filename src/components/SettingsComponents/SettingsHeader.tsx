import { AppContext } from "@/services/Context/AppProvider";
import { useContext } from "react";

const SettingsHeader = () => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;
  return (
    <>
      <h1 className="text-4xl mb-4">{lang.settings}</h1>
      <h2 className="text-lg font-medium">{lang.settings_preferences}</h2>
    </>
  );
};

export default SettingsHeader;
