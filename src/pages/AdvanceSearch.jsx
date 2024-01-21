import Input from '../components/Input'
import { useState } from 'react'
import SelectInput from '../components/SelectInput'

import { selectInputOptionValues } from '../utils/data'
import SelectionType from '../components/AdvanceSearchComponent/SelectionType'

import crossIcon from '../assets/svg/cross.svg'
import searchIcon from '../assets/svg/search-normal.svg'
import lampChargeIcon from '../assets/svg/lamp-charge.svg'

export default function AdvanceSearch() {
  const [inputFieldValue, setInputFieldValue] = useState({
    inputFieldOne: '',
    inputFieldTwo: '',
    inputFieldThree: '',
  })

  const [publicationValues, setPublicationValues] = useState({
    radioFieldOne: false,
    radioFieldTwo: false,
  })

  const [dateValues, setDateValues] = useState({
    from: '',
    to: '',
  })

  const [resourceTypes, setResourceTypes] = useState([
    {
      id: 0,
      status: false, // true -> checked and false -> unChecked
      value: 'All',
    },
    {
      id: 1,
      status: true, // true -> checked and false -> unChecked
      value: 'e-Book',
    },
    {
      id: 2,
      status: false,
      value: 'e-Journal',
    },
    {
      id: 3,
      status: false,
      value: 'Video/Audio',
    },
    {
      id: 4,
      status: true,
      value: 'Dissertations & Theses',
    },
    {
      id: 5,
      status: false,
      value: 'Articles',
    },
    {
      id: 6,
      status: false,
      value: 'Other Resource',
    },
  ])

  const [accessTypes, setAccessTypes] = useState([
    {
      id: 0,
      status: false, // true -> checked and false -> unChecked
      value: 'All',
    },
    {
      id: 1,
      status: true, // true -> checked and false -> unChecked
      value: 'Open Acces Content',
    },
    {
      id: 2,
      status: false,
      value: 'Subscribed Content',
    },
    {
      id: 3,
      status: false,
      value: 'Partially Subscribed Content',
    },
    {
      id: 4,
      status: false,
      value: 'Abstract Only',
    },
  ])

  const [language, setLanguage] = useState([
    {
      id: 0,
      status: false, // true -> checked and false -> unChecked
      value: 'All',
    },
    {
      id: 1,
      status: true, // true -> checked and false -> unChecked
      value: 'Afar',
    },
    {
      id: 2,
      status: false,
      value: 'Afrikaans',
    },
    {
      id: 3,
      status: false,
      value: 'Amharic',
    },
    {
      id: 4,
      status: false,
      value: 'Korean',
    },
    {
      id: 5,
      status: false,
      value: 'English',
    },
    {
      id: 6,
      status: false,
      value: 'Japanese',
    },
  ])

  const changeHandler = (e, type) => {
    if (type === 'radioField') {
      setPublicationValues({
        ...publicationValues,
        [e.target.name]: e.target.checked,
      })
    } else if (type === 'dateField') {
      setDateValues({
        ...dateValues,
        [e.target.name]: e.target.value,
      })
    } else if (type === 'write-content') {
      setInputFieldValue({
        ...inputFieldValue,
        [e.target.name]: e.target.value,
      })
    }
  }

  const checkBoxHandler = (id, selectionType, arr) => {
    const updatedSelectionType = arr.map((item) => {
      if (item.id === id) item.status = !item.status
      return item
    })

    if (selectionType === 'Resource Types') {
      setResourceTypes(updatedSelectionType)
    } else if (selectionType === 'Access Types') {
      setAccessTypes(updatedSelectionType)
    } else if (selectionType === 'Language') {
      setLanguage(updatedSelectionType)
    }

    console.log('id : ', id, ' : items : ', selectionType)
  }

  return (
    <div className='advance-search bg-white '>
      <div className='mx-auto grid w-[95%] max-w-[80rem] grid-cols-4 gap-5 py-10 sm:w-[90%] lg:w-[80%]'>
        <div className='left-side col-span-full sm:col-span-3'>
          <div className='write-context border-b'>
            <p className='text-lg font-semibold underline'>Write Context:</p>
            <div className='inputs mt-6 grid gap-3'>
              <div
                className='input_1 relative flex flex-col gap-3
               sm:flex-row sm:items-center sm:justify-center sm:gap-5'
              >
                <div className='select-input relative order-last flex w-fit rounded-full bg-blue-500 px-3 py-2 text-white hover:bg-blue-600 sm:order-first'>
                  <SelectInput items={selectInputOptionValues.selectInputOne} />
                </div>
                <Input
                  type={'text'}
                  name='inputFieldOne'
                  changeHandler={(e) => changeHandler(e, 'write-content')}
                  value={inputFieldValue.inputFieldOne}
                  required={true}
                  placeholder={'Search Articles,Journals,Videos etc'}
                  className={
                    'w-full rounded-full border py-2 pl-4 pr-14 outline-none'
                  }
                />
                <div className='icon absolute right-1 top-1'>
                  <img src={crossIcon} alt='' className='object-contain' />
                </div>
              </div>

              <div className='input_2 relative flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-5'>
                <div className='select-input relative order-last flex w-fit items-center justify-center rounded-full bg-blue-500 px-3 py-2 text-white hover:bg-blue-600 sm:order-first'>
                  <SelectInput items={selectInputOptionValues.selectInputTwo} />
                </div>
                <Input
                  type={'text'}
                  name='inputFieldTwo'
                  changeHandler={(e) => changeHandler(e, 'write-content')}
                  value={inputFieldValue.inputFieldTwo}
                  required={true}
                  placeholder={'Search Articles,Journals,Videos etc'}
                  className={
                    'w-full rounded-full border py-2 pl-4 pr-14 outline-none'
                  }
                />
                <div className='icon absolute right-1 rounded-full bg-blue-600 p-2 '>
                  <img src={searchIcon} alt='' className='object-contain' />
                </div>
              </div>
            </div>

            <div className='published-in relative py-6'>
              <div>
                <p className='py-4 font-semibold'>Published In:</p>
              </div>
              <div className='relative flex w-full items-center md:w-1/2'>
                <Input
                  type={'text'}
                  name='inputFieldThree'
                  changeHandler={(e) => changeHandler(e, 'write-content')}
                  value={inputFieldValue.inputFieldThree}
                  required={true}
                  placeholder={'Search Articles,Journals,Videos etc'}
                  className={
                    'w-full rounded-full border-2 py-2 pl-4 pr-14 outline-none'
                  }
                />
                <div className='icon absolute right-1 rounded-full bg-blue-600 p-2'>
                  <img src={searchIcon} className='object-contain' />
                </div>
              </div>
            </div>
          </div>

          <div className='publication-date border-b pb-8 pt-5'>
            <p className='my-3 text-lg font-semibold underline'>
              Publication Date:
            </p>

            <div className='radio-btns flex flex-wrap'>
              <div className='radio-1 mr-5 mt-2 flex items-center space-x-1'>
                <Input
                  type={'radio'}
                  name='radioFieldOne'
                  changeHandler={(e) => changeHandler(e, 'radioField')}
                  checked={publicationValues.radioFieldOne}
                  required={false}
                  placeholder={'Search Articles,Journals,Videos etc'}
                  className={
                    'rounded-full border py-2 accent-blue-500 outline-none'
                  }
                />
                <label htmlFor='all-dates' className='text-nowrap py-2'>
                  Search through All Dates
                </label>
              </div>
              <div className='radio-2-and-date mt-2 flex w-1/2 '>
                <div className='radio-2 mr-5 flex items-center space-x-1'>
                  <Input
                    type={'radio'}
                    name='radioFieldTwo'
                    changeHandler={(e) => changeHandler(e, 'radioField')}
                    checked={publicationValues.radioFieldTwo}
                    required={true}
                    placeholder={'Search Articles,Journals,Videos etc'}
                    className={
                      'rounded-full border accent-blue-500 outline-none'
                    }
                  />
                  <label htmlFor='range' className='text-nowrap'>
                    Last Ranges
                  </label>
                </div>
                <div className='select-date flex w-full items-center space-x-2'>
                  <div className='select-input relative flex flex-grow-0 rounded-full border px-3 py-2'>
                    <SelectInput
                      items={selectInputOptionValues.selectInputOne}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='select-dates mt-8'>
              <p className='my-3 font-semibold'>Select Custom Date</p>
              <div className='flex space-x-5 max-[400px]:flex-col max-[400px]:space-x-0 max-[400px]:space-y-3'>
                <div className='date-input-from flex flex-col'>
                  <label htmlFor='from' className='pb-2 text-sm '>
                    From:
                  </label>
                  <Input
                    type={'date'}
                    name='from'
                    changeHandler={(e) => changeHandler(e, 'dateField')}
                    value={dateValues.from}
                    placeholder={'DD/MM/YY'}
                    className={
                      ' rounded-full border px-3 py-2 accent-blue-500 outline-none sm:px-5'
                    }
                  />
                </div>
                <div className='date-input-to flex flex-col'>
                  <label htmlFor='to' className=' pb-2 text-sm'>
                    To:
                  </label>
                  <Input
                    type={'date'}
                    name='to'
                    changeHandler={(e) => changeHandler(e, 'dateField')}
                    value={dateValues.to}
                    placeholder={'DD/MM/YY'}
                    className={
                      ' rounded-full  border px-5 py-2 accent-blue-500 outline-none'
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='select-date border-b py-5'>
            <p className='my-3 text-lg font-semibold underline'>
              Select Types:
            </p>

            <div className='grid gap-5  sm:grid-cols-3'>
              <SelectionType
                items={resourceTypes}
                typeName={'Resource Types'}
                checkBoxHandler={checkBoxHandler}
              />
              <SelectionType
                items={accessTypes}
                typeName={'Access Types'}
                checkBoxHandler={checkBoxHandler}
              />
              <SelectionType
                items={language}
                typeName={'Language'}
                checkBoxHandler={checkBoxHandler}
              />
            </div>
          </div>
        </div>

        <div className='right-side hidden flex-col sm:flex'>
          <div className='overflow-hidden rounded-lg border border-blue-400 pb-5'>
            <div className='title flex justify-between bg-gray-100 p-4'>
              <h2 className='font-bold '>How To Search</h2>
              <img src={lampChargeIcon} alt='' className='icon' />
            </div>
            <div className='content space-y-4 px-3 text-xs'>
              <p></p>
              <p>
                <b>Start with the Basics:</b>
                <br /> No matter what you’re looking for, begin by typing your
                query into the Google search box on the homepage or navigate to
                Google. Hit the search button, and Google will display relevant
                results based on your query.
              </p>
              <p>
                <b>Rephrase Your Search:</b> <br />
                If you’re not getting the results you want, try rephrasing your
                search. Use different keywords or ask your question in a
                slightly different way. Google is smart and can often understand
                context, so feel free to experiment with variations.
              </p>
              <p>
                <b>Filter Your Results:</b> <br />
                After searching, you can filter your results by selecting
                specific categories such as web pages, images, shopping, videos,
                and more. Look for these filters just below the search bar to
                narrow down your results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
