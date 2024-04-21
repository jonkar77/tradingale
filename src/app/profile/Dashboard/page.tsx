import BarChart from '@/app/components/Analytics/BarGraph/page'
import React from 'react'
//import sidebar
import Sidebar from '@/app/components/Sidebar/page'



const Dashboard = () => {
  return (
    <div className='flex'>
      <div><Sidebar/></div>
    <div className="w-screen">
      <div className="ml-10 grid grid-cols-2 grid-rows-2 h-screen">
        <div className="flex items-center justify-center col-span-1 row-span-1">
          <BarChart />
        </div>
        <div className="flex items-center justify-center col-span-1 row-span-1">
          <BarChart />
        </div>
        <div className="flex items-center justify-center col-span-1 row-span-1">
          <BarChart />
        </div>
        <div className="flex items-center justify-center col-span-1 row-span-1">
          <BarChart />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard