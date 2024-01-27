import { AppContext } from "@/services/Context/AppProvider";
import { useContext } from "react";
import RadioInput from "../ui/RadioInput";
import { TBirthNumberDate, TGender } from "@/types/BirthNumberTypes";

type BirthNumberGenderButtonsFormProps = {
  setGender: React.Dispatch<React.SetStateAction<TGender>>;
  gender: TGender;
  setDate: React.Dispatch<React.SetStateAction<TBirthNumberDate>>;
};

const BirthNumberGenderFormButtons = ({ gender, setGender, setDate }: BirthNumberGenderButtonsFormProps) => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;

  return (
    <div className="flex flex-col gap-3 outline outline-1 outline-slate-700 p-2 rounded-lg justify-center lg:flex-row lg:gap-6">
      <RadioInput group="gender" name="MALE" label={lang.birth_number_male} callback={(e) => setGender(e.target.value as TGender)} checked={gender === "MALE"} />
      <RadioInput group="gender" name="FEMALE" label={lang.birth_number_female} callback={(e) => setGender(e.target.value as TGender)} checked={gender === "FEMALE"} />
      <RadioInput
        group="gender"
        name="EXPO"
        label={lang.birth_number_expo}
        callback={(e) => {
          setGender(e.target.value as TGender), setDate({ day: 21, month: 2, year: 1980 });
        }}
        checked={gender === "EXPO"}
      />
    </div>
  );
};

export default BirthNumberGenderFormButtons;
