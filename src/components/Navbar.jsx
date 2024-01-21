import { useState } from 'react'
import searchIcon from '../assets/svg/search-normal.svg'
import profileIcon from '../assets/svg/profile.svg'
import downArrowIcon from '../assets/svg/downArrow.svg'
import settingIcon from '../assets/svg/settings.svg'
import layerIcon from '../assets/svg/layers.svg'
import helpCircleIcon from '../assets/svg/help-circle.svg'
import logoutIcon from '../assets/svg/logout.svg'

import logo from '../assets/images/logo.png'
import coin from '../assets/images/coin.png'

function Navbar() {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  return (
    <div className='fixed top-0 z-50 mx-auto flex h-[85px] w-full items-center justify-center bg-black/70 backdrop-blur-[5px] sm:h-[72px]'>
      <div className='responsiveWidth top-0 mx-auto flex justify-between'>
        <div className='left-side flex space-x-5 '>
          <div className='logo flex items-center border-r-[0.5px] border-white/50 pr-3'>
            <img
              src={logo}
              className='h-[21px] w-[75px] object-cover p-2 sm:h-[36px] sm:w-[104px] sm:px-0  '
              alt='logo'
            />
          </div>
          <div className='all-india-inst flex items-center gap-2 font-dm-sans'>
            <img
              src={coin}
              className=' h-[28px] w-[29px] sm:h-[46px] sm:w-[46.49px]'
              alt=''
            />
            <p className='hidden max-w-[10rem] text-[13px] text-xs leading-[19px] text-white  sm:block'>
              All India Institute of Medical Science , Nagpur
            </p>
            <p className='time-date hidden h-[34px] w-[289px] rounded-lg border border-date-border bg-date-background px-3 py-1 text-center text-xSmall leading-6 text-date-color backdrop-blur-[2.5px] lg:block'>
              Trial Period : Dec 13 2023 - Mar 22 2024
            </p>
          </div>
        </div>
        <div className='right-side btns flex items-center '>
          <button className='search mr-2 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-navbar-icon-bg-color outline-none'>
            <img src={searchIcon} className='h-[18.30px] w-[18.30px]' />
          </button>
          <button
            className='menu relative mr-3 flex h-[34px] w-[65px] items-center justify-center rounded-full bg-navbar-icon-bg-color'
            onClick={showMenu}
          >
            <img src={profileIcon} className='h-5 w-5 object-cover' />
            <img
              src={downArrowIcon}
              className={`h-5 w-5 object-cover duration-300 ease-in-out ${
                menu ? 'rotate-180' : 'rotate-0'
              }`}
            />
            {menu && <MenuDropDown />}
          </button>
          <button className='logout hidden h-[34px] w-[98px] items-center justify-center rounded-lg border border-date-border pl-[10px] pr-[16px] font-dm-sans text-xSmall leading-6 text-navbar-text-color backdrop-blur-[2.5px] sm:flex'>
            <p className=''>Log Out</p>
            <img src={logoutIcon} className='' />
          </button>
        </div>
      </div>
    </div>
  )
}

const menuItem = [
  {
    icon_link: settingIcon,
    title: 'Choose Databases',
  },
  {
    icon_link: layerIcon,
    title: 'Browse Publications',
  },
  {
    icon_link: helpCircleIcon,
    title: 'Help and Support',
  },
  {
    icon_link: logoutIcon,
    title: 'Logout',
  },
]

const MenuDropDown = () => {
  return (
    <div className='menu-dropdown absolute right-0 top-16 w-[240px] rounded-md bg-white'>
      <div className='absolute left-[-153%] right-[65%] top-[-20px] h-screen w-[300%] bg-black/40 mix-blend-exclusion backdrop-blur-[4.5px] sm:hidden'></div>
      <div className='menu-dropdown-conten relative flex flex-col'>
        <div className='profile flex border-b p-3 pb-2'>
          <div className='relative mr-2 h-[36px] w-[41px]'>
            <img src={coin} className='flex-shrink-0 object-cover ' alt='' />
            <span className='absolute -bottom-1 right-[2px] h-[10px] w-[10px] rounded-full bg-success-500 '></span>
          </div>
          <div className='name-bio'>
            <p className='text-start font-inter text-medium font-semibold text-menu-text hover:cursor-pointer'>
              AIIMS, Nagpur
            </p>
            <span className='-mt-1 text-medium text-gray-500 hover:cursor-pointer'>
              aiimsnagpur@gmail.com
            </span>
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <div
              key={index}
              className='flex items-center border-t-[0.5px] bg-menu-background p-3 font-dm-sans text-medium font-medium leading-5 transition-all hover:cursor-pointer hover:bg-menu-hover-background'
            >
              <img src={item.icon_link} className='w-5 object-contain' alt='' />
              <p className='pl-2 text-menu-text'>{item.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
