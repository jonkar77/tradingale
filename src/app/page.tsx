'use client'
import React, { useState, useEffect, useRef } from 'react';
import Calendar from './components/Calendar/page';
import TradeDetail from './components/modal/TradeDetails/page'; 
import TradeDetails from './components/modal/TradeDetails/page';
const YearScroller: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);


    const handleSelectDate = (date: Date) => {
        // You can perform any actions here based on the selected date
        //pop out modal here
        setShowModal(true);
        setSelectedDate(date);  
       
    };

    const maxYear = new Date().getFullYear();
    const minYear = 2017;
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    const handleNextYear = () => {
        if(currentYear === maxYear) return;
        setCurrentYear(currentYear + 1);
    };

    const handlePrevYear = () => {
        if(currentYear === minYear) return;
        setCurrentYear(currentYear - 1);
    };
    
    
    return (
        <div className='flex flex-col bg-green-100 rounded-md m-2 h-[629px]'>
            {showModal && 
                <TradeDetails onClose={() => setShowModal(false)} />}
            <div className="flex p-2">
                <div className="flex justify-around">
                    <button className='border border-black px-1' onClick={handlePrevYear}>&lt;</button>
                    <div className='mx-2'>{currentYear}</div>
                    <button className='border px-1 border-black' onClick={handleNextYear}>&gt;</button>
                    </div>
            </div>
            <div>
                <Calendar year={currentYear} onSelectDate={handleSelectDate} />
            </div>
        </div>
    );
};

export default YearScroller;
