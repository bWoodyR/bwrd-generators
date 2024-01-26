type CheckboxInputProps = {
  name: string;
  label: string;
  checked: boolean;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxInput = ({ name, label, checked, callback }: CheckboxInputProps) => {
  return (
    <div className="flex gap-4 items-center">
      <label htmlFor={name} className="w-28">
        {label}
      </label>
      <input type="checkbox" id={name} name={name} checked={checked} onChange={(e) => callback(e)} />
    </div>
  );
};

export default CheckboxInput;
