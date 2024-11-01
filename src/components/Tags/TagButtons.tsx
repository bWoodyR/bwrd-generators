import { TTag } from "@/types/TagType";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import AddTagDialog from "./AddTagDialog";

type TagButtonsProps = {
  isCreatingCustomList: boolean;
  setIsCreatingCustomList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: TTag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<TTag[]>>;
  callbackCopyAllTags: () => void;
};

const TagButtons = ({ isCreatingCustomList, setIsCreatingCustomList, setSelectedTags, selectedTags, callbackCopyAllTags }: TagButtonsProps) => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex gap-4 flex-wrap">
      <Button variant={"secondary"} disabled={isCreatingCustomList} onClick={() => callbackCopyAllTags()}>
        {state.lang.langFile.copyAllLinksButton}
      </Button>
      <Button variant={"secondary"} onClick={() => setIsCreatingCustomList(!isCreatingCustomList)}>
        {isCreatingCustomList ? `${state.lang.langFile.stopCreatingListButton}` : `${state.lang.langFile.createListButton}`}
      </Button>
      <Button variant={"destructive"} disabled={!isCreatingCustomList || selectedTags.length === 0} onClick={() => setSelectedTags([])}>
        {state.lang.langFile.deleteTagsFromListButton}
      </Button>
      <AddTagDialog>        
      <Button variant={"secondary"}>
        {state.lang.langFile.addNewTag}
      </Button>
      </AddTagDialog>
    </div>
  );
};

export default TagButtons;
