import SingleTag from "./SingleTag";
import TagButtons from "./TagButtons";
import { useContext, useState } from "react";
import { TTag } from "@/types/TagType";
import { AppContext } from "@/services/Context/AppProvider";
import { useGeneratorsTags } from "@/services/api/useGenerators";
import { toast } from "../ui/use-toast";
import CustomTagListInfo from "./CustomTagListInfo";
import UnauthorizedForTags from "./UnauthorizedForTags";

const Tags = () => {
  const [isCreatingCustomList, setIsCreatingCustomList] = useState(false);
  const [selectedTags, setSelectedTags] = useState<TTag[]>([]);
  const { state } = useContext(AppContext);
  const { data: tags } = useGeneratorsTags();

  const copyAllTags = () => {
    const tagsToCopy = tags?.map((tag) => `${tag.text}: ${tag.url}`) || [];
    navigator.clipboard.writeText(tagsToCopy.join("\n"));
    toast({
      description: state.lang.langFile.allTagsAddedToClipboard,
    });
  };

  return (
    <section className="mx-4 flex flex-col gap-4 ">
      {state.user?.isTipsport ? (
        <>
          <TagButtons isCreatingCustomList={isCreatingCustomList} setIsCreatingCustomList={setIsCreatingCustomList} selectedTags={selectedTags} setSelectedTags={setSelectedTags} callbackCopyAllTags={() => copyAllTags()} />
          {isCreatingCustomList && <CustomTagListInfo />}
          <div className="flex flex-col my-2 gap-4 outline outline-1 outline-slate-500 p-2 rounded-lg lg:w-fit">
            {tags &&
              tags.map((tag) => {
                return <SingleTag key={tag._id} tagData={tag} isCreatingCustomList={isCreatingCustomList} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />;
              })}
          </div>
        </>
      ) : (
        <UnauthorizedForTags />
      )}
    </section>
  );
};

export default Tags;
