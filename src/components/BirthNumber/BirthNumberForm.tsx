import { AppContext } from "@/services/Context/AppProvider";
import { useBirthNumber } from "@/services/api/useBirthNumber";
import { TBirthNumberDate, TGender } from "@/types/BirthNumberTypes";
import { useContext } from "react";
import BirthNumberGenderFormButtons from "./BirthNumberGenderFormButtons";
import BirthNumberDateForm from "./BirthNumberDateForm";
import BirthNumberFormButtons from "./BirthNumberFormButtons";

type BirthNumberFormProps = {
  setGender: React.Dispatch<React.SetStateAction<TGender>>;
  gender: TGender;
  setDate: React.Dispatch<React.SetStateAction<TBirthNumberDate>>;
  date: TBirthNumberDate;
};

const BirthNumberForm = ({ setGender, gender, setDate, date }: BirthNumberFormProps) => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;
  const { refetch } = useBirthNumber({ ...date, gender });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-4 p-4 outline outline-1 outline-slate-700 rounded-lg w-fit lg:w-1/2">
      <h1 className="text-lg">{lang.birth_number_generator}</h1>
      <hr className="border-white" />
      <BirthNumberGenderFormButtons gender={gender} setGender={setGender} setDate={setDate} />
      <BirthNumberDateForm date={date} setDate={setDate} />
      <BirthNumberFormButtons setDate={setDate} />
    </form>
  );
};

export default BirthNumberForm;
