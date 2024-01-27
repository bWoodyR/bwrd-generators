import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { EditDialogModal } from "../../components/TimeReport/EditDialogModal";
import { toast } from "../ui/use-toast";
import { useContext, useState } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import { issueInitState } from "@/helpers/timeReportFunctions";
import { TIssue } from "@/types/IssueTypes";

type TimeReportTableProps = {
  issueList: TIssue[];
  setIssueList: React.Dispatch<React.SetStateAction<TIssue[]>>;
  totalTime: number;
};

const TimeReportTable = ({ setIssueList, issueList, totalTime }: TimeReportTableProps) => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;
  const [editedIssue, setEditedIssue] = useState(issueInitState);

  const deleteIssue = (id: string) => {
    setIssueList((prevArr) => prevArr.filter((issue) => issue.issueId !== id));
    toast({
      description: lang.time_report_issue_deleted,
    });
  };

  const deleteAllIssues = () => {
    setIssueList([]);
    toast({
      description: lang.time_report_all_issue_deleted,
    });
  };

  const editIssue = (updatedIssue: TIssue) => {
    const updatedList = issueList.map((issue) => {
      if (issue.issueId === updatedIssue.issueId) {
        return updatedIssue;
      } else return issue;
    });
    setIssueList(updatedList);
    setEditedIssue(issueInitState);
    toast({
      description: lang.time_report_issue_edited,
    });
  };

  return (
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
              <TableCell className="font-medium">
                <a href={`https://jira.tipsport.it/browse/${issue.issueId}`}>{issue.issueId}</a>
              </TableCell>
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
  );
};

export default TimeReportTable;
