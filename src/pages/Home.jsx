import { useEffect, useState } from 'react'
import homeBackgroundImage from '../assets/images/home-background.png'

import blueArrowIcon from '../assets/svg/blue_arrow.svg'
import searchIcon from '../assets/svg/search-normal.svg'
import crossIcon from '../assets/svg/cross.svg'
import starIcon from '../assets/svg/star.svg'
import downArrowIcon from '../assets/svg/downArrow.svg'
import recentlyAddedIcon from '../assets/svg/recentlyAddedBag.svg'

import GeneralData from '../components/HomePageComponent/GeneralData'
import MedicalCard from '../components/HomePageComponent/MedicalCard'
import ResourceCard from '../components/HomePageComponent/ResourceCard'
import CategoryCard from '../components/HomePageComponent/CategoryCard'
import RecentlyCard from '../components/HomePageComponent/RecentlyCard'
import MostViewedCard from '../components/HomePageComponent/MostViewedCard'
import { Link } from 'react-router-dom'

export default function Home() {
  const [medicalData, setMedicalData] = useState([
    {
      id: 1,
      value: 'Medical',
      selected: false,
    },
    {
      id: 2,
      value: 'Pharmacy',
      selected: false,
    },
    {
      id: 3,
      value: 'Nursing',
      selected: true,
    },
    {
      id: 4,
      value: 'Dental',
      selected: false,
    },
    {
      id: 5,
      value: 'Science',
      selected: false,
    },
  ])

  const [categoryData, setCategoryData] = useState([
    {
      id: 1,
      value: 'Cardiology',
      selected: false,
      number: 44,
    },
    {
      id: 2,
      value: 'Community Medicine',
      selected: true,
      number: 555,
    },
    {
      id: 3,
      value: 'Cavid19',
      selected: false,
      number: 22,
    },
    {
      id: 4,
      value: 'Emergency Medicine',
      number: 22,
      selected: false,
    },
    {
      id: 5,
      value: 'Pharmacology',
      selected: false,
      number: 44,
    },
    {
      id: 6,
      value: 'Ophthalmology',
      selected: false,
      number: 555,
    },
    {
      id: 7,
      value: 'Surgery',
      selected: false,
      number: 22,
    },
    {
      id: 8,
      value: 'Surgery',
      selected: false,
      number: 555,
    },
  ])

  const [resourceCardData, setResourceCardData] = useState([
    {
      id: 1,
      title: 'Acta Neurologica Scandinavica',
      desc: 'By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    },
    {
      id: 2,
      title: 'Advanced Gut & Microbiome Research',
      desc: 'By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    },
    {
      id: 3,
      title:
        'Artificial Intelligence In Cancer Diagnostics And Therapy: Current Perspectives',
      desc: 'By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow.By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow.By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    },
    {
      id: 4,
      title:
        'Artificial Intelligence In Cancer Diagnostics And Therapy: Current Perspectives',
      desc: 'By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    },
    {
      id: 5,
      title:
        'Artificial Intelligence In Cancer Diagnostics And Therapy: Current Perspectives',
      desc: 'By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    },
    {
      id: 6,
      title:
        'Artificial Intelligence In Cancer Diagnostics And Therapy: Current Perspectives',
      desc: 'By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
    },
  ])

  const [recentlyCardData, setRecentlyCardData] = useState([
    {
      id: 1,
      imageLink: homeBackgroundImage,
      title:
        'Children of AI: A Protocol for Managing the Born-Digital Ephemera Spawned by Generative AI Language Models.',
      date: 'Added on: December 2023',
    },
    {
      id: 2,
      imageLink: homeBackgroundImage,
      title:
        'Pharmaceutical and non-pharmaceutical interventions for controlling the COVID-19 pandemic',
      date: 'Added on: July 2022',
    },
    {
      id: 3,
      imageLink: homeBackgroundImage,
      title:
        'Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation',
      date: 'Added on: July 2022',
    },
    {
      id: 4,
      imageLink: homeBackgroundImage,
      title:
        'Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation',
      date: 'Added on: July 2022',
    },
    {
      id: 5,
      imageLink: homeBackgroundImage,
      title:
        'Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation',
      date: 'Added on: July 2022',
    },
    {
      id: 6,
      imageLink: homeBackgroundImage,
      title:
        'Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation',
      date: 'Added on: July 2022',
    },
  ])

  const [mostViewedCardData, setMostViewedCardData] = useState([
    {
      id: 1,
      title: 'Access, sources and value of new medical',
      tag: 'Medical',
    },
    {
      id: 2,
      title: 'Journal of Emergencies Trauma and Shock',
      tag: 'Journal',
    },
    {
      id: 3,
      title: 'Trauma and Shock',
      tag: 'Ebook',
    },
    {
      id: 4,
      title: 'Emergencies Trauma and Shock',
      tag: 'Video',
    },
    {
      id: 5,
      title: 'Journal of Emergencies Trauma and Shock',
      tag: 'Journal',
    },
    {
      id: 6,
      title: 'Trauma and Shock',
      tag: 'Ebook',
    },
    {
      id: 7,
      title: 'Emergencies Trauma and Shock',
      tag: 'Video',
    },
  ])

  useEffect(() => {
    document.title = 'DVL - Project | Home'
  }, [])

  const selectItemHandler = (id, dataType) => {
    const dataArr = dataType === 'medical' ? medicalData : categoryData
    const updatedData = dataArr.map((item) => {
      if (item.selected === true || item.id === id) {
        item.selected = !item.selected
      }
      return item
    })

    if (dataType === 'category') {
      setCategoryData(updatedData)
    } else if (dataType === 'medical') {
      setMedicalData(updatedData)
    }
  }

  return (
    <section className='w-full'>
      <section className='hero home-background-image relative flex  w-full flex-col items-center md:justify-center'>
        <div className='mx-[5%] mt-[150px] pb-10  lg:mx-0 lg:pb-0'>
          <h2 className='font-feature-setting text-center font-dm-sans text-large font-bold leading-normal tracking-normal text-light-pureWhite sm:w-auto '>
            You have subscribed DVL Medical
          </h2>
          <p className='text-text font-feature-setting pb-5 text-center font-dm-sans text-[14px] font-[400] leading-8 text-light-pureWhite'>
            Here in the database you will get each and every journal for any
            subject field you need
          </p>
          <div className='relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-5 md:mx-auto'>
            <Link
              to={'/explore'}
              className='order-last flex h-[42px] w-[127px] items-center justify-center rounded-[34px] border border-white border-opacity-20 bg-blue-clear sm:order-first'
            >
              <div className='select-input relative  flex h-8 w-[88px] flex-shrink-0 items-center justify-between gap-3  text-white'>
                <p>Anywhere</p>
                <span className='mt-1 rotate-90 scale-y-150'>&gt;</span>
              </div>
            </Link>
            <Link
              to={'/explore'}
              className='h-[42px] flex-grow cursor-pointer rounded-full border bg-light-pureWhite py-2 pl-5 pr-14 outline-none lg:w-[676px]'
            >
              <p className='text-black opacity-40'>
                Search Articles,Journals,Videos etc
              </p>
            </Link>
            <Link
              to={'/explore'}
              className='icon absolute right-1 top-1 cursor-pointer'
            >
              <img src={crossIcon} alt='' className='object-contain' />
              <Link
                to={'/advanceSearch'}
                className='
              font-feature-setting absolute right-4 z-10 text-nowrap pt-4 font-dm-sans text-medium font-medium  leading-8 text-light-pureWhite underline outline-none'
              >
                Advance Search
              </Link>
            </Link>
          </div>
        </div>
        <div className='responsiveWidth trust-us sticky mx-auto grid gap-3 py-10 sm:grid-cols-2 sm:gap-5 sm:pt-20 lg:grid-cols-4 lg:pt-24 '>
          <GeneralData />
        </div>
      </section>

      {/* Browse All Resource */}
      <section className='mx-3 mt-3 flex flex-col items-center justify-center overflow-hidden rounded-t-[9px] border border-b-0 border-blue-darkO1 bg-blue-clearO7 py-7 sm:py-14'>
        <div className='font-feature-setting flex flex-col font-dm-sans text-blue-deepCove'>
          <h2 className='mb-1 text-center text-30px font-bold tracking-[-1px]  '>
            Browse all resources by discipline
          </h2>
          <p className='mb-5 mt-2 text-center text-16px  font-normal leading-6'>
            Select your subscribed Databases and find resources
          </p>
        </div>

        <div className='medical-menu sm:responsiveWidth flex place-items-end justify-center gap-5'>
          <img
            src={blueArrowIcon}
            alt='previous'
            className='rotate-180 lg:hidden'
          />
          <div className='no-scrollbar mt-5 flex w-[137px] gap-2 overflow-auto scroll-smooth lg:w-fit '>
            <MedicalCard
              medicalData={medicalData}
              onClickHandler={selectItemHandler}
            />
          </div>
          <img src={blueArrowIcon} alt='next' className='lg:hidden' />
        </div>
      </section>

      {/* Category and Resource */}
      <section className='mx-1 rounded-b-[9px] border  border-t-0 border-blue-darkO1 bg-blue-clearO7 py-1 sm:mx-3 '>
        <div className='responsiveWidth mx-auto mb-8 grid grid-cols-9 gap-5'>
          <div className='col-span-full flex place-content-end gap-3 font-dm-sans text-medium font-medium leading-6 text-blue-deepCove'>
            <button className='flex h-[40px] w-[154px] flex-shrink-0 items-center justify-center gap-2 rounded-lg border border-blue-clearO1 bg-blue-clearO1 px-[14px] py-[10px]'>
              ResourceType
              <img
                src={downArrowIcon}
                className='h-5 w-5 object-cover brightness-0'
              />
            </button>
            <button className='bg-light-whiteO4 flex flex-shrink-0 items-center rounded-lg border border-blue-clearO2 px-4 py-2 '>
              Show All
            </button>
          </div>
          <div className='left col-span-full space-y-2 md:col-span-3'>
            <CategoryCard
              categoryData={categoryData}
              onClickHandler={selectItemHandler}
            />
          </div>
          <div className='col-span-full flex md:col-span-1'>
            <p className=' mx-auto my-5 w-full border border-dashed border-black/50 md:my-0 md:h-full md:w-0'></p>
          </div>
          <div className='right col-span-full md:col-span-5'>
            <div className='grid gap-3 sm:grid-cols-2  lg:grid-cols-3'>
              <ResourceCard resourceCardData={resourceCardData} />
            </div>
          </div>
        </div>
      </section>

      <section className='mx-1 my-3 grid gap-3 sm:mx-3 md:grid-cols-12'>
        <div className='left col-span-full grid grid-cols-7 rounded-[9px] border border-blue-darkO1 bg-blue-clearO7 md:col-span-7'>
          <div className='col-span-full mx-auto flex w-[95%]  sm:w-[95%] md:col-span-7 md:col-start-2 md:w-auto'>
            <div className='left-recently flex-grow px-2 pt-5 md:-ml-10 md:p-5'>
              <h2 className='font-feature-settings relative flex w-fit items-baseline gap-2 px-1 py-2 font-dm-sans text-24px font-bold tracking-[-1px] text-blue-deepCove'>
                <img src={recentlyAddedIcon} alt='' />
                <p className=''> Recently Added Resources</p>
                <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-blue-deepCove'></div>
              </h2>
              <div className='recently-container custom-scroll-bar mb-5 mt-10 max-h-[470px] space-y-4 overflow-y-auto overflow-x-hidden '>
                <RecentlyCard recentlyCardData={recentlyCardData} />
              </div>
            </div>
          </div>
        </div>
        <div className='right col-span-full grid rounded-[9px] border border-blue-darkO1 bg-blue-clearO7 md:col-span-5 md:grid-cols-5'>
          <div className='col-span-full mx-auto w-[95%] py-5 sm:w-[90%] md:col-span-4 md:mr-[-19px] md:w-full md:pl-5 lg:mr-0'>
            <div className='right-recently flex-grow md:max-w-[474px]'>
              <h2 className='font-feature-settings relative mb-6 flex w-fit items-baseline gap-2 px-1 py-2 font-dm-sans text-24px font-bold tracking-[-1px] text-blue-deepCove'>
                <img src={starIcon} alt='' />
                <p> Most Viewed</p>
                <div className='absolute bottom-0 left-0 right-0 h-[1px] bg-blue-deepCove'></div>
              </h2>
              <div className='most-viewed-container'>
                <MostViewedCard mostViewedCardData={mostViewedCardData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
