import BirthNumberForm from "@/components/BirthNumber/BirthNumberForm";
import BirthNumberResponseData from "@/components/BirthNumber/BirthNumberResponseData";
import SkeletonGroup from "@/components/ui/SkeletonGroup";
import { useBirthNumber } from "@/services/api/useBirthNumber";
import { TBirthNumberDate, TGender } from "@/types/BirthNumberTypes";
import { useState } from "react";

const initDate = { day: new Date().getDate(), month: new Date().getMonth() + 1, year: Math.floor(Math.random() * 53) + 1950 };

const BirthNumberGeneratorPage = () => {
  const [gender, setGender] = useState<TGender>("MALE");
  const [date, setDate] = useState<TBirthNumberDate>(initDate);
  const { data, isFetching } = useBirthNumber({ ...date, gender });

  return (
    <section className="flex flex-col gap-4 px-4 my-2">
      <BirthNumberForm setGender={setGender} gender={gender} date={date} setDate={setDate} />
      {isFetching && <SkeletonGroup count={3} />}
      {data && !isFetching && <BirthNumberResponseData birthNumber={data?.birthNumber} />}
    </section>
  );
};

export default BirthNumberGeneratorPage;
