'use client'
import React, { useState } from 'react';
import Sidebar from '@/app/components/Sidebar/page';
import Topline from './topline';
import Post from './post';
import Biscuit from './biscuit';

const HalfPageScrollable: React.FC = () => {



  return (
    <div className='relative overflow-hidden'>
      <div className='flex'>
        <div><Sidebar /></div>
        <div className='bg-gray-200 w-screen'>
          <div><Topline /></div>
          <div className="mt-3 flex flex-row justify-around h-[650px]">
            <div className={`w-2/3 overflow-y-scroll no-scrollbar p-4`}>
              <Post />
            </div>
            <div className={`w-1/3 p-2`}>
              <Biscuit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfPageScrollable;
