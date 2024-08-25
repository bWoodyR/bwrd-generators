import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useUpdateBalanceTag } from "@/services/api/useGenerators";
import { useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  isCreatingCustomList: boolean;
};

const BalanceTagDialog = ({ isCreatingCustomList }: Props) => {
  const [newUrl, setNewUrl] = useState("");
  const { mutate } = useUpdateBalanceTag();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newUrl) mutate({ balanceUrl: newUrl });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} disabled={isCreatingCustomList}>
          Update Balance URL
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Balance URL update</DialogTitle>
          <DialogDescription>This action will update balance link for all users.</DialogDescription>
        </DialogHeader>
        <hr />
        <form className="flex flex-col gap-2" onSubmit={(e) => handleFormSubmit(e)}>
          <label htmlFor="">New Balance URL</label>
          <Input type="url" name="balanceUrl" id="balanceUrl" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
          <DialogClose asChild>
            <Button type="submit" variant={"secondary"} className="tracking-wider">
              UPDATE
            </Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BalanceTagDialog;
