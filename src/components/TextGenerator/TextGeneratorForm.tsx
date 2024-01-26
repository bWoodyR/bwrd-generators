import React from "react";
import { Button } from "../ui/button";
import TextInput from "../ui/TextInput";
import CheckboxInput from "../ui/CheckboxInput";

type TextGeneratorFormProps = {
  textParams: {
    max_length: string;
    paragraphs: string;
    start_with_lorem_ipsum: boolean;
    random: boolean;
  };
  setTextParams: React.Dispatch<
    React.SetStateAction<{
      max_length: string;
      paragraphs: string;
      start_with_lorem_ipsum: boolean;
      random: boolean;
    }>
  >;
  callback: () => void;
};

const TextGeneratorForm = ({ setTextParams, textParams, callback }: TextGeneratorFormProps) => {
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
    } else setTextParams({ ...textParams, max_length: value });
  };

  return (
    <div className="flex flex-col gap-4 outline outline-1 outline-slate-700 rounded-lg px-4 py-4 w-fit lg:w-1/2 ">
      <h1 className="text-lg ">Lorem Ipsum Setup</h1>
      <hr className="border-white" />
      <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-4">
        <TextInput
          name="max_length"
          label="Letters"
          value={textParams.max_length}
          callbackOnChange={(e) => handleInputChange(e)}
          disabled={textParams.paragraphs !== ""}
          valueButtons={["60", "500", "1000"]}
          valueButtonsCallback={(name: string, value: string) => handleButtonValueClick(name, value)}
        />
        <TextInput name="paragraphs" label="Paragraphs" value={textParams.paragraphs} callbackOnChange={(e) => handleInputChange(e)} valueButtons={["", "3", "5"]} valueButtonsCallback={(name: string, value: string) => handleButtonValueClick(name, value)} />
        <CheckboxInput name="start_with_lorem_ipsum" label="Start with Lorem" checked={textParams.start_with_lorem_ipsum} callback={(e) => handleInputChange(e)} />
        <CheckboxInput name="random" label="Random" checked={textParams.random} callback={(e) => handleInputChange(e)} />
        <Button type="submit" variant="secondary">
          Generate
        </Button>
      </form>
    </div>
  );
};

export default TextGeneratorForm;
