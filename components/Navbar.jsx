import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <div className="min-h-20 sm:ml-60 flex flex-wrap-reverse justify-between items-center font-poppins bg-white">
      <div className="pl-4 max-md:pl-0 m-3 max-md:ml-6 font-semibold text-2xl">Dashboard</div>
      <div className="mr-10 flex flex-wrap items-center">

        <div className="mr-10 my-3 max-md:ml-6 relative">
          <SearchIcon className="absolute top-[10px] left-2 text-[#5864E8]"/>
          <input
            type="text"
            placeholder="Search here..."
            className="block w-[350px] max-sm:w-[250px] rounded-xl border-0 py-1.5 pl-10 pr-7 tracking-tight max-sm:pr-4 bg-[#F9FAFC] text-gray-700 placeholder:text-gray-400 text-sm leading-8"
          />
        </div>

        <div className="mr-8 max-md:ml-6 max-md:mr-0 flex">
          <Image
            src="/flag.png"
            alt="English language"
            className="mr-2 rounded-xl min-w-[20px] max-h-[20px]"
            width="20"
            height="20"
          />
          <div className="text-sm font-semibold">{`Eng (US)`}</div>
          <ExpandMoreIcon fontSize="small" className="ml-3 text-gray-400"/>
        </div>
        
        <div className="mr-4 max-md:ml-6 max-md:mr-0 w-10 h-10 flex relative justify-center items-center rounded-md bg-yellow-50">
          <div className="w-1 h-1 absolute top-2 right-2 rounded-full bg-red-600"></div>
          <NotificationsNoneIcon className="text-yellow-400"/>
        </div>

        <div className="flex max-md:ml-6">
          <Image
            src="/me.jpg"
            alt="profile"
            className="mr-4 rounded-xl"
            width="50"
            height="50"
          />
          <div className="flex flex-col justify-center items-center">
            <div className="font-medium text-sm">Pavel</div>
            <div className="font-light text-xs">Admin</div>
          </div>
          <ExpandMoreIcon fontSize="small" className="mt-2 ml-6 max-md:ml-3"/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
