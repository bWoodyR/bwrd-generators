import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useAddTag } from "@/services/api/useGenerators";
import { useContext, useState } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import { TTag } from "@/types/TagType";

type Props = {
  children: React.ReactNode;
};

const AddTagDialog = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const { mutate } = useAddTag();
  const { state } = useContext(AppContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // mutate();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
           {/* {state.lang.langFile.addTagDialog[0]} */}
          </DialogTitle>
          {/* <DialogDescription>{state.lang.langFile.addTagDialog[1]}</DialogDescription> */}
        </DialogHeader>
        <hr />
        <form className="flex flex-col gap-4" onSubmit={(e) => handleFormSubmit(e)}>
          <Button type="submit" variant={"destructive"} className="tracking-wider">
            {/* {state.lang.langFile.addTagDialog[2]} */}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTagDialog;
