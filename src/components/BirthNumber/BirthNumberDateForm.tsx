import { AppContext } from '@/services/Context/AppProvider';
import { useContext } from 'react'
import NumberInput from '../ui/NumberInput';
import { TBirthNumberDate } from '@/types/BirthNumberTypes';

type BirthNumberDateFormProps = {
  setDate: React.Dispatch<React.SetStateAction<TBirthNumberDate>>;
  date: TBirthNumberDate;
};

const BirthNumberDateForm = ({ date, setDate }: BirthNumberDateFormProps) => {
  3;
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-2">
      <NumberInput name="day" label={lang.birth_number_day} value={date.day} callback={(e) => handleDateChange(e)} min={1} max={30} />
      <NumberInput name="month" label={lang.birth_number_month} value={date.month} callback={(e) => handleDateChange(e)} min={1} max={12} />
      <NumberInput name="year" label={lang.birth_number_year} value={date.year} callback={(e) => handleDateChange(e)} min={1950} max={2002} />
    </div>
  );
};

export default BirthNumberDateForm