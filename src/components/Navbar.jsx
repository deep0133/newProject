import { useState } from "react";
import searchIcon from "../assets/svg/search-normal.svg";
import profileIcon from "../assets/svg/profile.svg";
import downArrowIcon from "../assets/svg/downArrow.svg";
import settingIcon from "../assets/svg/settings.svg";
import layerIcon from "../assets/svg/layers.svg";
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
    <div className="bg-navbar-background h-[85px] sm:h-[72px] flex justify-center items-center backdrop-blur-[5px] z-50 mx-auto fixed top-0 w-full">
      <div className="flex justify-between responsiveWidth top-0 mx-auto">
        <div className="left-side flex space-x-5 ">
          <div className="logo pr-3 border-r-[0.5px] border-white/50 flex items-center">
            <img
              src={logo}
              className="w-[75px] h-[20px] sm:w-[104px] sm:h-[36px] object-cover sm:p-2"
              alt="logo"
            />
          </div>
          <div className="all-india-inst gap-2 font-dm-sans items-center flex">
            <img
              src={coin}
              className=" w-[29px] h-[28px] sm:w-[46.49px] sm:h-[46px]"
              alt=""
            />
            <p className="max-w-[10rem] text-xs hidden sm:block text-white leading-[19px]  text-[13px]">
              All India Institute of Medical Science , Nagpur
            </p>
            <p className="time-date rounded-lg text-xSmall w-[289px] h-[34px] text-center hidden lg:block text-date-color py-1 px-3 bg-date-background border border-date-border backdrop-blur-[2.5px] leading-6">
              Trial Period : Dec 13 2023 - Mar 22 2024
            </p>
          </div>
        </div>
        <div className="right-side btns flex items-center ">
          <button className="search mr-2 w-[34px] h-[34px] outline-none bg-navbar-icon-bg-color flex justify-center items-center rounded-full">
            <img src={searchIcon} className="w-[18.30px] h-[18.30px]" />
          </button>
          <button
            className="menu relative mr-3 flex justify-center rounded-full items-center w-[65px] bg-navbar-icon-bg-color h-[34px]"
            onClick={showMenu}
          >
            <img src={profileIcon} className="object-cover w-5 h-5" />
            <img
              src={downArrowIcon}
              className={`object-cover w-5 h-5 duration-300 ease-in-out ${
                menu ? "rotate-180" : "rotate-0"
              }`}
            />
            {menu && <MenuDropDown />}
          </button>
          <button className="logout hidden sm:flex items-center border text-navbar-text-color text-xSmall font-dm-sans backdrop-blur-[2.5px] leading-6 justify-center rounded-lg w-[98px] h-[34px] pl-[10px] pr-[16px] border-date-border">
            <p className="">Log Out</p>
            <img src={logoutIcon} className="" />
          </button>
        </div>
      </div>
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
    title: "Browse Publications",
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
    <div className="menu-dropdown bg-white absolute top-16 w-[240px] right-0 rounded-md">
      <div className="w-[300%] sm:hidden left-[-153%] right-[65%] top-[-20px] h-screen absolute backdrop-blur-[4.5px] mix-blend-exclusion bg-black/40"></div>
      <div className="menu-dropdown-conten relative flex flex-col">
        <div className="profile flex border-b pb-2 p-3">
          <div className="h-[36px] w-[41px] relative mr-2">
            <img src={coin} className="object-cover flex-shrink-0 " alt="" />
            <span className="w-[10px] h-[10px] bg-success-500 rounded-full absolute -bottom-1 right-[2px] "></span>
          </div>
          <div className="name-bio">
            <p className="font-inter text-start font-semibold text-medium hover:cursor-pointer text-menu-text">
              AIIMS, Nagpur
            </p>
            <span className="text-gray-500 text-medium -mt-1 hover:cursor-pointer">
              aiimsnagpur@gmail.com
            </span>
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center p-3 font-dm-sans font-medium text-medium leading-5 border-t-[0.5px] hover:cursor-pointer bg-menu-background hover:bg-menu-hover-background transition-all"
            >
              <img src={item.icon_link} className="w-5 object-contain" alt="" />
              <p className="text-menu-text pl-2">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
