import { TBirthNumberDate } from "@/types/BirthNumberTypes";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import { getRandomDate } from "@/helpers/getRandomDate";

type BirthNumberFormButtonsProps = {
  setDate: React.Dispatch<React.SetStateAction<TBirthNumberDate>>;
};

const BirthNumberFormButtons = ({ setDate }: BirthNumberFormButtonsProps) => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      <Button type="submit" variant={"secondary"}>
        {lang.generate}
      </Button>
      <Button type="button" variant={"outline"} onClick={() => setDate(getRandomDate())}>
        {lang.birth_number_getNewDate}
      </Button>
    </div>
  );
};

export default BirthNumberFormButtons;
