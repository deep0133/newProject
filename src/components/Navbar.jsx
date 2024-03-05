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
import { Link, useNavigate } from 'react-router-dom'
import propTypes from 'prop-types'
import Database from './NavbarModal/Database'

function Navbar() {
  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(!menu)
  }

  const [modal, setModal] = useState(null)

  const modalHandler = (val) => {
    setModal(val)
  }

  const [database, setDatabase] = useState([
    {
      id: 1,
      value: 'Medical',
      selected: true,
    },
    {
      id: 2,
      value: 'Pharmacy',
      selected: false,
    },
    {
      id: 3,
      value: 'Nursing',
      selected: false,
    },
    {
      id: 4,
      value: 'Dental',
      selected: false,
    },
    {
      id: 5,
      value: 'Hospital',
      selected: false,
    },
    {
      id: 6,
      value: 'Lab',
      selected: false,
    },
    {
      id: 8,
      value: 'Surgery',
      selected: true,
    },
    {
      id: 9,
      value: 'Other',
      selected: false,
    },
    {
      id: 10,
      value: 'Ophthalmology',
      selected: true,
    },
    {
      id: 11,
      value: 'Surgery',
      selected: true,
    },
    {
      id: 12,
      value: 'Other',
      selected: false,
    },
    {
      id: 13,
      value: 'Dental',
      selected: false,
    },
  ])

  const databaseHandler = (id) => {
    setDatabase((prevDatabase) =>
      prevDatabase.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            selected: !item.selected,
          }
        }
        return item
      })
    )
  }

  return (
    <>
      <div className='fixed top-0 z-50 mx-auto flex h-[85px] w-full items-center justify-center bg-black backdrop-blur-[5px] sm:h-[72px]'>
        <div className='responsiveWidth top-0 mx-auto flex justify-between'>
          <div className='left-side flex space-x-5 '>
            <Link
              to={'/'}
              className='logo flex items-center border-r-[0.5px] border-white/50 pr-3'
            >
              <img
                src={logo}
                className='w-[75px] object-cover p-2 sm:w-[104px] sm:px-0  '
                alt='logo'
              />
            </Link>
            <div className='all-india-inst flex items-center gap-2 font-dm-sans'>
              <img
                src={coin}
                className=' h-[28px] w-[29px] sm:h-[46px] sm:w-[46.49px]'
                alt=''
              />
              <p className='hidden max-w-[10rem] text-[13px] text-xs leading-[19px] text-white  sm:block'>
                All India Institute of Medical Science , Nagpur
              </p>
              <p className='time-date hidden h-[34px] w-[289px] rounded-lg border border-light-whiteO1 bg-date-background px-3 py-1 text-center text-xSmall leading-6 text-light-pureWhite backdrop-blur-[2.5px] lg:block'>
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
              {menu && <MenuDropDown modalHandler={modalHandler} />}
            </button>
            <button className='logout hidden h-[34px] w-[98px] items-center justify-center rounded-lg border border-light-whiteO1 pl-[10px] pr-[16px] font-dm-sans text-xSmall leading-6 text-light-pureWhite backdrop-blur-[2.5px] sm:flex'>
              <p className=''>Log Out</p>
              <img src={logoutIcon} className='' />
            </button>
          </div>
        </div>
      </div>

      {modal && (
        <div className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75'>
          <div className=' rounded-lg bg-white p-8'>
            {modal === 'Choose Databases' ? (
              <Database
                database={database}
                changeChandler={databaseHandler}
                setModal={setModal}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </>
  )
}

const menuItem = [
  {
    icon_link: settingIcon,
    title: 'Choose Databases',
    link: '',
  },
  {
    icon_link: layerIcon,
    title: 'Browse Publications',
    link: '/publications',
  },
  {
    icon_link: helpCircleIcon,
    title: 'Help and Support',
    link: '',
  },
  {
    icon_link: logoutIcon,
    title: 'Logout',
    link: '',
  },
]

const MenuDropDown = ({ modalHandler }) => {
  const navigate = useNavigate()
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
            <p className='text-start font-inter text-medium font-semibold text-blue-bluewood hover:cursor-pointer'>
              AIIMS, Nagpur
            </p>
            <span className='-mt-1 text-medium text-gray-500 hover:cursor-pointer'>
              aiimsnagpur@gmail.com
            </span>
          </div>
        </div>
        {menuItem.map((item, index) => {
          return (
            <button
              onClick={() => {
                if (item.link === '') {
                  modalHandler(item.title)
                  console.log(item.title)
                } else {
                  navigate(item.link)
                }
              }}
              key={index}
              className='flex items-center border-t-[0.5px] bg-menu-background p-3 font-dm-sans text-medium font-medium leading-5 outline-none transition-all hover:cursor-pointer hover:bg-menu-hover-background'
            >
              <img src={item.icon_link} className='w-5 object-contain' alt='' />
              <p className='pl-2 text-blue-bluewood'>{item.title}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
MenuDropDown.propTypes = {
  modalHandler: propTypes.func,
}
export default Navbar
