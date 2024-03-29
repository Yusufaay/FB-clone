import Image from "next/image";
import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { RiFlag2Line } from "react-icons/ri";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineShop, AiFillMessage,AiFillBell } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const {data:session} = useSession();
  return (
    /* general */
    <div className="bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16">
      {/* left */}
      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
          height={40}
          width={40}
        />
        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* middle */}
      <div className="flex flex-grow justify-center mx-2">
        <div className="flex items-center">
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <HiOutlineHome className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <RiFlag2Line className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <MdOutlineOndemandVideo className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <AiOutlineShop className="mx-auto" size={25} />
          </div>
          <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <IoGameControllerOutline className="mx-auto" size={25} />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex items-center justify-end min-w-fit space-x-2">
        <Image
          onClick={signOut}
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden xl:inline-flex font-semibold texr-sm whitespace-nowrap p-3 max-w-xs">{session?.user.name.split(" ")[0]}</p>
        <CgMenuGridO size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"></CgMenuGridO>
        <AiFillMessage size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"></AiFillMessage>
        <AiFillBell size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"></AiFillBell>
        <MdOutlineExpandMore size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"></MdOutlineExpandMore>
      </div>
    </div>
  );
};

export default Header;
