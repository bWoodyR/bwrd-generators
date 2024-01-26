import { Input } from "./input";
import ButtonsWithValues from "./ButtonsWithValues";

type TextInputProps = {
  name: string;
  label: string;
  value: string;
  callbackOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  valueButtons?: string[] | undefined;
  valueButtonsCallback?: (name: string, value: string) => void;
};

const TextInput = ({ name, label, value, callbackOnChange, disabled = false, valueButtons, valueButtonsCallback = () => {} }: TextInputProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center md:flex md:gap-4">
      <label htmlFor={name} className="w-28">
        {label}
      </label>
      <Input type="text" name={name} id={name} value={value} onChange={(e) => callbackOnChange(e)} className="w-[75px] text-center" disabled={disabled} />
      {valueButtons && valueButtons.length > 0 && <ButtonsWithValues name={name} values={valueButtons} callback={(name: string, value: string) => valueButtonsCallback(name, value)} disabled={disabled} />}
    </div>
  );
};

export default TextInput;
