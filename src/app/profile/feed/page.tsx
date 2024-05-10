'use client'
import React, { useState } from 'react';
import Sidebar from '@/app/components/Sidebar/page';
import Topline from './topline';
import Post from './post/page';
import Biscuit from './biscuit';

const HalfPageScrollable: React.FC = () => {



  return (
    <div className='relative overflow-hidden h-screen'>
      <div className='flex'>
        <div><Sidebar /></div>
        <div className='bg-gray-200 w-screen'>
          <div><Topline /></div>
          <div className="mt-0 flex flex-row justify-around h-[600px]">
            <div className={`w-2/3 p-2`}>
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
