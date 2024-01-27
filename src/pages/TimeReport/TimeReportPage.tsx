import { TIssue } from "@/types/IssueTypes";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/services/Context/AppProvider";
import { getIssuesFromLocalStorage } from "@/helpers/timeReportFunctions";
import TimeReportForm from "@/components/TimeReport/TimeReportForm";
import TimeReportTable from "@/components/TimeReport/TimeReportTable";

const TimeReport = () => {
  const { state } = useContext(AppContext);
  const lang = state.lang.langFile;
  const [issueList, setIssueList] = useState<TIssue[]>(getIssuesFromLocalStorage());
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    localStorage.setItem("issueList", JSON.stringify(issueList));
    setTotalTime(issueList.reduce((sum, num) => sum + Number(num.time), 0));
  }, [issueList]);

  return (
    <section className="py-2 m-2 outline outline-1 outline-slate-700 rounded-lg md:w-fit md:ml-4 ">
      <h1 className="text-lg p-2 font-medium mb-2">{lang.timeReport}</h1>
      <TimeReportForm setIssueList={setIssueList} />
      <div>
        <TimeReportTable issueList={issueList} setIssueList={setIssueList} totalTime={totalTime} />
      </div>
    </section>
  );
};

export default TimeReport;
