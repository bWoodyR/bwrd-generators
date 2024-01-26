import { Button } from "./button";

type ButtonsWithValuesProps = {
  name: string;
  values: string[];
  callback: (name: string, value: string) => void;
  disabled?: boolean;
};

const ButtonsWithValues = ({ name, values, callback, disabled = false }: ButtonsWithValuesProps) => {
  return (
    <div className="flex gap-2">
      {values.map((value) => {
        return (
          <Button key={value} type="button" variant="secondary" onClick={() => callback(name, value)} disabled={disabled}>
            {value ? value : "0"}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonsWithValues;
