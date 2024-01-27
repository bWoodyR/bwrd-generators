import { Input } from "./input";

type NumberInputProps = {
  name: string;
  label: string | string[];
  value: number;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
};

const NumberInput = ({ name, label, value, callback, min, max }: NumberInputProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center md:flex md:gap-4">
      <label htmlFor={name} className="w-28">
        {label}
      </label>
      <Input type="number" name={name} id={name} value={value} onChange={(e) => callback(e)} className="w-[75px] text-center" min={min} max={max}/>
    </div>
  );
};

export default NumberInput;
