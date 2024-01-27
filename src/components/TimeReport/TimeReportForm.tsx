import { issueInitState } from "@/helpers/timeReportFunctions";
import { AppContext } from "@/services/Context/AppProvider";
import { useContext, useState } from "react";
import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TIssue } from "@/types/IssueTypes";

type TimeReportFormProps = {
  setIssueList: React.Dispatch<React.SetStateAction<TIssue[]>>;
};

const TimeReportForm = ({ setIssueList }: TimeReportFormProps) => {
  const [newIssue, setNewIssue] = useState(issueInitState);
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
  };

  const addIssue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newIssue.issueId && newIssue.time) {
      setIssueList((prevArr) => [...prevArr, newIssue]);
      setNewIssue(issueInitState);
      toast({
        description: lang.time_report_issue_added,
      });
    }
  };

  return (
    <form onSubmit={(e) => addIssue(e)} className="flex flex-col lg:flex-row gap-4 px-4 mb-6 ">
      <div className="flex items-center gap-2">
        <label htmlFor="issueId">{lang.issue}</label>
        <Input type="text" className="w-[150px]" name="issueId" id="issueId" value={newIssue.issueId} onChange={(e) => handleInputChange(e)}></Input>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">{lang.time}</label>
        <Input type="number" className="w-[75px]" min={0} step={0.01} name="time" id="time" value={newIssue.time === 0 ? "" : newIssue.time} onChange={(e) => handleInputChange(e)}></Input>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="">{lang.note}</label>
        <Input type="text" className="w-[225px]" name="note" id="note" value={newIssue.note} onChange={(e) => handleInputChange(e)}></Input>
      </div>
      <Button variant="secondary" className="w-full">
        {lang.submit}
      </Button>
    </form>
  );
};

export default TimeReportForm;
