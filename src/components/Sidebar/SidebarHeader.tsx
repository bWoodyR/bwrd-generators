import { FaBars, FaTimes } from "react-icons/fa";

type SidebarHeaderProps = {
  showFulSidebar: boolean;
  setShowFullSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarHeader = ({ showFulSidebar, setShowFullSidebar }: SidebarHeaderProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center md:gap-0">
      {showFulSidebar ? <FaTimes className="text-2xl rounded-lg md:hidden md:text-xl" onClick={() => setShowFullSidebar(false)} /> : <FaBars className="text-2xl rounded-lg md:hidden md:text-xl" onClick={() => setShowFullSidebar(true)} />}
      <h2 className="font-extrabold text-xl text-blue-500">G</h2>
      <p className="text-gray-600 text-sm">v0.0.1</p>
    </div>
  );
};

export default SidebarHeader;
