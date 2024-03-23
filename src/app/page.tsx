"use client"
import React, { useState, useEffect, useRef } from 'react';
import Calendar from './components/Calendar/page';

const YearScroller: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const minYear: number = 2000;
    const maxYear: number = new Date().getFullYear(); // Set the maximum year to current year + 10
    const yearStep: number = 1;

    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            const itemWidth = containerWidth / 3; // Assuming 3 items are visible in the window at a time
            const scrollLeft = containerRef.current.scrollLeft;
            const centerIndex = Math.floor((scrollLeft + itemWidth / 10) / itemWidth);
            const centerYear = minYear + centerIndex * yearStep;
            setSelectedYear(centerYear);
            console.log(centerYear);

        }
    };
    const handleSelectDate = (date: Date) => {
        console.log('Selected date:', date);
        // You can perform any actions here based on the selected date
      };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => {
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className='flex flex-col bg-green-100 rounded-md m-3 h-[629px]'>
            <div className="flex justify-center p-2">
                <div
                    ref={containerRef}
                    className="bg-white p-2 rounded-lg shadow-md m-1 w-96 overflow-x-scroll"
                    style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    <div className="flex" style={{ minWidth: `${maxYear - minYear + 1}00%` }}>
                        {Array.from({ length: maxYear - minYear + 1 }, (_, index) => {
                            const year = minYear + index;
                            return (
                                <div
                                    key={year}
                                    className={`flex-shrink-0 flex items-center justify-center w-32 h-8 border border-gray-300 rounded-lg mr-2 ${year === selectedYear ? 'bg-teal-600 text-white' : ''}`}
                                    onClick={() => setSelectedYear(year)}
                                >
                                    {year}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <Calendar onSelectDate={handleSelectDate}/>
            </div>
        </div>
    );
};

export default YearScroller;
