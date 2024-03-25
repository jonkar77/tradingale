import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { FaAlignRight } from 'react-icons/fa6';

function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='bg-teal-600 p-2'>
      <button onClick={toggleSidebar} className='text-white'><FaAlignRight /></button>
      {isSidebarOpen && (
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <div className='w-[250px]'>
            <Sidebar.ItemGroup>
            <div className="mt-2">
                <Sidebar.Item href="#" icon={HiChartPie} iconColor="teal-100">
                  Dashboard
                </Sidebar.Item>
              </div>
              <div className="mt-2">
                <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark" iconColor="teal-100">
                  Kanban
                </Sidebar.Item>
              </div>
              <div className="mt-2">
                <Sidebar.Item href="#" icon={HiInbox} label="3" iconColor="black">
                  Inbox
                </Sidebar.Item>
              </div>
              <div className="mt-2">
                <Sidebar.Item href="#" icon={HiUser} iconColor="teal-100">
                  Users
                </Sidebar.Item>
              </div>
              <div className="mt-2">
                <Sidebar.Item href="#" icon={HiShoppingBag} iconColor="teal-100">
                  Products
                </Sidebar.Item>
              </div>
              <div className="mt-2">
                <Sidebar.Item href="#" icon={HiArrowSmRight} iconColor="teal-100">
                  Sign In
                </Sidebar.Item>
              </div>
              <div className="mt-2">
                <Sidebar.Item href="#" icon={HiTable} iconColor="teal-100">
                  Sign Up
                </Sidebar.Item>
              </div>
            </Sidebar.ItemGroup>
            </div>
          </Sidebar.Items>
        </Sidebar>
      )}
    </div>
  );
}

export default Component;
