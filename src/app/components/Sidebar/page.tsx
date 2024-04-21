'use client'
// Import necessary modules and components
import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState } from "react";
import Link from "next/link";

// Declare the type of the context value
interface SidebarContextType {
  expanded: boolean;
  activePath: string; // Add activePath to store the active path
  setActivePath: (path: string) => void; // Add setActivePath to update active path
}

// Create the context
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [activePath, setActivePath] = useState(""); // State to track active path

  // Data object with icons and paths
  const menuItems = [
    { text: "Dashboard", icon: <ChevronFirst />, path: "/profile/dashboard" },
    { text: "Feed", icon: <ChevronLast />, path: "/profile/feed" },
    { text: "Account", icon: <ChevronLast />, path: "/profile/account" },
    // Add more items as needed
  ];

  return (
    <SidebarContext.Provider value={{ expanded, activePath, setActivePath }}>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-teal-600 border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <ul className="flex-1 px-3">
            {/* Render SidebarItems based on the menuItems data */}
            {menuItems.map((item, index) => (
              <SidebarItem key={index} text={item.text} icon={item.icon} path={item.path} />
            ))}
          </ul>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}

// Define the SidebarItem component
export function SidebarItem({ icon, text, path }: { icon: JSX.Element; text: string; path: string }) {
  const { expanded, activePath, setActivePath } = useContext(SidebarContext) as SidebarContextType;
  const isActive = activePath === path;

  const handleClick = () => {
    setActivePath(path); // Update active path on click
  };

  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600 ${isActive ? "bg-indigo-100 text-indigo-800" : ""}`} onClick={handleClick}>
      <Link href={path} passHref
        className="flex items-center">
          {icon}
          <span className={`overflow-hidden transition-all ${expanded ? "w-[150px] ml-1" : "w-0"}`}>{text}</span>
      </Link>
    </li>
  );
}
