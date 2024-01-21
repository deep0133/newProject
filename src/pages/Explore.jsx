import { useState } from 'react'
import CheckBox from '../components/CheckBox'
import SelectedFilter from '../components/ExplorePageComponent/SelectedFilter'
import SubjectComponent from '../components/ExplorePageComponent/SubjectComponent'
import IconCard from '../components/ExplorePageComponent/IconCard'
import ItemCard from '../components/ExplorePageComponent/ItemCard'

import journalIcon from '../assets/svg/journals.svg'
import EbookIcon from '../assets/svg/e-book.svg'
import videoIcon from '../assets/svg/video.svg'
import musicLibraryIcon from '../assets/svg/music-library.svg'
import layerIcon from '../assets/svg/layer.svg'
import clearIcon from '../assets/svg/clear.svg'
import filterIcon from '../assets/svg/filter.svg'
import greenLockIcon from '../assets/svg/greenLock.svg'

export default function Explore() {
  const [iconsData, setIconsData] = useState([
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
      title: 'Audio',
      iconLink: musicLibraryIcon,
      numbers: 700,
      bgColor: '#B7372E',
    },
    {
      id: 5,
      title: 'Others Resources',
      iconLink: layerIcon,
      numbers: 455,
      bgColor: '#00035B',
    },
  ])

  const [cardData, setCardData] = useState([
    {
      id: 1,
      badgeColor: 'blue',
      badgeValue: 'e-Journals',
      title: 'Journal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3: 'Date of Publsih : 01 April 2015',
    },
    {
      id: 2,
      badgeColor: 'red',
      badgeValue: 'eBook',
      title: 'Journal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3: 'Date of Publsih : 01 April 2015',
    },
    {
      id: 3,
      badgeColor: 'orange',
      badgeValue: 'eArtical',
      title: 'Aritcal of Prosthodontics',
      point_1: 'Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow',
      point_2: 'Chemie Ingenieur TechnikVolume 87, Issue 5',
      point_3: 'Date of Publsih : 01 April 2015',
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
      status: true,
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
      status: true,
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
      open: true,
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
      if (item.id === id) item.status = !item.status
      return item
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
      return (
        prev &&
        prev.map((item) => {
          item.open = false
          if (item.id === id) item.open = !item.open
          return item
        })
      )
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
      <div className='explore-page bg-white  font-semibold text-black sm:bg-blue-deepCove sm:py-5 sm:text-white'>
        <div className='mx-auto flex w-[95%] max-w-[80rem] flex-col sm:w-[90%] sm:flex-row sm:items-center lg:w-[80%]'>
          <div className='mr-8 flex shrink-0 flex-col py-8 text-lg'>
            <h3 className='flex-shrink-0'>
              Showing <span className='font-bold'>1000</span> Results for{' '}
            </h3>
            <h3 className='font-bold underline'>
              {'"'}Pharmacy{`"`}
            </h3>
          </div>
          <div className='cards flex flex-wrap gap-5 px-3'>
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
      <div className='filteration-and-data mx-auto grid w-[95%] max-w-[80rem] grid-cols-12 gap-5 py-8 duration-300 sm:w-[90%] lg:w-[80%]'>
        <div className='col-span-full flex justify-between filter'>
          <div className='flex items-center sm:gap-8'>
            <h3 className='text-nowrap font-medium'>Applied Filter</h3>
            <div className=' hidden  items-center gap-1 sm:flex'>
              <img src={clearIcon} alt='' />
              <p className='text-sm font-semibold text-red-400 underline'>
                Clear All
              </p>
            </div>
          </div>
          <div className='flex flex-shrink-0 gap-2'>
            <i
              onClick={filterationHandler}
              className='z-50 flex items-center justify-center rounded-md border px-2 sm:hidden'
            >
              <img src={filterIcon} alt='' />
            </i>

            <div className='sort flex shrink-0 items-center  gap-2 rounded-md border p-3 text-xs font-semibold'>
              <div className='lines flex flex-col items-center justify-center space-y-[2px]'>
                <div className='line-1 w-3 rounded-full border-b-2 border-black'></div>
                <div className='line-2 w-2 rounded-full border-b-2 border-black'></div>
                <div className='line-3 w-1 rounded-full border-b-2 border-black'></div>
              </div>
              <div className='flex shrink-0 gap-1'>
                <p className='text-gray-400'>Sort By : </p>
                <p>Relevance</p>
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
          className={`left bg-white filter duration-300 ${mobileFilterCss} absolute top-[370px] z-50 col-span-full rounded-md border  max-[343px]:top-[448px] sm:relative sm:top-0 sm:col-span-4 sm:translate-x-0`}
        >
          <div className='publication-type mx-2 border-b p-5'>
            <h3 className='text pb-2 font-semibold'>Publication Type</h3>
            <div className='mt-2 flex flex-col gap-2 '>
              {publicationData.map((item, index, arr) => {
                return (
                  <div
                    key={index}
                    className='flex items-center justify-between text-sm'
                  >
                    <div className='flex space-x-1'>
                      <CheckBox
                        id={item.id}
                        checkBoxHandler={() =>
                          checkBoxHandler(item.id, 'Publication', arr)
                        }
                        checked={item.status}
                      />
                      <label className='text-gray-600'>{item.label}</label>
                    </div>
                    <span className='text-gray-700'>{item.number}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='publication-date mx-2 border-b p-5'>
            <h3 className='text pb-5 font-semibold'>Publication Date</h3>
            <div className='flex flex-wrap gap-2'>
              <div className='date-input-from flex flex-col'>
                <label htmlFor='from' className='pb-2 text-sm '>
                  From:
                </label>
                <input
                  type='date'
                  name='from'
                  placeholder={'DD/MM/YY'}
                  className={
                    ' flex-shrink rounded-lg border border-blue-400  px-3 py-2 text-xs accent-blue-500 outline-none'
                  }
                />
              </div>
              <div className='date-input-from flex flex-col'>
                <label htmlFor='from' className='pb-2 text-sm '>
                  To:
                </label>
                <input
                  type={'date'}
                  name='from'
                  placeholder={'DD/MM/YY'}
                  className={
                    ' flex-shrink rounded-lg border border-blue-400 px-3 py-2 text-xs accent-blue-500 outline-none'
                  }
                />
              </div>
            </div>
            <div className='checkbox-btns flex flex-col gap-2 pt-3 text-sm'>
              {publicationDateData.map((item, index, arr) => {
                return (
                  <div key={index} className='flex space-x-1'>
                    <CheckBox
                      id={item.id}
                      checkBoxHandler={() =>
                        checkBoxHandler(item.id, 'PublicationDate', arr)
                      }
                      checked={item.status}
                    />
                    <label className='text-gray-600'>{item.label}</label>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='subject mx-2 border-b p-5'>
            <h3 className='text font-semibold'> Subject</h3>
            <div className='flex flex-col gap-2 '>
              {/* Drawer */}
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
            <h3 className='text my-2 font-semibold'> Access Key</h3>
            {accessKeyData.map((item, index, arr) => {
              return (
                <div className='flex justify-between' key={index}>
                  <div key={index} className='flex space-x-1'>
                    <CheckBox
                      id={item.id}
                      checkBoxHandler={() =>
                        checkBoxHandler(item.id, 'PublicationDate', arr)
                      }
                      checked={item.status}
                    />
                    <label className='text-gray-600'>{item.label}</label>
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
        <div className='right col-span-full rounded-md border sm:col-span-8'>
          {cardData.map((item) => {
            return (
              <ItemCard
                key={item.id}
                badgeColor={item.badgeColor}
                badgeValue={item.badgeValue}
                title={item.title}
                point_1={item.point_1}
                point_2={item.point_2}
                point_3={item.point_3}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
