'use client'
import React, { useState } from 'react';
import TradeDetails from '../modal/TradeDetails/page';
import { FaRegEye } from 'react-icons/fa6';
import { FiEdit } from "react-icons/fi";


interface CalendarProps {
  onSelectDate: (date: Date) => void;
  year: number;
}

const Calendar: React.FC<CalendarProps> = ({ year }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  var [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [lookup, setLookup] = useState<boolean>(false);
  const [trade, setTrade] = useState<boolean>(false)
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });


  const handleClickDate = (date: Date) => {
    setSelectedDate(date);
    setLookup(!lookup)
    console.log('Selected Date:', date);
  };

  const getEmptyCells = (numEmptyCells: number) => {
    const emptyCells = [];
    for (let i = 0; i < numEmptyCells; i++) {
      emptyCells.push(<div key={`empty-${i}`} className="text-sm text-center m-[3px] py-1"></div>);
    }
    return emptyCells;
  };
  const onClose = () => {
    //close it temporary
    setSelectedDate(null);
  };
  const submitHandler = () => {
    //close it temporary
    setSelectedDate(null);
  };

  const editTrade = () => {
    setTrade(!trade)
  }


  return (
    <div className="grid grid-cols-6 gap-1 p-1 relative">
      {selectedDate && lookup && (
        <div
          className="absolute z-50 w-[80px] bg-white border border-gray-200 shadow-2xl rounded-tr-full rounded-tl-full rounded-br-full"
          style={{ top: modalPosition.top, left: modalPosition.left }} // Position the modal dynamically
        >
          <div className='flex justify-center p-1'>
            <button className='p-2 rounded-full hover:bg-slate-300'><FaRegEye /></button>
            <button onClick={editTrade} className='p-2 rounded-full hover:bg-slate-300'><FiEdit />
            </button>
          </div>
        </div>
      )}
      {trade && <TradeDetails onClose={editTrade} submitHandler={submitHandler} />}
      {months.map((month, index) => {
        const firstDayOfMonth = new Date(year, index, 1).getDay(); // Get the day of the week for the first day of the month
        const emptyCells = getEmptyCells(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); // Adjust for Sunday being index 0
        const numDays = new Date(year, index + 1, 0).getDate(); // Get the number of days in the current month
        return (
          <div key={month} className="border border-gray-300 rounded-lg p-3 shadow-xl shadow-emerald-900">
            <h2 className="text-md font-semibold mb-2">{month}</h2>
            <div className="grid grid-cols-7">
              {weekDays.map(day => (
                <div key={day} className="text-xs text-center font-semibold text-gray-700 py-2">
                  <div className='border border-slate-400 rounded-lg'>{day}</div>
                </div>
              ))}
              {emptyCells}
              {Array.from({ length: numDays }, (_, day) => day + 1).map(day => {
                const currentDate = new Date();
                const isPastDate = new Date(year, index, day) > currentDate;
                return (
                  <div
                    key={day}
                    className={`text-sm text-center m-[1px] py-1 cursor-pointer border rounded
                     ${isPastDate ? 'opacity-50 pointer-events-none' : 'shadow-2xl hover:border-black'} 
                     ${currentDate.getDate() === day && currentDate.getMonth() === index && currentDate.getFullYear() === year ? 'font-bold border-black text-black' : ''}`}
                    onClick={(event) => {
                      if (!isPastDate) {
                        const clickedDateCell = event.currentTarget.getBoundingClientRect(); // Get position of clicked date cell
                        const modalTop = clickedDateCell.bottom - 180; // Calculate top position
                        const modalLeft = clickedDateCell.left + window.scrollX; // Calculate left position
                        setModalPosition({ top: modalTop, left: modalLeft }); // Update modal position
                        handleClickDate(new Date(year, index, day));
                      }
                    }}
                  >
                    <div >{day}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

};

export default Calendar;
