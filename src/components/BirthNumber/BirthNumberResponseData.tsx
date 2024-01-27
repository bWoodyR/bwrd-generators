import { AppContext } from "@/services/Context/AppProvider";
import { useContext } from "react";

type BirthNumberResponseDataProps = {
  birthNumber: number;
};
const BirthNumberResponseData = ({ birthNumber }: BirthNumberResponseDataProps) => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;

  return (
    <div className="flex flex-col gap-2 outline outline-2 outline-slate-700 w-fit px-4 py-4 rounded-xl hover:outline-white hover:cursor-pointer " onClick={() => navigator.clipboard.writeText(birthNumber.toString())}>
      <p className="text-sm">{lang.birth_number}</p>
      <h3 className="text-3xl px-6 hover:cursor-pointer hover:text-white">{birthNumber}</h3>
    </div>
  );
};

export default BirthNumberResponseData;
