import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { TIssue } from "@/types/IssueTypes";
import { useContext, useEffect, useState } from "react";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { EditDialogModal } from "../../components/TimeReport/EditDialogModal";
import { AppContext } from "@/services/Context/AppProvider";

const issueInitState: TIssue = { issueId: "", note: "", time: 0 };

const getIssuesFromLocalStorage = () => {
  let issues = [] as TIssue[];
  if (localStorage.getItem("issueList")) {
    const tempArr = localStorage.getItem("issueList") || "[]";
    issues = JSON.parse(tempArr);
  }
  return issues;
};

const TimeReport = () => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;
  const [newIssue, setNewIssue] = useState(issueInitState);
  const [editedIssue, setEditedIssue] = useState(issueInitState);
  const [issueList, setIssueList] = useState<TIssue[]>(getIssuesFromLocalStorage());
  const [totalTime, setTotalTime] = useState(0);

  console.log();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewIssue({ ...newIssue, [e.target.name]: e.target.value });
  };

  const addIssue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newIssue.issueId && newIssue.time) {
      setIssueList((prevArr) => [...prevArr, newIssue]);
      setNewIssue(issueInitState);
    }
  };

  const deleteIssue = (id: string) => {
    setIssueList((prevArr) => prevArr.filter((issue) => issue.issueId !== id));
  };

  const deleteAllIssues = () => {
    setIssueList([]);
  };

  const editIssue = (updatedIssue: TIssue) => {
    const updatedList = issueList.map((issue) => {
      if (issue.issueId === updatedIssue.issueId) {
        return updatedIssue;
      } else return issue;
    });
    setIssueList(updatedList);
    setEditedIssue(issueInitState);
  };

  useEffect(() => {
    localStorage.setItem("issueList", JSON.stringify(issueList));
    setTotalTime(issueList.reduce((sum, num) => sum + Number(num.time), 0));
  }, [issueList]);

  return (
    <section className="w-fit outline outline-1 outline-slate-700 rounded-lg ml-2 md:ml-4 py-2">
      <form onSubmit={(e) => addIssue(e)} className="flex flex-col lg:flex-row gap-4 px-4 w-full mb-6">
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
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{lang.issue}</TableHead>
              <TableHead>{lang.time}</TableHead>
              <TableHead>{lang.note}</TableHead>
              <TableHead>{lang.action}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issueList.map((issue) => {
              return (
                <TableRow key={issue.issueId}>
                  <TableCell className="font-medium">{issue.issueId}</TableCell>
                  <TableCell>{issue.time}</TableCell>
                  <TableCell>{issue.note}</TableCell>
                  <TableCell className="flex gap-2">
                    <EditDialogModal editedIssue={editedIssue} setEditedIssue={setEditedIssue} callback={(updatedIssue: TIssue) => editIssue(updatedIssue)}>
                      <Button className="m-0 p-0 flex items-center justify-center h-fit" variant={"ghost"} onClick={() => setEditedIssue(issue)}>
                        <FaPenToSquare className="text-lg hover:cursor-pointer" />
                      </Button>
                    </EditDialogModal>
                    <FaTrashCan onClick={() => deleteIssue(issue.issueId)} className="text-red-600 text-lg hover:cursor-pointer" />
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow className="text-slate-600 font-bold tracking-wider">
              <TableCell>{lang.totalTime}</TableCell>
              <TableCell>{totalTime.toFixed(2)}</TableCell>
              <TableCell></TableCell>
              <TableCell>
                {issueList.length !== 0 && (
                  <Button variant={"destructive"} className="h-5" disabled={issueList.length === 0} onClick={() => deleteAllIssues()}>
                    {lang.clear}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableCaption>{lang.time_report_list_of_current_issues}</TableCaption>
        </Table>
      </div>
    </section>
  );
};

export default TimeReport;
