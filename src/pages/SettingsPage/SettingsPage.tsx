import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AppContext } from "@/services/Context/AppProvider";
import { ACTION_TYPES } from "@/services/Context/appReducer";
import { useContext } from "react";

const SettingsPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const lang = state.lang.langFile;

  const handleLanguageChange = (langValue: string) => {
    dispatch({ type: ACTION_TYPES.SELECT_LANGUAGE, payload: langValue });
  };

  return (
    <section className="flex flex-col gap-4 mx-2 outline outline-1 outline-slate-700 p-4 rounded-lg ">
      <h1 className="text-4xl mb-4">{lang.settings}</h1>
      <h2 className="text-lg font-medium">{lang.settings_preferences}</h2>
      <div className="flex flex-col gap-6 outline outline-1 outline-slate-700 rounded-lg p-2 md:w-[360px]">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{lang.settings_selectLanguage}</p>
          <Select onValueChange={(langValue) => handleLanguageChange(langValue)} defaultValue={state.lang.language}>
            <SelectTrigger className="">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 ">
              <SelectItem value="en">{lang.english}</SelectItem>
              <SelectItem value="sk">{lang.slovak}</SelectItem>
              <SelectItem value="cz">{lang.czech}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">{lang.settings_selectTheme}</p>
          <Select onValueChange={(value) => console.log(value)} defaultValue="dark" disabled>
            <SelectTrigger className="">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 ">
              <SelectItem value="dark">{lang.dark}</SelectItem>
              <SelectItem value="Light">{lang.light}</SelectItem>
              <SelectItem value="system">{lang.system}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
