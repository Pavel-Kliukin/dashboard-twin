import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Navbar = () => {
  return (
    <div className="h-20 sm:ml-60 flex justify-between items-center bg-white">
      <div className="pl-8 font-poppins font-semibold text-2xl">Dashboard</div>
      <div className="mr-10 flex items-center">
        
        <div className="mr-4 w-10 h-10 flex relative justify-center items-center rounded-md bg-yellow-50">
          <div className="w-1 h-1 absolute top-2 right-2 rounded-full bg-red-600"></div>
          <NotificationsNoneIcon className="text-yellow-400"/>
        </div>

        <div className="flex">
          <Image
            src="/me.jpg"
            alt="profile"
            className="mr-4 rounded-lg"
            width="50"
            height="50"
          />
          <div>
            <div className="font-poppins font-medium text-sm">Pavel</div>
            <div className="font-poppins font-light text-xs">Admin</div>
          </div>
          <ExpandMoreIcon className="ml-6"/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
