import { TTag } from "@/types/TagType";
import { Button } from "../ui/button";
import BalanceTagDialog from "./BalanceTagDialog";

type TagButtonsProps = {
  isCreatingCustomList: boolean;
  setIsCreatingCustomList: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: TTag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<TTag[]>>;
  callbackCopyAllTags: () => void;
};

const TagButtons = ({ isCreatingCustomList, setIsCreatingCustomList, setSelectedTags, selectedTags, callbackCopyAllTags }: TagButtonsProps) => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Button variant={"secondary"} disabled={isCreatingCustomList} onClick={() => callbackCopyAllTags()}>
        COPY ALL LINKS
      </Button>
      <Button variant={"secondary"} onClick={() => setIsCreatingCustomList(!isCreatingCustomList)}>
        {isCreatingCustomList ? "STOP CREATING LIST..." : "CREATE LIST"}
      </Button>
      <Button variant={"destructive"} disabled={!isCreatingCustomList || selectedTags.length === 0} onClick={() => setSelectedTags([])}>
        Delete selected tags from list
      </Button>
      <BalanceTagDialog isCreatingCustomList={isCreatingCustomList} />
    </div>
  );
};

export default TagButtons;
