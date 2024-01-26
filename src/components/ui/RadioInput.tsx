type RadioInputProps = {
  name: string;
  label: string;
  group: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
};

const RadioInput = ({ name, label, group, callback, checked }: RadioInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <input type="radio" name={group} id={name} value={name} onChange={(e) => callback(e)} className="accent-slate-700 " checked={checked} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default RadioInput;
