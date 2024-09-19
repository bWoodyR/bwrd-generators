import { TTag } from "@/types/TagType";
import { toast } from "../ui/use-toast";
import { useContext } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import { FaCopy, FaPen } from "react-icons/fa6";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import UpdateTagDialog from "./UpdateTagDialog";

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
    <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-center gap-4 overflow-hidden outline outline-1 outline-slate-500 p-2 rounded-lg">
      <p key={tagData._id} onClick={handleTagClick} className={` hover:text-blue-500 ${isCreatingCustomList ? "hover: cursor-pointer" : null} ${isTagSelected() ? "outline-blue-500 text-blue-500" : null}`}>
        <span className="font-medium">{tagData.text}</span> - <span>{tagData.url}</span>
      </p>
      <ToggleGroup type="single" variant="outline" size={"sm"}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ToggleGroupItem value="copy" onClick={() => navigator.clipboard.writeText(`${tagData.text} - ${tagData.url}`)}>
                <FaCopy />
              </ToggleGroupItem>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <UpdateTagDialog tagData={tagData}>
          <ToggleGroupItem value="edit">
            <FaPen />
          </ToggleGroupItem>
        </UpdateTagDialog>
      </ToggleGroup>
    </div>
  );
};

export default SingleTag;
