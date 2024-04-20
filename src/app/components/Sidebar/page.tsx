'use client'
// Import icons with correct paths
import React, { useState } from 'react';
import { FaMobileScreenButton } from 'react-icons/fa6';
import { HiChartPie, HiOutlineNewspaper, HiViewBoards } from 'react-icons/hi';
import Link from 'next/link';

// Declare the type of the menuItems prop
interface Props {
  menuItems: MenuItem[];
}

function Component({ menuItems }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard'); // Default active item

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    // Add logic for navigation or other actions based on the clicked item
  };

  interface MenuItem {
    path: string;
    name: string;
    icon: React.ElementType;
  }

  // Use the menuItems prop directly, no need to redefine data inside the component
  return (
    <div className='bg-teal-600 p-2' style={{ width: isSidebarOpen ? '220px' : '55px', transition: 'width 0.4s ease-out' }}>
      <button onClick={toggleSidebar} className='ml-2'><FaMobileScreenButton /></button>
      {!isSidebarOpen && (
        <div className='mt-10'>
          {menuItems.map((item, index) => (
            <div key={index} className={`p-2 mt-3 rounded-lg  hover:bg-white cursor-pointer ${activeItem === item.name ? 'bg-white text-red-500' : ''}`} onClick={() => handleItemClick(item.name)}>
              <Link href={item.path}>
                <div className='mr-3'><item.icon size={24} /></div>
              </Link>
            </div>
          ))}
        </div>
      )}
      {isSidebarOpen && (
        <div className='mt-10'>
          {menuItems.map((item, index) => (
            <div key={index} className={`p-2 mt-3 rounded-lg  hover:bg-white hover:text-black cursor-pointer ${activeItem === item.name ? 'bg-white text-black' : ''}`} onClick={() => handleItemClick(item.name)}>
              <Link href={item.path}>
                <div className='flex flex-row'>
                  <div className='mr-3'><item.icon size={24} /></div>
                  {item.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Component;
