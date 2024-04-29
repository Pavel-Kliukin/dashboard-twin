import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';


const Sidebar = () => {
  return (
    <div className="font-poppins text-xs">

      <div className='min-h-14 flex items-center sm:hidden'>
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <span className="mt-2 ml-2 text-gray-400 sm:hidden">Open sidebar</span>
      </div>

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-60 h-screen bg-white transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        {/* Logo */}
        <a href="https://parkingenergy.com" rel="noreferrer">
          <div className="m-8 mb-6 h-10 w-10 flex justify-center items-center rounded-md bg-[#5864E8]">
            <ElectricalServicesOutlinedIcon className='text-white'/>
          </div>
        </a>

        <div class="h-full px-3 py-4 flex flex-col items-center overflow-y-auto ">
          <ul class="space-y-2 font-medium">
            <li>
              <button class="flex items-center px-8 py-3 text-white rounded-xl bg-[#5864E8] hover:bg-gray-100 hover:text-gray-900 group">
                <svg
                  class="w-5 h-5 text-white transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span class="ms-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3 text-gray-900 rounded-xl hover:bg-gray-100 group">
                <BarChartOutlinedIcon className='text-gray-500'/>
                <span class="flex-1 ms-3 text-gray-500 whitespace-nowrap">Leaderboard</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3  text-gray-900 rounded-xl hover:bg-gray-100 group">
                <ShoppingCartOutlinedIcon className='text-gray-500'/>
                <span class="flex-1 ms-3 whitespace-nowrap text-gray-500">Order</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3 text-gray-900 rounded-xl hover:bg-gray-100 group">
                <ShoppingBagOutlinedIcon className='text-gray-500'/>
                <span class="flex-1 ms-3 whitespace-nowrap text-gray-500">Products</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3 text-gray-900 rounded-xl hover:bg-gray-100 group">
                <TrendingUpOutlinedIcon className='text-gray-500'/>
                <span class="flex-1 ms-3 whitespace-nowrap text-gray-500">Sales Report</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3 text-gray-900 rounded-xl hover:bg-gray-100 group">
                <SmsOutlinedIcon className='text-gray-500'/>
                <span class="flex-1 ms-3 whitespace-nowrap text-gray-500">Messages</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3 text-gray-900 rounded-xl hover:bg-gray-100 group">
                <SettingsOutlinedIcon className='text-gray-500'/>
                <span class="flex-1 ms-3 whitespace-nowrap text-gray-500">Settings</span>
              </button>
            </li>
            <li>
              <button class="flex items-center px-6 py-3 text-gray-900 rounded-xl hover:bg-gray-100 group">
                <svg
                  class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap text-gray-500">Sign Out</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
