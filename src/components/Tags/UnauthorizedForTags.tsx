import { AppContext } from "@/services/Context/AppProvider";
import { useContext } from "react";

const UnauthorizedForTags = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <p className="flex justify-center font-medium ">{state.lang.langFile.noPermission}</p>
    </>
  );
};

export default UnauthorizedForTags;
