import { AppContext } from "@/services/Context/AppProvider";
import { useUser } from "@clerk/clerk-react";
import { useContext } from "react";

const GeneratorsPage = () => {
  const { state } = useContext(AppContext);
  const { user } = useUser();

  // const welcomePageParagraphs = state.lang.langFile.welcomePageParagraphs as string[];

  return (
    <section className=" m-2 p-4 text-gray-100 outline outline-1 outline-slate-700 rounded-lg text-balance">
      <h1 className="text-4xl font-bold mb-4">
        {state.lang.langFile.hello} {user?.firstName}
      </h1>
      {/* <h3 className="text-3xl font-medium mb-4 text-balance">{state.lang.langFile.welcomePageTitle}</h3>
      <ul className="list-disc list-inside space-y-6">
        {welcomePageParagraphs.map((item, index) => {
          return (
            <li key={index} className="text-lg text-gray-300  rounded-md p-4 bg-gray-800 ">
              {item}
            </li>
          );
        })}
      </ul> */}
    </section>
  );
};

export default GeneratorsPage;
