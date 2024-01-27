import TextGeneratorSkeleton from "@/components/ui/SkeletonGroup";
import TextGeneratorForm from "@/components/TextGenerator/TextGeneratorForm";
import TextGeneratorResponseData from "@/components/TextGenerator/TextGeneratorResponseData";
import { useTextGenerator } from "@/services/api/useTextGenerator";
import { useState } from "react";
import { TTextGeneratorData } from "@/types/textGeneratorTypes";

const TextGeneratorPage = () => {
  const [textParams, setTextParams] = useState<TTextGeneratorData>({ max_length: "1000", paragraphs: "", start_with_lorem_ipsum: false, random: true });
  const { data, refetch, isFetching } = useTextGenerator(textParams);

  const generateText = () => {
    refetch();
  };

  return (
    <section className="flex flex-col gap-4 px-4 mt-2 mb-4">
      <TextGeneratorForm textParams={textParams} setTextParams={setTextParams} callback={() => generateText()} />
      {data && !isFetching && <TextGeneratorResponseData text={data.text} />}
      {isFetching && <TextGeneratorSkeleton />}
    </section>
  );
};

export default TextGeneratorPage;
