import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 sm:ml-60 flex justify-between items-center bg-white">
      <div className="pl-10 font-poppins font-semibold text-2xl">Dashboard</div>
      <div className="mr-10 flex items-center">
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

      </div>
    </div>
  );
};

export default Navbar;
