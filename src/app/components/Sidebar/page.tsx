'use client'
import { createContext, useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxDashboard } from "react-icons/rx";
import { MdAccountBox } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiSkipLeftLine } from "react-icons/ri";
import { MdDynamicFeed } from "react-icons/md";

// Declare the type of the context value
interface SidebarContextType {
  expanded: boolean;
  activePath: string; // Add activePath to store the active path
  setActivePath: (path: string) => void; // Add setActivePath to update active path
}

// Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [activePath, setActivePath] = useState(""); // State to track active path
  // Get the current path name

  // Data object with icons and paths
  const menuItems = [
    {
      text: "Dashboard", icon: <RxDashboard size={22} />
      , path: "/profile/dashboard"
    },
    { text: "Feed", icon: <MdDynamicFeed size={22} />, path: "/profile/feed" },
    {
      text: "Account", icon: <MdAccountBox size={22} />
      , path: "/profile/account"
    },
    // Add more items as needed
  ];

  return (
    <SidebarContext.Provider value={{ expanded, activePath, setActivePath }}>
      <aside className={`h-screen`}>
        <nav className="h-full flex flex-col bg-teal-600 border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center ">
            <button onClick={() => setExpanded((curr) => !curr)} className="px-3 py-1 rounded-full bg-neutral-200">
              {expanded ? <RiSkipLeftLine size={18} />
                : <AiOutlineMenuUnfold size={18}/>
              }
            </button>
          </div>
          <div className="mt-5">

            <ul className="flex-1 px-3 space-y-3">
              {/* Render SidebarItems based on the menuItems data */}
              {menuItems.map((item, index) => (
                <SidebarItem key={index} text={item.text} icon={item.icon} path={item.path} />
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}

// Define the SidebarItem component
export function SidebarItem({ icon, text, path }: { icon: JSX.Element; text: string; path: string }) {
  const { expanded, activePath, setActivePath } = useContext(SidebarContext) as SidebarContextType;
  const pathname = usePathname();
  const isActive = pathname === path;

  const handleClick = () => {
    setActivePath(path); // Update active path on click
  };

  return (
    <div>

      <li>
        <Link href={path} passHref
          className="flex items-center">
          <div className={`relative flex items-center py-2 px-3 font-medium rounded-md cursor-pointer transition-colors group hover:bg-black text-white ${isActive ? "bg-black text-white" : ""}`} onClick={handleClick}>
            <div className={expanded ? "mr-2" : ""}>{icon}</div>
            <div className={`overflow-hidden transition-all ${expanded ? "w-[130px] ml-1 animate-slideIn" : "w-0 animate-slideOut"}`}>
              {text}
            </div>

          </div>
        </Link>
      </li>
    </div>
  );
}
