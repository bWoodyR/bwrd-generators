import { FaCalendarAlt, FaRandom, FaTextWidth, FaUserClock } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const sidebarButtons = [
  {
    path: "/generators",
    name: "Home",
    icon: <FaRandom />,
  },
  {
    path: "text-generator",
    name: "Text Generator",
    icon: <FaTextWidth />,
  },
  {
    path: "birth-number",
    name: "Birth Number",
    icon: <FaCalendarAlt />,
  },
  {
    path: "time-report",
    name: "Time Report",
    icon: <FaUserClock />,
  },
  {
    path: "settings",
    name: "Settings",
    icon: <FaGear />,
  },
];

type SidebarButtonsProps = {
  showFulSidebar: boolean;
};

const SidebarButtons = ({ showFulSidebar }: SidebarButtonsProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {sidebarButtons.map((nav) => {
        return (
          <Link key={nav.path} to={nav.path} className={`flex items-center ${showFulSidebar ? "justify-start" : "justify-center"}  gap-4 w-full p-2 text-white text-lg md:justify-start hover:bg-slate-600 rounded-lg `}>
            <span className="flex items-center justify-center text-2xl md:text-xl">{nav.icon}</span> <span className={`${showFulSidebar ? "block" : "hidden"} md:block`}>{nav.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarButtons;
