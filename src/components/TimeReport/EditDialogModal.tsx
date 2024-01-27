import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TIssue } from "@/types/IssueTypes";
import { DialogClose } from "@radix-ui/react-dialog";

type DialogDemoProps = {
  children: React.ReactNode;
  editedIssue: TIssue;
  setEditedIssue: React.Dispatch<React.SetStateAction<TIssue>>;
  callback: (updatedIssue: TIssue) => void;
};

export function EditDialogModal({ children, editedIssue, setEditedIssue, callback }: DialogDemoProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedIssue({ ...editedIssue, [e.target.name]: e.target.value });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Issue</DialogTitle>
          <DialogDescription>Make changes to your selected issue here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col justify-start gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Issue
            </Label>
            <Input id="issueId" name="issueId" value={editedIssue.issueId} onChange={(e) => handleInputChange(e)} className="col-span-3" disabled />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Time
            </Label>
            <Input type="number" id="time" min={0} step={0.01} name="time" value={editedIssue.time} onChange={(e) => handleInputChange(e)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Note
            </Label>
            <Input id="note" name="note" value={editedIssue.note} onChange={(e) => handleInputChange(e)} className="col-span-3" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" disabled={editedIssue.time <= 0} onClick={() => callback(editedIssue)}>
                Save changes
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
