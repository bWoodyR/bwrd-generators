import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type TSelectableData = {
  value: string;
  label: string | string[];
};

type SettingsSelectBoxProps = {
  sectionName: string;
  selectableData: TSelectableData[];
  callback: (langValue: string) => void;
  disabled?: boolean;
};

const SettingsSelectBox = ({ sectionName, selectableData, callback, disabled = false }: SettingsSelectBoxProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm font-medium">{sectionName}</p>
      <Select onValueChange={(langValue) => callback(langValue)} defaultValue={selectableData[0].value} disabled={disabled}>
        <SelectTrigger className="">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 ">
          {selectableData.map((item) => {
            return (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SettingsSelectBox;
