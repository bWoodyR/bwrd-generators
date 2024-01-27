import SettingsSelectBox from "@/components/SettingsComponents/SettingsSelectBox";
import { AppContext } from "@/services/Context/AppProvider";
import { ACTION_TYPES } from "@/services/Context/appReducer";
import { useContext } from "react";

const SettingsContent = () => {
      const { state, dispatch } = useContext(AppContext);
      const lang = state.lang.langFile;

      const handleLanguageChange = (langValue: string) => {
        dispatch({ type: ACTION_TYPES.SELECT_LANGUAGE, payload: langValue });
      };

  return (
    <div className="flex flex-col gap-6 outline outline-1 outline-slate-700 rounded-lg p-2 md:w-[360px]">
      <SettingsSelectBox
        sectionName={lang.settings_selectLanguage as string}
        selectableData={[
          { value: "en", label: lang.english },
          { value: "sk", label: lang.slovak },
          { value: "cz", label: lang.czech },
        ]}
        callback={(langValue: string) => handleLanguageChange(langValue)}
      />
      <SettingsSelectBox
        sectionName={lang.settings_selectTheme as string}
        selectableData={[
          { value: "dark", label: lang.dark },
          { value: "Light", label: lang.light },
          { value: "system", label: lang.system },
        ]}
        callback={(langValue: string) => handleLanguageChange(langValue)}
        disabled
      />
    </div>
  );
};

export default SettingsContent;
