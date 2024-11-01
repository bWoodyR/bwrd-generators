import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "../ui/button";
import { useAddTag } from "@/services/api/useGenerators";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import { Input } from "../ui/input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Inputs } from "@/types/TagType";

type Props = {
  children: React.ReactNode;
};

const AddTagDialog = ({ children }: Props) => {
  const { register, control, handleSubmit, reset, formState } = useForm<Inputs>({
    defaultValues: {
      category: "",
    },
  });
  const [open, setOpen] = useState(false);
  const { mutate } = useAddTag();
  const { state } = useContext(AppContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
    console.log(data);
    setOpen(false);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{state.lang.langFile.addTagDialog[0]}</DialogTitle>
          <DialogDescription>{state.lang.langFile.addTagDialog[1]}</DialogDescription>
        </DialogHeader>
        <hr />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="url">{state.lang.langFile.addTagDialog[2]}</label>
            <Input {...register("url")} required type="url" />
          </div>
          <div>
            <label htmlFor="text">{state.lang.langFile.addTagDialog[3]}</label>
            <Input {...register("text")} required type="text" />
          </div>
          <div>
            <label htmlFor="category">{state.lang.langFile.addTagDialog[4]}</label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ADMIN LINK">ADMIN LINK</SelectItem>
                      <SelectItem value="ANALYSIS">ANALYSIS</SelectItem>
                      <SelectItem value="TICKET">TICKET</SelectItem>
                      <SelectItem value="BLOG">BLOG</SelectItem>
                      <SelectItem value="BALANCE">BALANCE</SelectItem>
                      <SelectItem value="OTHER">OTHER</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            ></Controller>
          </div>

          <Button type="submit" variant={"secondary"} className="tracking-wider">
            {state.lang.langFile.addTagDialog[5]}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTagDialog;
