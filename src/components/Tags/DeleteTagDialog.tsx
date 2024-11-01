import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useDeleteTag } from "@/services/api/useGenerators";
import { useContext, useState } from "react";
// import { DialogClose } from "@radix-ui/react-dialog";
import { AppContext } from "@/services/Context/AppProvider";
import { TTag } from "@/types/TagType";

type Props = {
  children: React.ReactNode;
  tagData: TTag;
};

const DeleteTagDialog = ({ children, tagData }: Props) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useDeleteTag();
  const { state } = useContext(AppContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ ...tagData });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {tagData.text} - {state.lang.langFile.urlUDeleteDialog[0]}
          </DialogTitle>
          <DialogDescription>{state.lang.langFile.urlUDeleteDialog[1]}</DialogDescription>
        </DialogHeader>
        <hr />
        <form className="flex flex-col gap-4" onSubmit={(e) => handleFormSubmit(e)}>
          <Button type="submit" variant={"destructive"} className="tracking-wider">
            {state.lang.langFile.urlUDeleteDialog[2]}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteTagDialog;
