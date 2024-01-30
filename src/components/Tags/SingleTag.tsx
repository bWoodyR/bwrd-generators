import { TTag } from "@/types/TagType";
import { toast } from "../ui/use-toast";
import { useContext } from "react";
import { AppContext } from "@/services/Context/AppProvider";

type SingleTagProps = {
  tagData: TTag;
  isCreatingCustomList: boolean;
  selectedTags: TTag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<TTag[]>>;
};

const SingleTag = ({ tagData, isCreatingCustomList, selectedTags, setSelectedTags }: SingleTagProps) => {
  const { state } = useContext(AppContext);
  const handleTagClick = () => {
    if (isCreatingCustomList) {
      const newTagList = [...selectedTags, tagData];
      setSelectedTags(newTagList);
      toast({
        description: state.lang.langFile.tagAddedToClipboard,
      });
      navigator.clipboard.writeText(newTagList.map((tag) => `${tag.text}: ${tag.url}`).join("\n"));
    }
  };

  const isTagSelected = () => {
    return Boolean(selectedTags.find((tag) => tag._id === tagData._id) && isCreatingCustomList);
  };

  return (
    <p key={tagData._id} onClick={handleTagClick} className={`overflow-hidden outline outline-1 outline-slate-500 p-2 rounded-lg hover:text-blue-500 ${isCreatingCustomList ? "hover: cursor-pointer" : null} ${isTagSelected() ? "outline-blue-500 text-blue-500" : null}`}>
      <span className="font-medium">{tagData.text}</span> - <span>{tagData.url}</span>
    </p>
  );
};

export default SingleTag;
