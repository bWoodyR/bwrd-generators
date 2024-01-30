import SingleTag from "./SingleTag";
import TagButtons from "./TagButtons";
import { useContext, useState } from "react";
import { TTag } from "@/types/TagType";
import { FaCircleInfo } from "react-icons/fa6";
import { AppContext } from "@/services/Context/AppProvider";
import { useGeneratorsTags } from "@/services/api/useGenerators";
import { toast } from "../ui/use-toast";

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
          {isCreatingCustomList && (
            <>
              <div className="mt-2 py-2 text-xl bg-slate-700  px-4 rounded-lg flex flex-col gap-2 lg:w-fit">
                <p className="flex items-center gap-4">
                  <FaCircleInfo /> {state.lang.langFile.selectTagsPrompt}
                </p>
                <p className="text-sm text-slate-400">{state.lang.langFile.tagsAddedToClipboard}</p>
              </div>
            </>
          )}
          <div className="flex flex-col my-2 gap-4 outline outline-1 outline-slate-500 p-2 rounded-lg lg:w-fit">
            {tags &&
              tags.map((tag) => {
                return <SingleTag key={tag._id} tagData={tag} isCreatingCustomList={isCreatingCustomList} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />;
              })}
          </div>
        </>
      ) : (
        <>
          <p className="flex justify-center font-medium ">{state.lang.langFile.noPermission}</p>
        </>
      )}
    </section>
  );
};

export default Tags;
