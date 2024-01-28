import { useEffect, useState } from 'react'
import Input from '../components/Input'
import SelectInput from '../components/SelectInput'
import PropTypes from 'prop-types'

import crossIcon from '../assets/svg/cross.svg'
import filterIcon from '../assets/svg/filter.svg'
import arrowIcon from '../assets/svg/arrow.svg'
import searchIcon from '../assets/svg/search-normal.svg'
import greenLockIcon from '../assets/svg/greenLock.svg'
import linkIcon from '../assets/svg/link.svg'
import commaseIcon from '../assets/svg/commase.svg'
import sendIcon from '../assets/svg/send.svg'
import pdfIcon from '../assets/svg/pdf.svg'
import earthIcon from '../assets/svg/earth.svg'
import {
  selectInputOptionValues,
  suggestedTopic,
  PublicationData,
  PublicationDateData,
  SubjectData as TopicData,
  IndexedIn,
  Journal,
  EBook,
  OtherSources,
  Videos,
} from '../utils/data'
import CheckBox from '../components/CheckBox'
import SubjectComponent from '../components/ExplorePageComponent/SubjectComponent'
import Pagination from '../components/Pagination'

export default function Publication() {
  const [search, setSearch] = useState('')
  const [selectInput, setSelectInput] = useState('e-Journal')

  const [mobileFilterCss, setMobileFilterCss] = useState('-translate-x-[110%]')

  const [cardData, setCardData] = useState(Journal)

  const [publicationData, setPublicationData] = useState(PublicationData)

  const [publicationDateData, setPublicationDateData] =
    useState(PublicationDateData)

  const [indexedIn, setIndexedIn] = useState(IndexedIn)

  const [topicData, setTopicData] = useState(TopicData)

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
    } else if (selectionType === 'IndexedIn') {
      setIndexedIn(updatedSelectionType)
    }
  }

  const subjectHandler = (id) => {
    setTopicData((prev) => {
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

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  const selectChangeHandler = (e) => {
    setSelectInput(e.target.value)
  }

  useEffect(() => {
    if (selectInput === 'e-Journal') {
      setCardData(Journal)
    } else if (selectInput === 'e-Books') {
      setCardData(EBook)
    } else if (selectInput === 'Videos') {
      setCardData(Videos)
    } else if (selectInput === 'Other Resources') {
      setCardData(OtherSources)
    }
  }, [selectInput])

  // ------------------Pagination Start------------------

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(cardData.length / 5) // Replace with your actual total number of pages

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const itemsPerPage = 5

  // Function to get the current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return cardData.slice(startIndex, endIndex)
  }

  // ------------------Pagination End------------------

  return (
    <>
      <div className='mx-2 my-8 gap-5 bg-light-pureWhite font-dm-sans md:mx-auto md:w-[85%] lg:w-[82%] lg:gap-8 '>
        <div className='left w-full flex-shrink flex-grow rounded-[9px] border bg-blue-aliceBlue px-[2.5%] py-10 sm:px-[7%]  md:px-6'>
          <h1 className='text-22px font-bold leading-[30px] text-black sm:leading-5'>
            Search and browse full text publications in your selected databases.
          </h1>

          <div className='input-and-select relative mt-6 flex max-w-3xl flex-col gap-3 sm:gap-5 md:flex-row md:items-center'>
            <div className='select-input relative order-last flex w-fit rounded-[34px] bg-blue-azul px-3 py-2 text-medium font-medium leading-6 text-light-pureWhite md:order-first'>
              <SelectInput
                items={selectInputOptionValues.selectInputFour}
                selectChangeHandler={selectChangeHandler}
              />
            </div>
            <Input
              type={'text'}
              name='search'
              onChange={changeHandler}
              value={search}
              placeholder={'Search Articles,Journals,Videos etc'}
              className={
                'w-full  rounded-full border py-2 pl-4 pr-14 text-medium font-medium leading-6 text-black/70 outline-none'
              }
            />
            <div className='icon absolute right-1 top-[3px]'>
              {search.length > 0 ? (
                <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full'>
                  <img
                    src={searchIcon}
                    alt=''
                    className='rounded-full bg-blue-azul object-cover p-2'
                  />
                </div>
              ) : (
                <img src={crossIcon} alt='' className='object-contain' />
              )}
            </div>
          </div>

          <div className='suggested-topic mt-12 flex flex-col text-15px font-medium leading-5 text-blue-darkBlue sm:flex-row md:flex-col lg:flex-row'>
            <p className='text-nowrap py-2'>Suggested Toics :</p>
            <div className='mt-5 flex flex-wrap gap-3 sm:mt-0 sm:pl-3 md:pl-0 lg:pl-3'>
              {suggestedTopic.map((topic) => {
                return (
                  <p
                    key={topic.id}
                    className='topic rounded-[5px] bg-pink-neonPink px-4 py-2'
                  >
                    {topic.name}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='mx-2 my-8 grid grid-cols-12 gap-5 bg-light-pureWhite font-dm-sans sm:mx-auto sm:w-[85%] lg:w-[82%] lg:gap-8'>
        <div className='col-span-full px-[2.5%] sm:flex sm:justify-between sm:px-0'>
          <h3 className='font-feature-setting text-nowrap text-19px font-medium leading-[38px] tracking-[-1px] text-blue-darkBlue '>
            Showing <span className='font-bold italic'> 500 </span> Publications
          </h3>
          <div className='mt-5 flex items-center justify-between gap-3 sm:mt-0 sm:justify-normal'>
            <div className='sort box-shadow flex shrink-0 items-center gap-2 rounded-lg border border-light-lilac bg-light-lilac min-[400px]:gap-2 sm:px-4'>
              <img
                src={filterIcon}
                onClick={filterationHandler}
                alt=''
                className='mr-2 rounded-md border p-2 sm:hidden'
              />
              <div className='lines group flex flex-col items-center justify-center space-y-[2px] rounded-md p-3 hover:bg-blue-darkBlue sm:hover:bg-transparent'>
                <div className='line-1 w-3 rounded-full border-b-2 border-black group-hover:border-light-pureWhite sm:group-hover:border-black'></div>
                <div className='line-2 w-2 rounded-full border-b-2 border-black group-hover:border-light-pureWhite sm:group-hover:border-black'></div>
                <div className='line-3 w-1 rounded-full border-b-2 border-black group-hover:border-light-pureWhite sm:group-hover:border-black'></div>
              </div>
              <div className='hidden shrink-0 text-medium font-medium leading-5 sm:flex'>
                <p className='text-black'>Newest To Oldest</p>
              </div>
            </div>
            <div className='next-previous-page-icon flex items-center gap-3'>
              <div className='flex h-9 w-9 items-center justify-center rounded-[22px] border border-blue-darkO1 '>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className='flex h-9 w-9 items-center justify-center rounded-[22px] border border-blue-darkO1 '
                >
                  <img src={arrowIcon} className='object-cover' alt='' />
                </button>
              </div>
              <div className='flex flex-nowrap text-nowrap text-medium font-normal leading-5 text-grey-pickledBlueWood'>
                <span className='hidden pr-1 sm:block'>Page</span> {currentPage}{' '}
                of {totalPages}
              </div>
              <div className='flex h-9 w-9 rotate-180 items-center justify-center rounded-[22px] border border-blue-darkO1 '>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className='flex h-9 w-9 items-center justify-center rounded-[22px] border border-blue-darkO1 '
                >
                  <img src={arrowIcon} className='object-cover' alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------Left-Side--------------------------- */}
        <div
          className={`left border-blue-darkO2  bg-white filter duration-300 ${mobileFilterCss} absolute top-[1030px] z-40 col-span-full rounded-md border min-[407px]:top-[934px] min-[453px]:top-[905px] sm:relative sm:top-0 sm:col-span-5 sm:translate-x-0 md:col-span-4`}
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
                      <label>{item.label}</label>
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
                    <label>{item.label}</label>
                  </div>
                )
              })}
            </div>
          </div>

          <div className='topic mx-2 border-b p-5'>
            <h3 className='text font-dm-sans text-18px font-medium leading-5 text-black'>
              Topics
            </h3>
            <div className='flex flex-col gap-2 '>
              {/* Drop Down */}
              {topicData.map((topic, idx) => {
                return (
                  <SubjectComponent
                    key={idx}
                    subject={topic}
                    subjectHandler={subjectHandler}
                    checkBoxHandler={checkBoxHandler}
                  />
                )
              })}
            </div>
          </div>

          <div className='indexed-in mx-2 flex flex-col gap-2 p-3 text-sm'>
            <h3 className='text my-2 font-dm-sans text-18px font-medium leading-5 text-black'>
              Indexed In
            </h3>
            <div className='mt-2 flex flex-col gap-2 '>
              {indexedIn.map((item, index, arr) => {
                return (
                  <div
                    key={index}
                    className='flex items-center justify-between text-sm'
                  >
                    <div className='flex space-x-1 font-dm-sans text-medium font-medium leading-5 text-grey-brightGrey'>
                      <CheckBox
                        id={item.id}
                        checkBoxHandler={() =>
                          checkBoxHandler(item.id, 'IndexedIn', arr)
                        }
                        checked={item.status}
                      />
                      <label>{item.label}</label>
                    </div>
                    <span className='text-grey-brightGrey'>{item.number}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* ---------------------------Right-Side--------------------------- */}
        <div className='right col-span-full flex flex-col items-end justify-between bg-light-pureWhite font-dm-sans sm:col-span-7 md:col-span-8'>
          <div className='min-h-[400px] w-full space-y-3'>
            <div>
              {getCurrentPageItems().map((item, index, arr) => (
                <CardItem
                  key={item.id}
                  selectInput={selectInput}
                  lastItem={index === arr.length - 1}
                  firstItem={index === 0}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  publishedBy={item.publishedBy}
                  publicationPlace={item.publicationPlace}
                  publicationYear={item.publicationYear}
                />
              ))}
            </div>
          </div>
          {/* Render Pagination component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNextClick={() => handlePageChange(currentPage + 1)}
            onPrevClick={() => handlePageChange(currentPage - 1)}
          />
        </div>
      </div>
    </>
  )
}

const CardItem = ({
  imageUrl,
  selectInput,
  firstItem,
  lastItem,
  title,
  publishedBy,
  publicationPlace,
  publicationYear,
}) => {
  return (
    <div
      className={`relative flex min-h-[185px] w-full gap-2 border ${lastItem === true ? 'rounded-b-[9px] border-b' : 'border-b-0 '} ${firstItem === true ? 'rounded-t-[9px]' : ''}  border-blue-darkO2 py-6 font-dm-sans sm:p-5`}
    >
      {selectInput === 'e-Journal' || selectInput === 'e-Books' ? (
        <div className='image hidden min-w-[100px] shrink-0 md:flex'>
          <img src={imageUrl} alt='' className='w-full object-cover' />
        </div>
      ) : (
        <div className='image hidden aspect-square h-[100px] w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-blue-clearO2 px-5 md:flex'>
          <img
            src={imageUrl}
            alt=''
            className='h-[50px] w-[50px] object-cover'
          />
        </div>
      )}
      <div className='content w-full space-y-3 px-4 font-dm-sans'>
        <h3 className='-mb-2 text-15px font-bold uppercase tracking-[0.15px] text-black underline'>
          Prostodontics
        </h3>
        <div className='flex place-items-baseline justify-between'>
          <h3 className='text-18px font-bold text-green-napier'>{title}</h3>
          <div className='icons flex items-center gap-2'>
            <img src={greenLockIcon} alt='' />
            <img src={linkIcon} alt='' />
            <img src={commaseIcon} alt='' />
            <img src={sendIcon} alt='' />
          </div>
        </div>

        <div className='relative flex flex-wrap gap-2'>
          <p className='text-medium text-black'>
            <span className='font-bold'>Published by : </span>{' '}
            <span className='font-medium'>{publishedBy} </span>
          </p>
          <p className='text-medium text-black'>
            <span className='font-bold'> Publication Place : </span>{' '}
            <span className='font-medium'>{publicationPlace} </span>
          </p>

          {publicationYear && (
            <p className='basis-full text-medium text-black'>
              <span className='font-bold'>Publication Year :</span>
              <span className='font-medium'> {publicationYear} </span>
            </p>
          )}
        </div>

        {selectInput === 'Other Resources' && (
          <div className='btn bg-yellow-muddy w-[193px] rounded-lg border text-center '>
            <button className='flex w-full items-center justify-center gap-2 py-2 text-medium font-medium leading-5 text-light-pureWhite outline-none'>
              <img src={earthIcon} alt='' />
              View On Pub Site
            </button>
          </div>
        )}
      </div>

      <div className='text absolute bottom-3 right-5 flex gap-2 rounded-lg border border-light-lilac  bg-light-lilac'>
        <img src={pdfIcon} alt='' />
        <p className='hidden text-medium font-medium leading-5 text-black/50 lg:flex'>
          Full Text Available
        </p>
      </div>
    </div>
  )
}

CardItem.propTypes = {
  imageUrl: PropTypes.string,
  selectInput: PropTypes.string,
  firstItem: PropTypes.bool,
  lastItem: PropTypes.bool,
  title: PropTypes.string.isRequired,
  publicationYear: PropTypes.string,
  publishedBy: PropTypes.string,
  publicationPlace: PropTypes.string,
}
