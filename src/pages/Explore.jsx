import { useState } from 'react'
import CheckBox from '../components/CheckBox'
import Input from '../components/Input'
import SelectedFilter from '../components/ExplorePageComponent/SelectedFilter'
import SubjectComponent from '../components/ExplorePageComponent/SubjectComponent'
import IconCard from '../components/ExplorePageComponent/IconCard'
import ItemCard from '../components/ExplorePageComponent/ItemCard'

import journalIcon from '../assets/svg/journals.svg'
import EbookIcon from '../assets/svg/e-book.svg'
import videoIcon from '../assets/svg/video.svg'
import layerIcon from '../assets/svg/layer.svg'
import clearIcon from '../assets/svg/clear.svg'
import filterIcon from '../assets/svg/filter.svg'
import greenLockIcon from '../assets/svg/greenLock.svg'

import {
  PublicationData,
  PublicationDateData,
  AccessKeyData,
  SubjectData,
  CardData,
} from '../utils/data'

const iconsData = [
  {
    id: 1,
    title: 'e-Journals',
    iconLink: journalIcon,
    numbers: 887,
    bgColor: '#2362ff',
  },
  {
    id: 2,
    title: 'e-Books',
    iconLink: EbookIcon,
    numbers: 556,
    bgColor: '#B18E04',
  },
  {
    id: 3,
    title: 'Videos',
    iconLink: videoIcon,
    numbers: 700,
    bgColor: '#B7372D',
  },
  {
    id: 4,
    title: 'Others Resources',
    iconLink: layerIcon,
    numbers: 455,
    bgColor: '#00035B',
  },
]

