import { useContext } from "react";
import { Button } from "../ui/button";
import { AppContext } from "@/services/Context/AppProvider";

type TextGeneratorDataProps = {
  text: string;
};

const TextGeneratorResponseData = ({ text }: TextGeneratorDataProps) => {
  const { state } = useContext(AppContext);
  const textWithSpaces = text.replace(/\n/g, "\n\n");

  return (
    <div className="flex flex-col gap-4 whitespace-pre-wrap  outline outline-1 outline-slate-700 rounded-lg px-4 py-4 lg:w-1/2">
      {text && (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4  w-full justify-center items-center md:justify-start md:items-start">
            <Button variant="secondary" onClick={() => navigator.clipboard.writeText(textWithSpaces)}>
              {state.lang.langFile.copyText}
            </Button>
          </div>
          {textWithSpaces}
        </div>
      )}
    </div>
  );
};

export default TextGeneratorResponseData;
