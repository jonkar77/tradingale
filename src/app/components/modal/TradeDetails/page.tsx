'use client'
import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Dialog } from '@mui/material';

interface ModalFormProps {
  onClose: () => void;
  // id: number;
  // content: string;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}
const TradeDetails: React.FC<ModalFormProps> = ({onClose, submitHandler}) => {
  const [tradeType, setTradeType] = useState('');
  const [scripName, setScripName] = useState('');
  const [buyValue, setBuyValue] = useState('');
  const [sellValue, setSellValue] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17T15:30'));
  const  [isOpen, setIsOpen] = useState(true);



  const [items, setItems] = useState<Item[]>([]);
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const toggleItem = (itemId: number) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  const handleAddTrade = () => {
    const newItem: Item = { id: items.length + 1, content: `Trade ${items.length+1}`, isOpen: true };
    setItems([...items.map(item => ({ ...item, isOpen: false })), newItem]);
    setOpenItemId(newItem.id);
  };


  return (
    <Dialog open={isOpen}>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full">
        <h2 className="text-lg font-semibold mb-4">Trade Details</h2>
        {items.map(item => (
        <div key={item.id} className="mt-1">
          <div className='flex flex-row justify-between'>
            <p>{item.content}</p>
            <p>-------------------------------------------------------------</p>
            <button onClick={() => toggleItem(item.id)}>
              {openItemId === item.id ? '^' : 'v'}
            </button>
            <button onClick={() => setItems(items.filter(i => i.id !== item.id))}>
              x
            </button>
          </div>
          {openItemId === item.id && (
            <div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label htmlFor="tradeType">Instrument Type</label>
                  <select
                    id="tradeType"
                    className="block p-2 w-full h-[36px] border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={tradeType}
                    onChange={(e) => setTradeType(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="equity">Equity</option>
                    <option value="commodity">Commodity</option>
                    <option value="futures">Futures</option>
                    <option value="options">Options</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="scripName">Scrip Name</label>
                  <input
                    type="text"
                    id="scripName"
                    className="block w-full p-2 h-[36px] border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={scripName}
                    onChange={(e) => setScripName(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="buyValue">Buy Value</label>
                  <input
                    type="number"
                    id="buyValue"
                    className="block w-full p-2 h-[36px] border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={buyValue}
                    onChange={(e) => setBuyValue(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="sellValue">Sell Value</label>
                  <input
                    type="number"
                    id="sellValue"
                    className="block p-2 w-full h-[36px] border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={sellValue}
                    onChange={(e) => setSellValue(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                      label="Entry time"
                      defaultValue={dayjs('2022-04-17T15:30')}
                    />
                    <TimePicker
                      label="Exit time"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="my-4">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  className="block p-2 w-full border border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                ></textarea>
              </div>
            </div>
          )}
            </div>
))}

        <div className="flex justify-center items-center">
          <button className="flex items-center space-x-2 text-blue-600" onClick={handleAddTrade}>
            <MdAddCircleOutline />
            <span>Add a trade</span>
          </button>
        </div>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded mr-4" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={submitHandler}>
            Done
          </button>
        </div>
      </div>
    </div>
    </Dialog>

  );
};

export default TradeDetails;



