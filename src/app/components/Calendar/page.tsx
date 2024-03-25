import React from 'react';

interface CalendarProps {
  onSelectDate: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onSelectDate }) => {
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handleClickDate = (date: Date) => {
    onSelectDate(date);
  };

  return (
    <div className="grid grid-cols-6 gap-1 p-2">
      {months.map((month, index) => {
        const numDays = new Date(2022, index + 1, 0).getDate(); // Get the number of days in the current month
        return (
          <div key={month} className="border border-gray-300 rounded-lg p-3 shadow-2xl shadow-emerald-900">
            <h2 className="text-sm font-semibold mb-2">{month}</h2>
            <div className="grid grid-cols-7">
              {weekDays.map(day => (
                <div key={day} className="text-xs text-center text-gray-500 py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: numDays }, (_, day) => day + 1).map(day => (
                <div
                  key={day}
                  className="text-sm text-center m-[3px] py-1 cursor-pointer border shadow-2xl hover:bg-teal-600 hover:text-white rounded"
                  onClick={() => handleClickDate(new Date(2022, index, day))}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
