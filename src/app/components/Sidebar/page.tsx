import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState("Dashboard"); // Default active item

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (itemName:any) => {
    setActiveItem(itemName);
    // Add logic for navigation or other actions based on the clicked item
  };

  interface MenuItem {
    path: string;
    name: string;
    icon: React.ElementType;
  }

  const data: MenuItem[] = [
    { path: "#", name: "Dashboard", icon: HiChartPie },
    { path: "#", name: "Kanban", icon: HiViewBoards },
    { path: "#", name: "Inbox", icon: HiInbox },
    { path: "#", name: "Users", icon: HiUser },
    { path: "#", name: "Products", icon: HiShoppingBag },
  ];

  return (
    <div className='bg-teal-600 p-2' style={{ width: isSidebarOpen ? '220px' : '55px', transition: 'width 0.4s ease-out' }}>
      <button onClick={toggleSidebar} className='ml-2'><FaMobileScreenButton /></button>
      {!isSidebarOpen &&(
        <div className='mt-10'>
        {data.map((item, index) => (
          <div key={index} className={`p-2 mt-3 rounded-lg  hover:bg-white cursor-pointer ${activeItem === item.name ? 'bg-white text-red-500' : ''}`} onClick={() => handleItemClick(item.name)}>
            <div>
                <div className='mr-3'><item.icon size={24} /></div>
            </div>
          </div>
        ))}
      </div>
      )}
      {isSidebarOpen && (
        <div className='mt-10'>
          {data.map((item, index) => (
            <div key={index} className={`p-2 mt-3 rounded-lg  hover:bg-white hover:text-black cursor-pointer ${activeItem === item.name ? 'bg-white text-black' : ''}`} onClick={() => handleItemClick(item.name)}>
              <div>
                <div className='flex flex-row'>
                  <div className='mr-3'><item.icon size={24} /></div>
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Component;
