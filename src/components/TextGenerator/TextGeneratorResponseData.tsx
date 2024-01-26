import { Button } from "../ui/button";

type TextGeneratorDataProps = {
  text: string;
};

const TextGeneratorData = ({ text }: TextGeneratorDataProps) => {
  const textWithSpaces = text.replace(/\n/g, "\n\n");

  return (
    <div className="flex flex-col gap-4 whitespace-pre-wrap  outline outline-1 outline-slate-700 rounded-lg px-4 py-4 lg:w-1/2">
      {text && (
        <div className="flex flex-col gap-4">
          <div className="flex gap-4  w-full justify-center items-center md:justify-start md:items-start">
            <Button variant="secondary" onClick={() => navigator.clipboard.writeText(textWithSpaces)}>
              Copy Text
            </Button>
          </div>
          {textWithSpaces}
        </div>
      )}
    </div>
  );
};

export default TextGeneratorData;
