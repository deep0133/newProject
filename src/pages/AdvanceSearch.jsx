import Input from "../components/Input";
import { useState } from "react";
import CheckBox from "../components/CheckBox";
import SelectInput from "../components/SelectInput";
import PropTypes from "prop-types";

import { selectInputOptionValues } from "../utils/data";
export default function AdvanceSearch() {
  const [inputFieldValue, setInputFieldValue] = useState({
    inputFieldOne: "",
    inputFieldTwo: "",
    inputFieldThree: "",
  });

  const [publicationValues, setPublicationValues] = useState({
    radioFieldOne: false,
    radioFieldTwo: false,
  });

  const [dateValues, setDateValues] = useState({
    from: "",
    to: "",
  });

  const [resourceTypes, setResourceTypes] = useState([
    {
      id: 0,
      status: false, // true -> checked and false -> unChecked
      value: "All",
    },
    {
      id: 1,
      status: true, // true -> checked and false -> unChecked
      value: "e-Book",
    },
    {
      id: 2,
      status: false,
      value: "e-Journal",
    },
    {
      id: 3,
      status: false,
      value: "Video/Audio",
    },
    {
      id: 4,
      status: true,
      value: "Dissertations & Theses",
    },
    {
      id: 5,
      status: false,
      value: "Articles",
    },
    {
      id: 6,
      status: false,
      value: "Other Resource",
    },
  ]);

  const [accessTypes, setAccessTypes] = useState([
    {
      id: 0,
      status: false, // true -> checked and false -> unChecked
      value: "All",
    },
    {
      id: 1,
      status: true, // true -> checked and false -> unChecked
      value: "Open Acces Content",
    },
    {
      id: 2,
      status: false,
      value: "Subscribed Content",
    },
    {
      id: 3,
      status: false,
      value: "Partially Subscribed Content",
    },
    {
      id: 4,
      status: false,
      value: "Abstract Only",
    },
  ]);

  const [language, setLanguage] = useState([
    {
      id: 0,
      status: false, // true -> checked and false -> unChecked
      value: "All",
    },
    {
      id: 1,
      status: true, // true -> checked and false -> unChecked
      value: "Afar",
    },
    {
      id: 2,
      status: false,
      value: "Afrikaans",
    },
    {
      id: 3,
      status: false,
      value: "Amharic",
    },
    {
      id: 4,
      status: false,
      value: "Korean",
    },
    {
      id: 5,
      status: false,
      value: "English",
    },
    {
      id: 6,
      status: false,
      value: "Japanese",
    },
  ]);

  const changeHandler = (e, type) => {
    if (type === "radioField") {
      setPublicationValues({
        ...publicationValues,
        [e.target.name]: e.target.checked,
      });
    } else if (type === "dateField") {
      setDateValues({
        ...dateValues,
        [e.target.name]: e.target.value,
      });
    } else if (type === "write-content") {
      setInputFieldValue({
        ...inputFieldValue,
        [e.target.name]: e.target.value,
      });
    }
  };

  const checkBoxHandler = (id, selectionType, arr) => {
    const updatedSelectionType = arr.map((item) => {
      if (item.id === id) item.status = !item.status;
      return item;
    });

    if (selectionType === "Resource Types") {
      setResourceTypes(updatedSelectionType);
    } else if (selectionType === "Access Types") {
      setAccessTypes(updatedSelectionType);
    } else if (selectionType === "Language") {
      setLanguage(updatedSelectionType);
    }

    console.log("id : ", id, " : items : ", selectionType);
  };

  return (
    <div className='advance-search bg-white '>
      <div className='mx-auto w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] grid grid-cols-4 gap-5 py-10'>
        <div className='left-side col-span-full sm:col-span-3'>
          <div className='write-context border-b'>
            <p className='underline font-semibold text-lg'>Write Context:</p>
            <div className='inputs grid gap-3 mt-6'>
              <div
                className='input_1 relative flex sm:flex-row flex-col
               sm:justify-center sm:items-center gap-3 sm:gap-5'>
                <div className='select-input sm:order-first order-last relative py-2 flex text-white w-fit bg-blue-500 px-3 rounded-full hover:bg-blue-600'>
                  <SelectInput items={selectInputOptionValues.selectInputOne} />
                </div>
                <Input
                  type={"text"}
                  name='inputFieldOne'
                  changeHandler={(e) => changeHandler(e, "write-content")}
                  value={inputFieldValue.inputFieldOne}
                  required={true}
                  placeholder={"Search Articles,Journals,Videos etc"}
                  className={
                    "w-full pr-14 pl-4 py-2 border outline-none rounded-full"
                  }
                />
                <div className='icon absolute right-1 top-1'>
                  <img
                    src='../src/assets/images/cross.svg'
                    alt=''
                    className='object-contain'
                  />
                </div>
              </div>

              <div className='input_2 relative flex sm:flex-row flex-col sm:justify-center sm:items-center gap-3 sm:gap-5'>
                <div className='select-input sm:order-first order-last relative py-2 flex justify-center items-center text-white w-fit bg-blue-500 px-3 rounded-full hover:bg-blue-600'>
                  <SelectInput items={selectInputOptionValues.selectInputTwo} />
                </div>
                <Input
                  type={"text"}
                  name='inputFieldTwo'
                  changeHandler={(e) => changeHandler(e, "write-content")}
                  value={inputFieldValue.inputFieldTwo}
                  required={true}
                  placeholder={"Search Articles,Journals,Videos etc"}
                  className={
                    "w-full pr-14 pl-4 py-2 border outline-none rounded-full"
                  }
                />
                <div className='icon absolute right-1 rounded-full bg-blue-600 p-2 '>
                  <img
                    src='../src/assets/images/search-normal.svg'
                    alt=''
                    className='object-contain'
                  />
                </div>
              </div>
            </div>

            <div className='published-in relative py-6'>
              <div>
                <p className='font-semibold py-4'>Published In:</p>
              </div>
              <div className='flex items-center w-full md:w-1/2 relative'>
                <Input
                  type={"text"}
                  name='inputFieldThree'
                  changeHandler={(e) => changeHandler(e, "write-content")}
                  value={inputFieldValue.inputFieldThree}
                  required={true}
                  placeholder={"Search Articles,Journals,Videos etc"}
                  className={
                    "w-full pr-14 pl-4 py-2 border-2 outline-none rounded-full"
                  }
                />
                <div className='icon absolute rounded-full bg-blue-600 p-2 right-1'>
                  <img
                    src='../src/assets/images/search-normal.svg'
                    className='object-contain'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='publication-date border-b pt-5 pb-8'>
            <p className='underline font-semibold text-lg my-3'>
              Publication Date:
            </p>

            <div className='radio-btns flex flex-wrap'>
              <div className='radio-1 flex mr-5 space-x-1 mt-2 items-center'>
                <Input
                  type={"radio"}
                  name='radioFieldOne'
                  changeHandler={(e) => changeHandler(e, "radioField")}
                  checked={publicationValues.radioFieldOne}
                  required={false}
                  placeholder={"Search Articles,Journals,Videos etc"}
                  className={
                    "border py-2 accent-blue-500 outline-none rounded-full"
                  }
                />
                <label htmlFor='all-dates' className='text-nowrap py-2'>
                  Search through All Dates
                </label>
              </div>
              <div className='radio-2-and-date flex mt-2 w-1/2 '>
                <div className='radio-2 flex mr-5 space-x-1 items-center'>
                  <Input
                    type={"radio"}
                    name='radioFieldTwo'
                    changeHandler={(e) => changeHandler(e, "radioField")}
                    checked={publicationValues.radioFieldTwo}
                    required={true}
                    placeholder={"Search Articles,Journals,Videos etc"}
                    className={
                      "border accent-blue-500 outline-none rounded-full"
                    }
                  />
                  <label htmlFor='range' className='text-nowrap'>
                    Last Ranges
                  </label>
                </div>
                <div className='select-date items-center w-full flex space-x-2'>
                  <div className='select-input relative py-2 flex border flex-grow-0 px-3 rounded-full'>
                    <SelectInput
                      items={selectInputOptionValues.selectInputOne}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='select-dates mt-8'>
              <p className='font-semibold my-3'>Select Custom Date</p>
              <div className='flex max-[400px]:flex-col max-[400px]:space-x-0 space-x-5 max-[400px]:space-y-3'>
                <div className='date-input-from flex flex-col'>
                  <label htmlFor='from' className='pb-2 text-sm '>
                    From:
                  </label>
                  <Input
                    type={"date"}
                    name='from'
                    changeHandler={(e) => changeHandler(e, "dateField")}
                    value={dateValues.from}
                    placeholder={"DD/MM/YY"}
                    className={
                      " px-3 sm:px-5 py-2 border accent-blue-500 outline-none rounded-full"
                    }
                  />
                </div>
                <div className='date-input-to flex flex-col'>
                  <label htmlFor='to' className=' pb-2 text-sm'>
                    To:
                  </label>
                  <Input
                    type={"date"}
                    name='to'
                    changeHandler={(e) => changeHandler(e, "dateField")}
                    value={dateValues.to}
                    placeholder={"DD/MM/YY"}
                    className={
                      " px-5  py-2 border accent-blue-500 outline-none rounded-full"
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='select-date py-5 border-b'>
            <p className='underline font-semibold text-lg my-3'>
              Select Types:
            </p>

            <div className='grid sm:grid-cols-3  gap-5'>
              <SelectionType
                items={resourceTypes}
                typeName={"Resource Types"}
                checkBoxHandler={checkBoxHandler}
              />
              <SelectionType
                items={accessTypes}
                typeName={"Access Types"}
                checkBoxHandler={checkBoxHandler}
              />
              <SelectionType
                items={language}
                typeName={"Language"}
                checkBoxHandler={checkBoxHandler}
              />
            </div>
          </div>
        </div>

        <div className='right-side hidden sm:flex flex-col'>
          <div className='rounded-lg pb-5 overflow-hidden border-blue-400 border'>
            <div className='title flex justify-between p-4 bg-gray-100'>
              <h2 className='font-bold '>How To Search</h2>
              <img
                src='../src/assets/images/lamp-charge.svg'
                alt=''
                className='icon'
              />
            </div>
            <div className='content text-xs space-y-4 px-3'>
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
  );
}

// Component : Selection Type :
const SelectionType = ({ items, typeName, checkBoxHandler }) => {
  const onchangeCheckbox = (id) => {
    checkBoxHandler(id, typeName, items);
  };
  return (
    <div className=''>
      <div className='flex justify-between border px-3 py-2 rounded-md'>
        <p>{typeName}</p>
        <div className='all flex justify-center items-center space-x-1'>
          <CheckBox
            id={0}
            checkBoxHandler={onchangeCheckbox}
            checked={items[0].checked}
          />
          <label>All</label>
        </div>
      </div>
      <div className='border my-2 rounded-md '>
        {items.map((item) => {
          return (
            <div key={item.id} className='flex justify-between px-3 py-2'>
              {item.id !== 0 && (
                <div className='all flex justify-center items-center space-x-2'>
                  <CheckBox
                    id={item.id}
                    checkBoxHandler={onchangeCheckbox}
                    checked={item.status}
                  />
                  <label>{item.value}</label>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Component :  Select Tag

SelectionType.propTypes = {
  items: PropTypes.array.isRequired,
  typeName: PropTypes.string.isRequired,
  checkBoxHandler: PropTypes.func.isRequired,
};
