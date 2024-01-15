import { useState } from "react";
import searchIcon from "../assets/svg/search-normal.svg";
import groupIcon from "../assets/svg/group.svg";
import settingIcon from "../assets/svg/settings.svg";
import layerIcon from "../assets/svg/layers.svg";
import uploadIcon from "../assets/svg/upload.svg";
import helpCircleIcon from "../assets/svg/help-circle.svg";
import logoutIcon from "../assets/svg/logout.svg";

import logo from "../assets/images/logo.png";
import coin from "../assets/images/coin.png";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='bg-black relative text-white '>
      <div className='flex justify-between w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] mx-auto'>
        <div className='left-side flex space-x-5 '>
          <div className='logo pr-3 border-r-2'>
            <img src={logo} className='w-[6rem] p-2' alt='logo' />
          </div>
          <div className='all-india-inst gap-2 items-center hidden md:flex'>
            <img src={coin} className=' w-8' alt='' />
            <p className='max-w-[10rem] text-xs'>
              All India Institute of Medical Science , Nagpur
            </p>
            <p className='time-period pl-3 text-[10px]'>
              Trial Period : Dec 13 2023 - Mar 22 2024
            </p>
          </div>
        </div>
        <div className='right-side relative btns flex items-center '>
          <button className='mr-2 search'>
            <img src={searchIcon} />
          </button>
          <button className='menu' onClick={showMenu}>
            <img src={groupIcon} />
          </button>
          <button className='logout flex items-center'>
            <p className='text-xs pr-1'>Log Out</p>
            <img src={logoutIcon} className='' />
          </button>
        </div>
      </div>
      {menu ? <MenuDropDown /> : ""}
    </div>
  );
}

const menuItem = [
  {
    icon_link: settingIcon,
    title: "Choose Databases",
  },
  {
    icon_link: layerIcon,
    title: "Brwoser Publications",
  },
  {
    icon_link: uploadIcon,
    title: "Upload your Article",
  },

  {
    icon_link: helpCircleIcon,
    title: "Help and Support",
  },
  {
    icon_link: logoutIcon,
    title: "Logout",
  },
];

const MenuDropDown = () => {
  return (
    <div className='menu-dropdown absolute top-12 right-[15%] z-50 text-black border bg-white rounded-md'>
      <div className='menu-dropdown-conten relative flex flex-col p-3 gap-3'>
        <div className='profile flex border-b pb-2'>
          <img
            src='../src/assets/svg/image-10.png'
            className='object-cover flex-shrink-0 mr-3'
            alt=''
          />
          <div className='name-bio'>
            <p className='font-semibold hover:cursor-pointer hover:underline'>
              AIIMS, Nagpur
            </p>
            <span className='text-gray-500 text-sm -mt-2 hover:cursor-pointer hover:underline'>
              aiimsnagpur@gmail.com
            </span>
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <div
              key={index}
              className='flex items-center gap-3 px-2 hover:cursor-pointer hover:bg-gray-200 transition-all py-2 rounded-md'>
              <img src={item.icon_link} className='w-5 object-contain' alt='' />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
