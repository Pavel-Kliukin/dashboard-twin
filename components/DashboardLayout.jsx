'use client'
// Icons from Material UI
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FeedIcon from '@mui/icons-material/Feed';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import dynamic from 'next/dynamic';
// Charts imports
const TotalRevenue = dynamic(
  () => import ('./charts/TotalRevenue'),
  { ssr: false }
)

const DashboardLayout = () => {
  return (
    <div class="p-3 min-h-svh flex flex-col sm:ml-60 bg-[#F9FAFC] font-poppins">

      <div className="min-h-fit flex">

        <div class="m-3 p-6 h-fit w-fit flex flex-col shadow-sm bg-white rounded-lg">
          <div className="mb-6 flex justify-between">
            <div className="flex flex-col">
              <div className="font-semibold">Today's Sales</div>
              <div className="mt-1 text-xs text-gray-400">Sales Summary</div>
            </div>
            <button className="h-8 px-3 py-2 items-center text-xs flex justify-center border-2 rounded-md text-gray-900">
              <CloudUploadOutlinedIcon className="mr-1 text-sm text-gray-900"/>
              Export
            </button>
          </div>
          <div className="flex h-32 justify-between items-center">
            <div className='p-3 mr-6 w-32 h-full flex flex-col justify-between rounded-xl bg-[#FFE3E6]'>
              <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#FA5F7D]'>
                <AnalyticsIcon className="text-[17px] text-white"/>
              </div>
              <div className='font-bold'>$1k</div>
              <div className='text-xs text-gray-900'>Total Sales</div>
              <div className='font-semibold text-[9px] text-sky-500'>+8% from yesterday</div>
            </div>
            <div className='p-3 mr-6 w-32 h-full flex flex-col justify-between rounded-xl bg-[#FFF4E0]'>
              <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#FF967E]'>
                <FeedIcon className="text-[17px] text-white"/>
              </div>
              <div className='font-bold'>300</div>
              <div className='text-xs text-gray-900'>Total Order</div>
              <div className='font-semibold text-[9px] text-sky-500'>+5% from yesterday</div>
            </div>
            <div className='p-3 mr-6 w-32 h-full flex flex-col justify-between rounded-xl bg-[#DDFCE9]'>
              <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#45D666]'>
                <GavelIcon className="text-[17px] text-white"/>
              </div>
              <div className='font-bold'>5</div>
              <div className='text-xs text-gray-900'>Product Sold</div>
              <div className='font-semibold text-[9px] text-sky-500'>+1,2% from yesterday</div>
            </div>
            <div className='p-3 w-32 h-full flex flex-col justify-between rounded-xl bg-[#F4E9FE]'>
              <div className='w-7 h-7 flex justify-center items-center rounded-full bg-[#BD86F9]'>
                <GroupAddIcon className="text-[17px] text-white"/>
              </div>
              <div className='font-bold'>8</div>
              <div className='text-xs text-gray-900'>New Customers</div>
              <div className='font-semibold text-[9px] text-sky-500'>+0,5% from yesterday</div>
            </div>
          </div>
        </div>

        <div class="m-3 w-60 h-auto flex-1 flex bg-white rounded-lg shadow-sm">02</div>

      </div>

      <div className="min-h-1/3 w-full flex">
        <div class="m-3 w-1/2 bg-white rounded-lg shadow-sm">
          <TotalRevenue />
        </div>
        <div class="m-3 flex-1 bg-white rounded-lg shadow-sm">04</div>
        <div class="m-3 flex-1 bg-white rounded-lg shadow-sm">05</div>
      </div>

      <div className="h-1/3 w-full flex">
        <div class="m-3 flex-1 bg-white rounded-lg shadow-sm">06</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
