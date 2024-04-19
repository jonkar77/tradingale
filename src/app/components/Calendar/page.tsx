import React from 'react';

interface CalendarProps {
  onSelectDate: (date: Date) => void;
  year: number;
}

const Calendar: React.FC<CalendarProps> = ({ year, onSelectDate }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const handleClickDate = (date: Date) => {
    onSelectDate(date);
    
  };

  const getEmptyCells = (numEmptyCells: number) => {
    const emptyCells = [];
    for (let i = 0; i < numEmptyCells; i++) {
      emptyCells.push(<div key={`empty-${i}`} className="text-sm text-center m-[3px] py-1"></div>);
    }
    return emptyCells;
  };

  return (
    <div className="grid grid-cols-6 gap-1 p-1">
      {months.map((month, index) => {
        const firstDayOfMonth = new Date(year, index, 1).getDay(); // Get the day of the week for the first day of the month
        const emptyCells = getEmptyCells(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1); // Adjust for Sunday being index 0
        const numDays = new Date(year, index + 1, 0).getDate(); // Get the number of days in the current month
        return (
          <div key={month} className="border border-gray-300 rounded-lg p-3 shadow-xl shadow-emerald-900">
            <h2 className="text-md font-semibold mb-2">{month}</h2>
            <div className="grid grid-cols-7 ">
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
                    className={`text-sm text-center m-[1px] py-1 cursor-pointer border rounded ${isPastDate ? 'opacity-50 pointer-events-none' : 'shadow-2xl hover:border-black'} ${currentDate.getDate() === day && currentDate.getMonth() === index ? 'font-bold border-black text-black' : ''}`}
                    onClick={() => isPastDate ? null : handleClickDate(new Date(year, index, day))}
                  >
                    <div>{day}</div>
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
