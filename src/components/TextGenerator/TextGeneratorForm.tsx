import React, { useContext } from "react";
import { Button } from "../ui/button";
import TextInputWithButtons from "../ui/TextInputWithButtons";
import CheckboxInput from "../ui/CheckboxInput";
import { AppContext } from "@/services/Context/AppProvider";
import { TTextGeneratorData } from "@/types/textGeneratorTypes";

type TextGeneratorFormProps = {
  textParams: TTextGeneratorData;
  setTextParams: React.Dispatch<React.SetStateAction<TTextGeneratorData>>;
  callback: () => void;
};

const TextGeneratorForm = ({ setTextParams, textParams, callback }: TextGeneratorFormProps) => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type;
    const name = e.target.name;
    let value;
    if (type === "text") {
      value = e.target.value;
      value = value.substring(0, 6);
    } else value = e.target.checked;
    setTextParams({ ...textParams, [name]: value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  const handleButtonValueClick = (type: string, value: string) => {
    if (type === "paragraphs") {
      setTextParams({ ...textParams, paragraphs: value });
    } else if (type === "text") {
      setTextParams({ ...textParams, max_length: value });
    } else throw new Error("Unknown button type");
  };

  return (
    <div className="flex flex-col gap-4 outline outline-1 outline-slate-700 rounded-lg px-4 py-4 w-fit lg:w-1/2 ">
      <h1 className="text-lg ">{lang.text_generator_lorem_ipsum_setup}</h1>
      <hr className="border-white" />
      <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-4">
        <TextInputWithButtons
          name="max_length"
          label={lang.text_generator_letters}
          value={textParams.max_length}
          callbackOnChange={(e) => handleInputChange(e)}
          disabled={textParams.paragraphs !== ""}
          valueButtons={["60", "500", "1000"]}
          valueButtonsCallback={(name: string, value: string) => handleButtonValueClick(name, value)}
        />
        <TextInputWithButtons name="paragraphs" label={lang.text_generator_paragraphs} value={textParams.paragraphs} callbackOnChange={(e) => handleInputChange(e)} valueButtons={["", "3", "5"]} valueButtonsCallback={(name: string, value: string) => handleButtonValueClick(name, value)} />
        <CheckboxInput name="start_with_lorem_ipsum" label={lang.text_generator_start_with_lorem} checked={textParams.start_with_lorem_ipsum} callback={(e) => handleInputChange(e)} />
        <CheckboxInput name="random" label={lang.text_generator_random} checked={textParams.random} callback={(e) => handleInputChange(e)} />
        <Button type="submit" variant="secondary">
          {lang.generate}
        </Button>
      </form>
    </div>
  );
};

export default TextGeneratorForm;
