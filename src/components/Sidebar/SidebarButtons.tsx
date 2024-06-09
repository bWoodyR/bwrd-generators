import { AppContext } from "@/services/Context/AppProvider";
import { useContext } from "react";
import { FaCalendarAlt, FaHashtag, FaHome, FaTextWidth, FaUserClock } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const sidebarButtons = [
  {
    path: "/generators",
    name: {
      en: "Home",
      sk: "Domov",
      cz: "Domů",
    },
    icon: <FaHome />,
  },
  {
    path: "text-generator",
    name: {
      en: "Text Generator",
      sk: "Text Generátor",
      cz: "Text Generátor",
    },
    icon: <FaTextWidth />,
  },
  {
    path: "birth-number",
    name: {
      en: "Birth Number",
      sk: "Rodné číslo",
      cz: "Rodné číslo",
    },
    icon: <FaCalendarAlt />,
  },
  {
    path: "tags",
    name: {
      en: "Tags",
      sk: "Skrátené odkazy",
      cz: "Zkrácené odkazy",
    },
    icon: <FaHashtag />,
  },
  {
    path: "time-report",
    name: {
      en: "Time Report",
      sk: "Report času",
      cz: "Report času",
    },
    icon: <FaUserClock />,
  },
  {
    path: "settings",
    name: {
      en: "Settings",
      sk: "Nastavenia",
      cz: "Nastavení",
    },
    icon: <FaGear />,
  },
];

type SidebarButtonsProps = {
  showFulSidebar: boolean;
};

const SidebarButtons = ({ showFulSidebar }: SidebarButtonsProps) => {
  const { state } = useContext(AppContext);
  const location = useLocation();
  const currentSection = location.pathname.split("/")[2];
  return (
    <div className="w-full flex flex-col gap-2">
      {sidebarButtons.map((nav) => {
        return (
          <Link
            key={nav.path}
            to={nav.path}
            className={`flex items-center ${showFulSidebar ? "justify-start" : "justify-center"}  gap-4 w-full p-2 text-white text-lg ${
              currentSection === nav.path || (currentSection === undefined && nav.path === "/generators") ? "bg-slate-600" : null
            } md:justify-start hover:bg-slate-600 rounded-lg `}
          >
            <span className="flex items-center justify-center text-2xl md:text-xl">{nav.icon}</span> <span className={`${showFulSidebar ? "block" : "hidden"} md:block`}>{nav.name[state.lang.language]}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarButtons;
