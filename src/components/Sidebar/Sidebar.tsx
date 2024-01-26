import SidebarHeader from "./SidebarHeader";
import SidebarButtons from "./SidebarButtons";
import SidebarUser from "./SidebarUser";
import { useState } from "react";

const Sidebar = () => {
  const [showFulSidebar, setShowFullSidebar] = useState(false);
  return (
    <nav className={`fixed z-10 grid grid-rows-[auto,1fr,auto] justify-center gap-8 border-r-2 border-white bg-[#09090b] min-h-dvh px-4 py-4 ${showFulSidebar ? "w-[250px]" : "w-[75px]"} md:w-[250px] transition-all`}>
      <SidebarHeader showFulSidebar={showFulSidebar} setShowFullSidebar={setShowFullSidebar} />
      <SidebarButtons showFulSidebar={showFulSidebar} />
      <SidebarUser />
    </nav>
  );
};

export default Sidebar;
