import { AppContext } from "@/services/Context/AppProvider";
import { useContext } from "react";
import { FaCircleInfo } from "react-icons/fa6";

const CustomTagListInfo = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className="mt-2 py-2 text-xl bg-slate-700  px-4 rounded-lg flex flex-col gap-2 lg:w-fit">
        <p className="flex items-center gap-4">
          <FaCircleInfo /> {state.lang.langFile.selectTagsPrompt}
        </p>
        <p className="text-sm text-slate-400">{state.lang.langFile.tagsAddedToClipboard}</p>
      </div>
    </>
  );
};

export default CustomTagListInfo;