export default function Explore() {
  const [mobileFilterCss, setMobileFilterCss] = useState('-translate-x-[110%]')

  const [cardData, setCardData] = useState(CardData)

  const [publicationData, setPublicationData] = useState(PublicationData)

  const [publicationDateData, setPublicationDateData] =
    useState(PublicationDateData)

  const [accessKeyData, setAccessKeyData] = useState(AccessKeyData)

  const [subjectData, setSubjectData] = useState(SubjectData)

  const checkBoxHandler = (id, selectionType, items) => {
    const updatedSelectionType = items.map((item) => {
      if (selectionType === 'PublicationDate') {
        if (item.status === true || item.id === id) {
          return { ...item, status: !item.status }
        }
        return { ...item }
      }
      if (item.id === id) return { ...item, status: !item.status }
      return { ...item }
    })

    if (selectionType === 'Publication') {
      setPublicationData(updatedSelectionType)
    } else if (selectionType === 'PublicationDate') {
      setPublicationDateData(updatedSelectionType)
    } else if (selectionType === 'AccessKey') {
      setAccessKeyData(updatedSelectionType)
    }
  }

  const subjectHandler = (id) => {
    setSubjectData((prev) => {
      return prev.map((item) => {
        if (item.open === true || item.id === id) {
          console.log('currrent drop down id : ', id, item)
          return { ...item, open: !item.open }
        }
        return { ...item }
      })
    })
  }

  const filterationHandler = () => {
    if (mobileFilterCss.includes('-translate-x-[110%]')) {
      setMobileFilterCss('translate-x-[0%]')
    } else {
      setMobileFilterCss('-translate-x-[110%]')
    }
  }

  return (
    <div className='min-h-screen'>
      <div className='explore-page sm:blue-gradient bg-light-pureWhite text-black sm:py-5 sm:text-light-pureWhite'>
        <div className='responsiveWidth mx-auto flex  flex-col sm:flex-row sm:items-center lg:w-[80%]'>
          <div className='font-feature-setting mr-10 flex flex-shrink-0 flex-col py-8 font-dm-sans text-23px font-medium leading-9 tracking-[-1px]'>
            <h3>
              Showing <span className='font-bold italic'> 1000 </span>Results
              for
            </h3>
            <span className='font-bold italic underline'>
              {'"'}Pharmacy{`"`}
            </span>
          </div>
          <div className='cards flex flex-wrap gap-5 px-3 py-5'>
            {iconsData.map((item) => {
              return (
                <IconCard
                  key={item.id}
                  title={item.title}
                  number={item.numbers}
                  iconLink={item.iconLink}
                  bgColor={item.bgColor}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* 2nd Component : Filteration */}
      <div className='filteration-and-data responsiveWidth mx-auto grid grid-cols-12 gap-5 py-8 duration-300'>
        <div className='col-span-full flex justify-end filter min-[400px]:justify-between'>
          <div className='hidden items-center font-dm-sans min-[400px]:flex sm:gap-8'>
            <h3 className='text-nowrap  text-16px font-medium leading-5'>
              Applied Filter
            </h3>
            <div className='hidden  items-center gap-2 sm:flex'>
              <img src={clearIcon} alt='' />
              <p className='text-medium font-medium leading-5 text-red-brightRed underline '>
                Clear All
              </p>
            </div>
          </div>
          <div className='flex flex-shrink-0 gap-2'>
            <img
              onClick={filterationHandler}
              src={filterIcon}
              className='z-50 flex items-center justify-center rounded-md border px-2 sm:hidden'
              alt=''
            />

            <div className='sort box-shadow flex shrink-0 items-center gap-2 rounded-lg border border-light-lilac bg-light-lilac px-4 py-[10px] text-xs font-semibold min-[400px]:gap-2'>
              <div className='lines flex flex-col items-center justify-center space-y-[2px]'>
                <div className='line-1 w-3 rounded-full border-b-2 border-black'></div>
                <div className='line-2 w-2 rounded-full border-b-2 border-black'></div>
                <div className='line-3 w-1 rounded-full border-b-2 border-black'></div>
              </div>
              <div className='flex shrink-0 gap-[2px] font-dm-sans text-medium font-medium leading-5'>
                <p className='text-black/50'>Sort By : </p>
                <p className='text-black'>Relevance</p>
              </div>
            </div>
          </div>
        </div>
        <div className='selected-filters col-span-full flex flex-wrap items-start justify-between '>
          <div className='flex w-fit flex-wrap gap-5'>
            <SelectedFilter title={'Medical'} />
            <SelectedFilter title={'Anatomy'} />
            <SelectedFilter title={'Dental'} />
          </div>
        </div>
        {/* ---------------------------Left-Side--------------------------- */}
        <div
          className={`left border-blue-darkO2  bg-white filter duration-300 ${mobileFilterCss} absolute top-[557px] z-40 col-span-full rounded-md border min-[399px]:top-[497px] min-[592px]:top-[404px] sm:relative sm:top-0 sm:col-span-5 sm:translate-x-0 md:col-span-4`}
        >
          <div className='publication-type mx-2 border-b p-5'>
            <h3 className='text pb-2 font-dm-sans text-16px font-medium leading-5 text-black'>
              Publication Type
            </h3>
            <div className='mt-2 flex flex-col gap-2 '>
              {publicationData.map((item, index, arr) => {
                return (
                  <div
                    key={index}
                    className='flex items-center justify-between text-sm'
                  >
                    <div className='flex space-x-1 font-dm-sans text-medium font-medium leading-5 text-grey-brightGrey'>
                      <CheckBox
                        id={item.id}
                        checkBoxHandler={() =>
                          checkBoxHandler(item.id, 'Publication', arr)
                        }
                        checked={item.status}
                      />
                      <label className={`${item.status ? 'opacity-50' : ''}`}>
                        {item.label}
                      </label>
                    </div>
                    <span className='text-grey-brightGrey'>{item.number}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='publication-date mx-2 border-b p-5'>
            <h3 className='text pb-5 font-dm-sans text-18px font-medium leading-5 text-black'>
              Publication Date
            </h3>
            <div className='flex flex-wrap gap-2 font-dm-sans'>
              <div className='date-input-from flex flex-col '>
                <label
                  htmlFor='from'
                  className='pb-2 text-xSmall font-medium leading-6'
                >
                  From:
                </label>
                <input
                  type='date'
                  name='from'
                  placeholder={'DD/MM/YY'}
                  className={
                    ' date-box-shadow flex-shrink rounded-[9px] border border-grey-darkGreyO2 bg-white px-3 py-2  text-xs text-grey-darkGrey outline-none focus:border-blue-clearO5'
                  }
                />
              </div>
              <div className='date-input-to flex flex-col'>
                <label
                  htmlFor='to'
                  className='pb-2 text-xSmall font-medium leading-6 '
                >
                  To:
                </label>
                <input
                  type={'date'}
                  name='to'
                  placeholder={'DD/MM/YY'}
                  className={
                    ' date-box-shadow flex-shrink rounded-[9px] border border-grey-darkGreyO2 bg-white px-3 py-2  text-xs text-grey-darkGrey outline-none focus:border-blue-clearO5'
                  }
                />
              </div>
            </div>
            <div className='checkbox-btns flex flex-col gap-2 pt-3 text-sm'>
              {publicationDateData.map((item, index, arr) => {
                return (
                  <div
                    key={index}
                    className='flex space-x-1 font-dm-sans text-medium font-medium leading-5 text-grey-brightGrey'
                  >
                    <Input
                      type='radio'
                      name='radio'
                      checked={item.status}
                      onChange={() =>
                        checkBoxHandler(item.id, 'PublicationDate', arr)
                      }
                      className={
                        ' flex-shrink rounded-lg border px-3 py-2 text-xs accent-blue-purple outline-none'
                      }
                    />
                    <label className={`${item.status ? 'opacity-50' : ''}`}>
                      {item.label}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='subject mx-2 border-b p-5'>
            <h3 className='text font-dm-sans text-18px font-medium leading-5 text-black'>
              Subject
            </h3>
            <div className='flex flex-col gap-2 '>
              {/* Drop Down */}
              {subjectData.map((subject, idx) => {
                return (
                  <SubjectComponent
                    key={idx}
                    subject={subject}
                    subjectHandler={subjectHandler}
                    checkBoxHandler={checkBoxHandler}
                  />
                )
              })}
            </div>
          </div>

          <div className='access-key mx-2 flex flex-col gap-2 p-3 text-sm'>
            <h3 className='text my-2 font-dm-sans text-18px font-medium leading-5 text-black'>
              Access Key
            </h3>
            {accessKeyData.map((item, index, arr) => {
              return (
                <div className='flex justify-between' key={index}>
                  <div
                    key={index}
                    className='flex items-baseline space-x-1 font-dm-sans text-medium font-medium leading-5 text-grey-brightGrey'
                  >
                    <CheckBox
                      id={item.id}
                      checkBoxHandler={() =>
                        checkBoxHandler(item.id, 'AccessKey', arr)
                      }
                      checked={item.status}
                    />
                    <label className={`${item.status ? 'opacity-50' : ''}`}>
                      {item.label}
                    </label>
                  </div>
                  <div className=''>
                    <img src={greenLockIcon} alt='' />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* ---------------------------Right-Side--------------------------- */}
        <div className='right col-span-full rounded-md border sm:col-span-7 md:col-span-8'>
          {cardData.map((item) => {
            return (
              <ItemCard
                key={item.id}
                badgeColor={item.badgeColor}
                badgeValue={item.badgeValue}
                title={item.title}
                point_1={item.point_1}
                point_2={item.point_2}
                point_3_1={item.point_3_1}
                point_3_2={item.point_3_2}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
