import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useUpdateBalanceTag } from "@/services/api/useGenerators";
import { useContext, useState } from "react";
// import { DialogClose } from "@radix-ui/react-dialog";
import { AppContext } from "@/services/Context/AppProvider";

type Props = {
  isCreatingCustomList: boolean;
};

const BalanceTagDialog = ({ isCreatingCustomList }: Props) => {
  const [open, setOpen] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const { mutate } = useUpdateBalanceTag();
  const { state } = useContext(AppContext);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUrl) {
      mutate({ balanceUrl: newUrl });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} disabled={isCreatingCustomList}>
          {state.lang.langFile.updateBalanceUrlButton}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{state.lang.langFile.balanceUrlUpdateDialog[0]}</DialogTitle>
          <DialogDescription>{state.lang.langFile.balanceUrlUpdateDialog[1]}</DialogDescription>
        </DialogHeader>
        <hr />
        <form className="flex flex-col gap-2" onSubmit={(e) => handleFormSubmit(e)}>
          <label htmlFor="">{state.lang.langFile.balanceUrlUpdateDialog[2]}</label>
          <Input type="url" name="balanceUrl" id="balanceUrl" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
          {/* <DialogClose asChild> */}
          <Button type="submit" variant={"secondary"} className="tracking-wider">
            {state.lang.langFile.balanceUrlUpdateDialog[3]}
          </Button>
          {/* </DialogClose> */}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BalanceTagDialog;
