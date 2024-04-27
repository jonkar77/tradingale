'use client'
import React, { useState } from 'react';
import TradeDetails from './components/modal/TradeDetails/page';
import Calendar from './components/LandingPage/Calendar';

const YearScroller: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<null>(null);
  const maxYear = new Date().getFullYear();
  const minYear = 2017;
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handleNextYear = () => {
    if (currentYear === maxYear) return;
    setCurrentYear(currentYear + 1);
  };

  const handlePrevYear = () => {
    if (currentYear === minYear) return;
    setCurrentYear(currentYear - 1);
  };



  return (
    <div className='flex flex-col bg-green-100 rounded-md m-2 h-[629px]'>
      <div className="flex p-2">
        <div className="flex justify-around">
          <button className='border border-black px-1' onClick={handlePrevYear}>&lt;</button>
          <div className='mx-2'>{currentYear}</div>
          <button className='border px-1 border-black' onClick={handleNextYear}>&gt;</button>
        </div>
      </div>
      <div>
        <Calendar year={currentYear} />
      </div>
    </div>
  );
};

export default YearScroller;
