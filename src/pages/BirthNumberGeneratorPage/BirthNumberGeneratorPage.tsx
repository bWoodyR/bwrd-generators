import NumberInput from "@/components/ui/NumberInput";
import RadioInput from "@/components/ui/RadioInput";
import SkeletonGroup from "@/components/ui/SkeletonGroup";
import { Button } from "@/components/ui/button";
import { AppContext } from "@/services/Context/AppProvider";
import { useBirthNumber } from "@/services/api/useBirthNumber";
import { useContext, useState } from "react";

const initData = { day: new Date().getDate(), month: new Date().getMonth() + 1, year: Math.floor(Math.random() * 53) + 1950 };

const BirthNumberGeneratorPage = () => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;
  const getRandomDate = () => {
    return { day: Math.floor(Math.random() * 30) + 1, month: Math.floor(Math.random() * 12) + 1, year: Math.floor(Math.random() * 53) + 1950 };
  };

  const [gender, setGender] = useState("MALE");
  const [date, setDate] = useState(initData);
  const { data, refetch, isFetching } = useBirthNumber({ ...date, gender });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <section className="flex flex-col gap-4 px-4">
      <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-4 p-4 outline outline-1 outline-slate-700 rounded-lg w-fit lg:w-1/2">
        <h1 className="text-lg">{lang.birth_number_generator}</h1>
        <hr className="border-white" />
        <div className="flex flex-col gap-3 outline outline-1 outline-slate-700 p-2 rounded-lg justify-center lg:flex-row lg:gap-6">
          <RadioInput group="gender" name="MALE" label={lang.birth_number_male} callback={(e) => setGender(e.target.value)} checked={gender === "MALE"} />
          <RadioInput group="gender" name="FEMALE" label={lang.birth_number_female} callback={(e) => setGender(e.target.value)} checked={gender === "FEMALE"} />
          <RadioInput
            group="gender"
            name="EXPO"
            label={lang.birth_number_expo}
            callback={(e) => {
              setGender(e.target.value), setDate({ day: 21, month: 2, year: 1980 });
            }}
            checked={gender === "EXPO"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <NumberInput name="day" label={lang.birth_number_day} value={date.day} callback={(e) => handleDateChange(e)} min={1} max={30} />
          <NumberInput name="month" label={lang.birth_number_month} value={date.month} callback={(e) => handleDateChange(e)} min={1} max={12} />
          <NumberInput name="year" label={lang.birth_number_year} value={date.year} callback={(e) => handleDateChange(e)} min={1950} max={2002} />
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          <Button type="submit" variant={"secondary"}>
            {lang.generate}
          </Button>
          <Button type="button" variant={"outline"} onClick={() => setDate(getRandomDate())}>
            {lang.birth_number_getNewDate}
          </Button>
        </div>
      </form>
      {isFetching && <SkeletonGroup count={3} />}
      {data && !isFetching && (
        <div className="flex flex-col gap-2 outline outline-2 outline-slate-700 w-fit px-4 py-4 rounded-xl hover:outline-white hover:cursor-pointer " onClick={() => navigator.clipboard.writeText(data?.birthNumber)}>
          <p className="text-sm">{lang.birth_number}</p>
          <h3 className="text-3xl px-6 hover:cursor-pointer hover:text-white">{data?.birthNumber}</h3>
        </div>
      )}
    </section>
  );
};

export default BirthNumberGeneratorPage;
