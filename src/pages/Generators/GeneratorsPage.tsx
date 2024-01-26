import { useEffect, useRef, useState } from "react";

const GeneratorsPage = () => {
  const PASS_LENGTH = 4;
  const [pass, setPass] = useState(Array.from({ length: PASS_LENGTH }, () => ""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newPass = [...pass];

    newPass[index] = value.substring(value.length - 1);
    setPass(newPass);

    if (value && index < PASS_LENGTH - 1 && inputRefs.current[index + 1]) inputRefs.current[index + 1].focus();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !pass[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleInputClick = (index: number) => {
    inputRefs.current[index].setSelectionRange(1, 1);

    // najde prvy prazdny input a presmeruje tam
    if (index > 0 && !pass[index - 1]) {
      inputRefs.current[pass.indexOf("")].focus();
    }
  };

  useEffect(() => {
    if (inputRefs.current[0]) inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    console.log(pass);
  }, [pass]);

  return (
    <section>
      <div className="flex gap-4">
        {pass.map((value, index) => {
          return (
            <input type="text" key={index} ref={(input: HTMLInputElement) => (inputRefs.current[index] = input)} value={value} onChange={(e) => handleInputChange(e, index)} className="pl-4 text-black" onKeyDown={(e) => handleInputKeyDown(e, index)} onClick={() => handleInputClick(index)}></input>
          );
        })}
      </div>
    </section>
  );
};

export default GeneratorsPage;
