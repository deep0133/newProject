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
  const [cardData, setCardData] = useState([
    {
      id: 1,
      badgeColor: '#2A67FF',
      badgeValue: 'e-Journals',
      title: 'Journal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3_1: 'Date of Publsih :',
      point_3_2: '01 April 2015',
    },
    {
      id: 2,
      badgeColor: '#C19300',
      badgeValue: 'eBook',
      title: 'Journal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3_1: 'Date of Publsih :',
      point_3_2: '01 April 2015',
    },
    {
      id: 3,
      badgeColor: '#D12720',
      badgeValue: 'eArtical',
      title: 'Aritcal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3_1: 'Date of Publsih :',
      point_3_2: '01 April 2015',
    },
    {
      id: 4,
      badgeColor: '#000360',
      badgeValue: 'eArtical',
      title: 'Journal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3_1: 'Date of Publsih :',
      point_3_2: '01 April 2015',
    },
  ])

  const [mobileFilterCss, setMobileFilterCss] = useState('-translate-x-[110%]')

  const [publicationData, setPublicationData] = useState([
    {
      id: 1,
      status: false,
      label: 'e-Journals',
      number: 55,
    },
    {
      id: 2,
      status: false,
      label: 'e-Books',
      number: 44,
    },
    {
      id: 3,
      status: true,
      label: 'Videos',
      number: 33,
    },
    {
      id: 4,
      status: false,
      label: 'Dissertations and Thesis',
      number: 22,
    },
    {
      id: 5,
      status: true,
      label: 'e-Articles',
      number: 11,
    },
    {
      id: 6,
      status: false,
      label: 'Other e-Resources',
      number: 11,
    },
  ])

  const [publicationDateData, setPublicationDateData] = useState([
    {
      id: 1,
      status: false,
      label: 'Last Week',
    },
    {
      id: 2,
      status: false,
      label: 'Last Month',
    },
    {
      id: 3,
      status: false,
      label: 'Last 3 Months',
    },
    {
      id: 4,
      status: false,
      label: 'Last 6 Months',
      number: 22,
    },
    {
      id: 5,
      status: false,
      label: 'Last 12 Months',
      number: 11,
    },
  ])

  const [accessKeyData, setAccessKeyData] = useState([
    {
      id: 1,
      status: false,
      label: 'Full Text Only',
    },
    {
      id: 2,
      status: false,
      label: 'Open Access Content',
    },
    {
      id: 3,
      status: true,
      label: 'Partial Subscribed Content',
    },
    {
      id: 4,
      status: false,
      label: 'Abstract Only',
    },
    {
      id: 5,
      status: true,
      label: 'Subscribed Content',
    },
    {
      id: 6,
      status: true,
      label: 'Indexed Journals',
    },
  ])

  const [subjectData, setSubjectData] = useState([
    {
      id: 1,
      open: false,
      title: 'Medical',
      number: 1800,
      innerContent: [
        {
          id: 1,
          status: false,
          label: 'Human Anatomy and Physiology',
        },
        {
          id: 2,
          status: false,
          label: 'Remedial Biology',
        },
        {
          id: 3,
          status: false,
          label: 'Biochemistry',
        },
        {
          id: 4,
          status: false,
          label: 'Anatomy',
        },
      ],
    },
    {
      id: 2,
      open: false,
      title: 'Dental',
      number: 555,
      innerContent: [
        {
          id: 1,
          status: false,
          label: 'AAAA',
        },
        {
          id: 2,
          status: false,
          label: 'BBBB',
        },
        {
          id: 3,
          status: false,
          label: 'CCCC',
        },
        {
          id: 4,
          status: false,
          label: 'DDDD',
        },
      ],
    },
    {
      id: 3,
      open: false,
      title: 'Nursing',
      number: 888,
      innerContent: [
        {
          id: 1,
          status: false,
          label: 'Human Anatomy and Physiology',
        },
        {
          id: 2,
          status: false,
          label: 'Remedial Biology',
        },
        {
          id: 3,
          status: false,
          label: 'Biochemistry',
        },
        {
          id: 4,
          status: false,
          label: 'Anatomy',
        },
      ],
    },
    {
      id: 4,
      open: false,
      title: 'Pharma',
      number: 555,
      innerContent: [
        {
          id: 1,
          status: false,
          label: 'Human Anatomy and Physiology',
        },
        {
          id: 2,
          status: false,
          label: 'Remedial Biology',
        },
        {
          id: 3,
          status: false,
          label: 'Biochemistry',
        },
        {
          id: 4,
          status: false,
          label: 'Anatomy',
        },
      ],
    },
  ])

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
    <>
      <div className='explore-page sm:blue-gradient sm:text-light-pureWhite bg-light-pureWhite text-black sm:py-5'>
        <div className='responsiveWidth mx-auto flex  flex-col sm:flex-row sm:items-center lg:w-[80%]'>
          <div className='font-feature-setting text-23px mr-10 flex flex-shrink-0 flex-col py-8 font-dm-sans font-medium leading-9 tracking-[-1px]'>
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
        <div className='col-span-full flex justify-between filter'>
          <div className='flex items-center font-dm-sans sm:gap-8'>
            <h3 className='text-nowrap  text-16px font-medium leading-5'>
              Applied Filter
            </h3>
            <div className='hidden  items-center gap-1 sm:flex'>
              <img src={clearIcon} alt='' />
              <p className='text-red-brightRed text-medium font-medium leading-5 underline '>
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

            <div className='sort border-light-lilac bg-light-lilac box-shadow flex shrink-0 items-center gap-2 rounded-lg border px-4 py-[10px] text-xs font-semibold'>
              <div className='lines flex flex-col items-center justify-center space-y-[2px]'>
                <div className='line-1 w-3 rounded-full border-b-2 border-black'></div>
                <div className='line-2 w-2 rounded-full border-b-2 border-black'></div>
                <div className='line-3 w-1 rounded-full border-b-2 border-black'></div>
              </div>
              <div className='flex shrink-0 gap-1 font-dm-sans text-medium font-medium leading-5'>
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
        {/* ---------------------------Left-Side---------------------------  : Mobile : side bar issue ----Pending----*/}
        <div
          className={`left border-blue-darkO2 bg-white filter duration-300 ${mobileFilterCss} absolute top-[497px] z-40 col-span-full rounded-md border max-[343px]:top-[448px] sm:relative sm:top-0 sm:col-span-5 sm:translate-x-0 md:col-span-4`}
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
                    <div className='text-grey-brightGrey flex space-x-1 font-dm-sans text-medium font-medium leading-5'>
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
            <h3 className='text text-18px pb-5 font-dm-sans font-medium leading-5 text-black'>
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
                    ' date-box-shadow border-grey-darkGreyO2 text-grey-darkGrey focus:border-blue-clearO5 flex-shrink rounded-[9px] border bg-white  px-3 py-2 text-xs outline-none'
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
                    ' date-box-shadow border-grey-darkGreyO2 text-grey-darkGrey focus:border-blue-clearO5 flex-shrink rounded-[9px] border bg-white  px-3 py-2 text-xs outline-none'
                  }
                />
              </div>
            </div>
            <div className='checkbox-btns flex flex-col gap-2 pt-3 text-sm'>
              {publicationDateData.map((item, index, arr) => {
                return (
                  <div
                    key={index}
                    className='text-grey-brightGrey flex space-x-1 font-dm-sans text-medium font-medium leading-5'
                  >
                    <Input
                      type='radio'
                      name='radio'
                      checked={item.status}
                      onChange={() =>
                        checkBoxHandler(item.id, 'PublicationDate', arr)
                      }
                      className={
                        ' accent-blue-purple flex-shrink rounded-lg border px-3 py-2 text-xs outline-none'
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
            <h3 className='text text-18px font-dm-sans font-medium leading-5 text-black'>
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
            <h3 className='text text-18px my-2 font-dm-sans font-medium leading-5 text-black'>
              Access Key
            </h3>
            {accessKeyData.map((item, index, arr) => {
              return (
                <div className='flex justify-between' key={index}>
                  <div
                    key={index}
                    className='text-grey-brightGrey flex items-baseline space-x-1 font-dm-sans text-medium font-medium leading-5'
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
    </>
  )
}
