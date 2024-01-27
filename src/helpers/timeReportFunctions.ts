import { TIssue } from "@/types/IssueTypes";

export const issueInitState: TIssue = { issueId: "", note: "", time: 0 };


export const getIssuesFromLocalStorage = () => {
  let issues = [] as TIssue[];
  if (localStorage.getItem("issueList")) {
    const tempArr = localStorage.getItem("issueList") || "[]";
    issues = JSON.parse(tempArr);
  }
  return issues;
};