import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';


const Navbar = () => {
  return (
    <div className="min-h-20 sm:ml-60 flex flex-wrap-reverse justify-between items-center font-poppins bg-white">
      <div className="m-3 ml-9 max-md:pl-0 max-md:ml-6 font-semibold text-2xl">
        Dashboard
      </div>
      <div className="ml-9 mr-10 max-md:ml-6 max-md:mr-0 flex flex-wrap items-center">
        <div className="mr-10 my-3 relative">
          <SearchIcon className="absolute top-[10px] left-2 text-[#5864E8]" />
          <input
            type="text"
            placeholder="Search here..."
            className="block w-[350px] max-sm:w-[250px] rounded-xl border-0 py-1.5 pl-10 pr-7 tracking-tight max-sm:pr-4 bg-[#F9FAFC] text-gray-700 placeholder:text-gray-400 text-sm leading-8"
          />
        </div>

        <div className="mr-8 max-md:mr-6 h-20 flex items-center group/language">
          <Image
            src="/flag.png"
            alt="English language"
            className="mr-2 rounded-xl min-w-[20px] max-h-[20px]"
            width="20"
            height="20"
          />
          <div className="text-sm font-semibold">{`Eng (US)`}</div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <ExpandMoreIcon
                fontSize="small"
                className="ml-3 text-gray-400 rounded border-slate-400 transform transition-all group-hover/language:border"
              />
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <li>
                  <a>
                    <Image
                      src="/finland.png"
                      alt="English language"
                      className="mr-2 rounded-xl w-[20px] h-[20px]"
                      width="20"
                      height="20"
                    />
                    Finnish
                  </a>
                </li>
                <li>
                  <a>
                    <Image
                      src="/sweden.png"
                      alt="English language"
                      className="mr-2 rounded-xl min-w-[20px] max-h-[20px]"
                      width="20"
                      height="20"
                    />
                    Swedish
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <div className="mr-4 max-md:mr-6 w-10 h-10 flex relative justify-center items-center rounded-md bg-yellow-50 group/messages hover:border">
              <div className="w-1 h-1 absolute top-2 right-2 rounded-full bg-red-600 transform transition-all group-hover/messages:scale-[2]"></div>
              <NotificationsNoneIcon className="text-yellow-400" />
            </div>
          </div>
          <div tabIndex={0} className="mt-3 dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <p>It's time to hire Pavel <span className="text-[25px]">😉</span></p>  
          </div>
        </div>

        <div className="flex max-md:mt-3 group/profile">
          <Image
            src="/me.jpg"
            alt="profile"
            className="mr-4 rounded-xl"
            width="50"
            height="50"
          />
          <div className="mr-6 flex flex-col justify-center items-center">
            <div className="font-medium text-sm">Pavel</div>
            <div className="font-light text-xs">Admin</div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <ExpandMoreIcon
                fontSize="small"
                className="mt-2 mb-5 max-md:ml-3 rounded border-slate-400 transform transition-all group-hover/profile:border"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
            >
              <li>
                <a><CachedOutlinedIcon />Switch role</a>
              </li>
              <li>
                <a><LogoutOutlinedIcon />Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
