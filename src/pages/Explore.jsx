import { PropTypes } from "prop-types";
import { useState } from "react";
import CheckBox from "../components/CheckBox";
export default function Explore() {
  const [iconsData, setIconsData] = useState([
    {
      id: 1,
      title: "e-Journals",
      iconLink: "../src/assets/images/journals.svg",
      numbers: 887,
      bgColor: "#2362ff",
    },
    {
      id: 2,
      title: "e-Books",
      iconLink: "../src/assets/images/e-book.svg",
      numbers: 556,
      bgColor: "#B18E04",
    },
    {
      id: 3,
      title: "Videos",
      iconLink: "../src/assets/images/video.svg",
      numbers: 700,
      bgColor: "#B7372D",
    },
    {
      id: 4,
      title: "Audio",
      iconLink: "../src/assets/images/music-library.svg",
      numbers: 700,
      bgColor: "#B7372E",
    },
    {
      id: 5,
      title: "Others Resources",
      iconLink: "../src/assets/images/layer.svg",
      numbers: 455,
      bgColor: "#00035B",
    },
  ]);

  const [cardData, setCardData] = useState([
    {
      id: 1,
      badgeColor: "blue",
      badgeValue: "e-Journals",
      title: "Journal of Prosthodontics",
      point_1: "Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
      point_2: "Chemie Ingenieur TechnikVolume 87, Issue 5",
      point_3: "Date of Publsih : 01 April 2015",
    },
    {
      id: 2,
      badgeColor: "red",
      badgeValue: "eBook",
      title: "Journal of Prosthodontics",
      point_1: "Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
      point_2: "Chemie Ingenieur TechnikVolume 87, Issue 5",
      point_3: "Date of Publsih : 01 April 2015",
    },
    {
      id: 3,
      badgeColor: "orange",
      badgeValue: "eArtical",
      title: "Aritcal of Prosthodontics",
      point_1: "Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
      point_2: "Chemie Ingenieur TechnikVolume 87, Issue 5",
      point_3: "Date of Publsih : 01 April 2015",
    },
  ]);

  const [mobileFilterCss, setMobileFilterCss] = useState("-translate-x-[110%]");

  const [publicationData, setPublicationData] = useState([
    {
      id: 1,
      status: false,
      label: "e-Journals",
      number: 55,
    },
    {
      id: 2,
      status: false,
      label: "e-Books",
      number: 44,
    },
    {
      id: 3,
      status: true,
      label: "Videos",
      number: 33,
    },
    {
      id: 4,
      status: false,
      label: "Dissertations and Thesis",
      number: 22,
    },
    {
      id: 5,
      status: true,
      label: "e-Articles",
      number: 11,
    },
    {
      id: 6,
      status: false,
      label: "Other e-Resources",
      number: 11,
    },
  ]);

  const [publicationDateData, setPublicationDateData] = useState([
    {
      id: 1,
      status: false,
      label: "Last Week",
    },
    {
      id: 2,
      status: false,
      label: "Last Month",
    },
    {
      id: 3,
      status: true,
      label: "Last 3 Months",
    },
    {
      id: 4,
      status: false,
      label: "Last 6 Months",
      number: 22,
    },
    {
      id: 5,
      status: true,
      label: "Last 12 Months",
      number: 11,
    },
  ]);

  const [accessKeyData, setAccessKeyData] = useState([
    {
      id: 1,
      status: false,
      label: "Full Text Only",
    },
    {
      id: 2,
      status: false,
      label: "Open Access Content",
    },
    {
      id: 3,
      status: true,
      label: "Partial Subscribed Content",
    },
    {
      id: 4,
      status: false,
      label: "Abstract Only",
    },
    {
      id: 5,
      status: true,
      label: "Subscribed Content",
    },
    {
      id: 6,
      status: true,
      label: "Indexed Journals",
    },
  ]);

  const [subjectData, setSubjectData] = useState([
    {
      id: 1,
      open: false,
      title: "Medical",
      number: 1800,
      innerContent: [
        {
          id: 1,
          status: false,
          label: "Human Anatomy and Physiology",
        },
        {
          id: 2,
          status: false,
          label: "Remedial Biology",
        },
        {
          id: 3,
          status: false,
          label: "Biochemistry",
        },
        {
          id: 4,
          status: false,
          label: "Anatomy",
        },
      ],
    },
    {
      id: 2,
      open: false,
      title: "Dental",
      number: 555,
      innerContent: [
        {
          id: 1,
          status: false,
          label: "AAAA",
        },
        {
          id: 2,
          status: false,
          label: "BBBB",
        },
        {
          id: 3,
          status: false,
          label: "CCCC",
        },
        {
          id: 4,
          status: false,
          label: "DDDD",
        },
      ],
    },
    {
      id: 3,
      open: false,
      title: "Nursing",
      number: 888,
      innerContent: [
        {
          id: 1,
          status: false,
          label: "Human Anatomy and Physiology",
        },
        {
          id: 2,
          status: false,
          label: "Remedial Biology",
        },
        {
          id: 3,
          status: false,
          label: "Biochemistry",
        },
        {
          id: 4,
          status: false,
          label: "Anatomy",
        },
      ],
    },
    {
      id: 4,
      open: true,
      title: "Pharma",
      number: 555,
      innerContent: [
        {
          id: 1,
          status: false,
          label: "Human Anatomy and Physiology",
        },
        {
          id: 2,
          status: false,
          label: "Remedial Biology",
        },
        {
          id: 3,
          status: false,
          label: "Biochemistry",
        },
        {
          id: 4,
          status: false,
          label: "Anatomy",
        },
      ],
    },
  ]);

  const checkBoxHandler = (id, selectionType, items) => {
    const updatedSelectionType = items.map((item) => {
      if (item.id === id) item.status = !item.status;
      return item;
    });

    if (selectionType === "Publication") {
      setPublicationData(updatedSelectionType);
    } else if (selectionType === "PublicationDate") {
      setPublicationDateData(updatedSelectionType);
    } else if (selectionType === "AccessKey") {
      setAccessKeyData(updatedSelectionType);
    }
  };

  const subjectHandler = (id) => {
    setSubjectData((prev) => {
      return (
        prev &&
        prev.map((item) => {
          item.open = false;
          if (item.id === id) item.open = !item.open;
          return item;
        })
      );
    });
  };

  const filterationHandler = () => {
    if (mobileFilterCss.includes("-translate-x-[110%]")) {
      setMobileFilterCss("translate-x-[0%]");
    } else {
      setMobileFilterCss("-translate-x-[110%]");
    }
  };

  return (
    <>
      <div className='bg-white text-black sm:bg-blueGradient font-semibold sm:text-white sm:py-5'>
        <div className='w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] flex sm:items-center sm:flex-row flex-col mx-auto'>
          <div className='py-8 text-lg flex flex-col shrink-0 mr-8'>
            <h3 className='flex-shrink-0'>
              Showing <span className='font-bold'>1000</span> Results for{" "}
            </h3>
            <h3 className='underline font-bold'>
              {'"'}Pharmacy{`"`}
            </h3>
          </div>
          <div className='cards flex gap-5 flex-wrap px-3'>
            {iconsData.map((item) => {
              return (
                <IconCard
                  key={item.id}
                  title={item.title}
                  number={item.numbers}
                  iconLink={item.iconLink}
                  bgColor={item.bgColor}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* 2nd Component : Filteration */}
      <div className='filteration-and-data w-[95%] duration-300 sm:w-[90%] lg:w-[80%] max-w-[80rem] mx-auto grid grid-cols-12 gap-5 py-8'>
        <div className='filter col-span-full flex justify-between'>
          <div className='flex sm:gap-8 items-center'>
            <h3 className='text-nowrap font-medium'>Applied Filter</h3>
            <div className=' gap-1  hidden sm:flex items-center'>
              <i>
                <svg
                  width='13'
                  height='14'
                  viewBox='0 0 13 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.6275 7.24958L9.40288 4.24125C8.62705 3.19625 7.28121 2.70541 6.01455 3.04583C6.01455 3.03791 6.00663 3.03791 6.00663 3.03L4.69246 0.868746C4.45496 0.496662 3.96413 0.377913 3.59205 0.607496L0.844965 2.27791C0.464965 2.49958 0.346215 2.99833 0.575798 3.37833L1.88205 5.53958C1.88205 5.53958 1.88205 5.5475 1.88996 5.5475C1.01121 6.52125 0.821215 7.93833 1.40705 9.11791L3.05371 12.4746C3.56038 13.5117 4.7558 13.9075 5.76913 13.385C5.8483 13.3454 5.87205 13.2504 5.82455 13.1712L4.58955 11.1287C4.41538 10.8437 4.50246 10.4796 4.78746 10.2975C5.07246 10.1312 5.43663 10.2183 5.61871 10.4954L6.86163 12.5379C6.90913 12.6092 7.00413 12.6329 7.07538 12.5933L7.83538 12.1342C7.90663 12.0867 7.93038 11.9917 7.8908 11.9204L6.64788 9.87791C6.48163 9.59291 6.56871 9.22875 6.8458 9.04666C7.13871 8.88041 7.50288 8.96749 7.67705 9.24458L8.91996 11.2871C8.96746 11.3583 9.06246 11.3821 9.13371 11.3425L9.89371 10.8833C9.96496 10.8358 9.98871 10.7408 9.94913 10.6696L8.70621 8.62708C8.53996 8.34208 8.62705 7.97791 8.90413 7.79583C9.19705 7.62958 9.56121 7.71666 9.73538 7.99375L10.9862 10.0283C11.0337 10.0996 11.1287 10.1233 11.2 10.0758C12.1183 9.41875 12.3241 8.18375 11.6275 7.24958Z'
                    fill='#FA2A2A'
                    //   style='fill:#FA2A2A;fill:color(display-p3 0.9808 0.1659 0.1659);fill-opacity:1;'
                  />
                </svg>
              </i>
              <p className='underline font-semibold text-sm text-red-400'>
                Clear All
              </p>
            </div>
          </div>
          <div className='flex gap-2 flex-shrink-0'>
            <i
              onClick={filterationHandler}
              className='border sm:hidden z-50 rounded-md px-2 flex justify-center items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'>
                <path
                  d='M5.22498 2.33752H16.775C17.7375 2.33752 18.525 3.12502 18.525 4.08752V6.01252C18.525 6.71252 18.0875 7.58753 17.65 8.02503L13.8875 11.35C13.3625 11.7875 13.0125 12.6625 13.0125 13.3625V17.125C13.0125 17.65 12.6625 18.35 12.225 18.6125L11 19.4C9.86248 20.1 8.28748 19.3125 8.28748 17.9125V13.275C8.28748 12.6625 7.93748 11.875 7.58748 11.4375L4.26248 7.93752C3.82498 7.50002 3.47498 6.71252 3.47498 6.18752V4.17502C3.47498 3.12502 4.26248 2.33752 5.22498 2.33752Z'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10.0638 2.33752L5.75 9.25002'
                  stroke='#292D32'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </i>

            <div className='sort rounded-md p-3 shrink-0  border flex items-center gap-2 text-xs font-semibold'>
              <div className='lines flex flex-col space-y-[2px] justify-center items-center'>
                <div className='line-1 w-3 border-black border-b-2 rounded-full'></div>
                <div className='line-2 w-2 border-black border-b-2 rounded-full'></div>
                <div className='line-3 w-1 border-black border-b-2 rounded-full'></div>
              </div>
              <div className='flex gap-1 shrink-0'>
                <p className='text-gray-400'>Sort By : </p>
                <p>Relevance</p>
              </div>
            </div>
          </div>
        </div>
        <div className='selected-filters flex flex-wrap items-start justify-between col-span-full '>
          <div className='flex gap-5 flex-wrap w-fit'>
            <SelectedFilter title={"Medical"} />
            <SelectedFilter title={"Anatomy"} />
            <SelectedFilter title={"Dental"} />
          </div>
        </div>
        {/* ---------------------------Left-Side---------------------------  : Mobile : side bar issue ----Pending----*/}
        <div
          className={`left filter bg-white duration-300 ${mobileFilterCss} sm:relative absolute z-50 max-[343px]:top-[448px] top-[370px] sm:top-0  sm:translate-x-0 col-span-full sm:col-span-4 border rounded-md`}>
          <div className='publication-type mx-2 p-5 border-b'>
            <h3 className='text font-semibold pb-2'>Publication Type</h3>
            <div className='flex gap-2 mt-2 flex-col '>
              {publicationData.map((item, index, arr) => {
                return (
                  <div
                    key={index}
                    className='text-sm flex items-center justify-between'>
                    <div className='flex space-x-1'>
                      <CheckBox
                        id={item.id}
                        checkBoxHandler={() =>
                          checkBoxHandler(item.id, "Publication", arr)
                        }
                        checked={item.status}
                      />
                      <label className='text-gray-600'>{item.label}</label>
                    </div>
                    <span className='text-gray-700'>{item.number}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='publication-date mx-2 p-5 border-b'>
            <h3 className='text font-semibold pb-5'>Publication Date</h3>
            <div className='flex gap-2 flex-wrap'>
              <div className='date-input-from flex flex-col'>
                <label htmlFor='from' className='pb-2 text-sm '>
                  From:
                </label>
                <input
                  type='date'
                  name='from'
                  placeholder={"DD/MM/YY"}
                  className={
                    " px-3 py-2 border text-xs  flex-shrink accent-blue-500 border-blue-400 outline-none rounded-lg"
                  }
                />
              </div>
              <div className='date-input-from flex flex-col'>
                <label htmlFor='from' className='pb-2 text-sm '>
                  To:
                </label>
                <input
                  type={"date"}
                  name='from'
                  placeholder={"DD/MM/YY"}
                  className={
                    " px-3 py-2 border text-xs flex-shrink accent-blue-500 border-blue-400 outline-none rounded-lg"
                  }
                />
              </div>
            </div>
            <div className='checkbox-btns pt-3 text-sm flex flex-col gap-2'>
              {publicationDateData.map((item, index, arr) => {
                return (
                  <div key={index} className='flex space-x-1'>
                    <CheckBox
                      id={item.id}
                      checkBoxHandler={() =>
                        checkBoxHandler(item.id, "PublicationDate", arr)
                      }
                      checked={item.status}
                    />
                    <label className='text-gray-600'>{item.label}</label>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='subject mx-2 p-5 border-b'>
            <h3 className='text font-semibold'> Subject</h3>
            <div className='flex gap-2 flex-col '>
              {/* Drawer */}
              {subjectData.map((subject, idx) => {
                return (
                  <SubjectComponent
                    key={idx}
                    subject={subject}
                    subjectHandler={subjectHandler}
                    checkBoxHandler={checkBoxHandler}
                  />
                );
              })}
            </div>
          </div>

          <div className='access-key mx-2 p-3 text-sm flex flex-col gap-2'>
            <h3 className='text font-semibold my-2'> Access Key</h3>
            {accessKeyData.map((item, index, arr) => {
              return (
                <div className='flex justify-between' key={index}>
                  <div key={index} className='flex space-x-1'>
                    <CheckBox
                      id={item.id}
                      checkBoxHandler={() =>
                        checkBoxHandler(item.id, "PublicationDate", arr)
                      }
                      checked={item.status}
                    />
                    <label className='text-gray-600'>{item.label}</label>
                  </div>
                  <div className=''>
                    <i>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='25'
                        viewBox='0 0 35 35'
                        fill='none'>
                        <circle cx='17.5' cy='17.5' r='17.5' fill='#408000' />
                        <circle
                          cx='17.5'
                          cy='17.5'
                          r='17'
                          stroke='#00035C'
                          strokeOpacity='0.1'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M13.6792 13.9125C13.6792 11.5446 15.5987 9.62502 17.9667 9.62502C19.9636 9.62502 21.6431 10.9908 22.1191 12.8402C22.2034 13.1678 22.5374 13.365 22.8649 13.2807C23.1926 13.1964 23.3897 12.8625 23.3054 12.5349C22.6935 10.1574 20.5361 8.40002 17.9667 8.40002C14.9222 8.40002 12.4542 10.8681 12.4542 13.9125V15.5904C11.5438 15.6585 10.9509 15.8301 10.5176 16.2635C9.79999 16.9811 9.79999 18.136 9.79999 20.4459C9.79999 22.7557 9.79999 23.9106 10.5176 24.6283C11.2352 25.3459 12.3901 25.3459 14.7 25.3459H21.2333C23.5432 25.3459 24.6981 25.3459 25.4157 24.6283C26.1333 23.9106 26.1333 22.7557 26.1333 20.4459C26.1333 18.136 26.1333 16.9811 25.4157 16.2635C24.6981 15.5459 23.5432 15.5459 21.2333 15.5459H14.7C14.3313 15.5459 13.9919 15.5459 13.6792 15.5488V13.9125ZM19.6 20.4459C19.6 21.3479 18.8687 22.0792 17.9667 22.0792C17.0646 22.0792 16.3333 21.3479 16.3333 20.4459C16.3333 19.5438 17.0646 18.8125 17.9667 18.8125C18.8687 18.8125 19.6 19.5438 19.6 20.4459Z'
                          fill='white'
                        />
                      </svg>
                    </i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ---------------------------Right-Side--------------------------- */}
        <div className='right col-span-full sm:col-span-8 border rounded-md'>
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
            );
          })}
        </div>
      </div>
    </>
  );
}

const SelectedFilter = ({ title }) => {
  return (
    <div className='selected-filtered px-3 text-xs py-1 rounded-md font-semibold w-fit bg-gray-200 flex justify-center items-center'>
      <p className='item'>{title}</p>
      <i className='hover:cursor-pointer'>
        <svg
          width='30'
          height='30'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g id='Group 1000004642'>
            <g id='Group 1000004641'>
              <g id='Group 427318269'>
                <circle
                  id='Ellipse 2'
                  cx='17.5'
                  cy='17.5'
                  r='17.5'
                  fill='none'
                />
              </g>
              <g id='Group 1000004640'>
                <path
                  id='Vector'
                  d='M12 22.66L22.66 12'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  id='Vector_2'
                  d='M22.66 22.66L12 12'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </g>
          </g>
        </svg>
      </i>
    </div>
  );
};

const IconCard = ({ title, number, iconLink, bgColor }) => {
  return (
    <div
      className={`relative text-xs border bg-blueCardBackground rounded-md px-5 py-2 `}>
      <div className={`icon absolute top-[-17px] left-[-15px] bg-[${bgColor}]`}>
        <img
          src={iconLink}
          className={`w-8 h-8 rounded-full`}
          style={{ background: bgColor }}
        />
      </div>
      <p>{title}</p>
      <p className='font-bold text-sm'>{number}</p>
    </div>
  );
};

const ItemCard = ({
  badgeColor,
  badgeValue,
  title,
  point_1,
  point_2,
  point_3,
}) => {
  return (
    <div className='border-b px-4 py-5 relative'>
      <div className='absolute top-3 left-0 flex justify-between w-full'>
        <div
          style={{ background: badgeColor }}
          className={`badge  rounded-r-lg pl-5 pr-3 text-sm text-white py-1 flex justify-center items-center`}>
          <p>{badgeValue}</p>
        </div>
        <div className='icons flex gap-2 items-center pr-5'>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 35 35'
              fill='none'>
              <circle cx='17.5' cy='17.5' r='17.5' fill='#408000' />
              <circle
                cx='17.5'
                cy='17.5'
                r='17'
                stroke='#00035C'
                strokeOpacity='0.1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.6792 13.9125C13.6792 11.5446 15.5987 9.62502 17.9667 9.62502C19.9636 9.62502 21.6431 10.9908 22.1191 12.8402C22.2034 13.1678 22.5374 13.365 22.8649 13.2807C23.1926 13.1964 23.3897 12.8625 23.3054 12.5349C22.6935 10.1574 20.5361 8.40002 17.9667 8.40002C14.9222 8.40002 12.4542 10.8681 12.4542 13.9125V15.5904C11.5438 15.6585 10.9509 15.8301 10.5176 16.2635C9.79999 16.9811 9.79999 18.136 9.79999 20.4459C9.79999 22.7557 9.79999 23.9106 10.5176 24.6283C11.2352 25.3459 12.3901 25.3459 14.7 25.3459H21.2333C23.5432 25.3459 24.6981 25.3459 25.4157 24.6283C26.1333 23.9106 26.1333 22.7557 26.1333 20.4459C26.1333 18.136 26.1333 16.9811 25.4157 16.2635C24.6981 15.5459 23.5432 15.5459 21.2333 15.5459H14.7C14.3313 15.5459 13.9919 15.5459 13.6792 15.5488V13.9125ZM19.6 20.4459C19.6 21.3479 18.8687 22.0792 17.9667 22.0792C17.0646 22.0792 16.3333 21.3479 16.3333 20.4459C16.3333 19.5438 17.0646 18.8125 17.9667 18.8125C18.8687 18.8125 19.6 19.5438 19.6 20.4459Z'
                fill='white'
              />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'>
              <path
                d='M10.3392 8.66089C12.1204 10.4421 12.1204 13.3238 10.3392 15.0971C8.55792 16.8705 5.67625 16.8784 3.90292 15.0971C2.12958 13.3159 2.12167 10.4342 3.90292 8.66089'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8.38376 10.6163C6.53126 8.76378 6.53126 5.75545 8.38376 3.89503C10.2363 2.03461 13.2446 2.04253 15.105 3.89503C16.9654 5.74753 16.9575 8.75586 15.105 10.6163'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'>
              <path
                d='M14.6667 7.76672H10.8C9.77999 7.76672 9.07999 6.99338 9.07999 6.04671V3.90002C9.07999 2.95336 9.77999 2.18005 10.8 2.18005H12.9467C13.8933 2.18005 14.6667 2.95336 14.6667 3.90002V7.76672Z'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M14.6667 7.76672C14.6667 11.8001 13.9133 12.4667 11.6467 13.8134'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.91333 7.76672H3.04666C2.02666 7.76672 1.32666 6.99338 1.32666 6.04671V3.90002C1.32666 2.95336 2.02666 2.18005 3.04666 2.18005H5.19999C6.14666 2.18005 6.91999 2.95336 6.91999 3.90002V7.76672'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.91334 7.76672C6.91334 11.8001 6.16001 12.4667 3.89334 13.8134'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'>
              <path
                d='M5.85833 5.00333L12.5796 2.76292C15.5958 1.7575 17.2346 3.40417 16.2371 6.42042L13.9967 13.1417C12.4925 17.6621 10.0225 17.6621 8.51833 13.1417L7.85333 11.1467L5.85833 10.4817C1.33791 8.9775 1.33791 6.51542 5.85833 5.00333Z'
                stroke='#00035C'
                strokeOpacity='0.5'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:0.5;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8.00375 10.8062L10.8379 7.96411'
                stroke='#00035C'
                strokeOpacity='0.5'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:0.5;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
        </div>
      </div>
      <div className='content mt-10 px-4 space-y-1'>
        <h3 className='font-semibold text-[16px]'>{title}</h3>
        <p className='text-sm text-gray-600 font-medium'>{point_1}</p>
        <p className='text-sm text-gray-600 font-medium'>{point_2}</p>
        <p className='text-sm text-gray-600 font-medium'>{point_3}</p>
      </div>
    </div>
  );
};

const SubjectComponent = ({ subject, subjectHandler }) => {
  return (
    <details
      className='relative open:bg-white outline-none ring-b-1'
      open={subject?.open}>
      <summary
        onClick={() => {
          subjectHandler(subject.id);
        }}
        className='text-sm hover:cursor-pointer hover:text-blue-500 relative'>
        <div className='flex justify-between items-center'>
          <p className='underline'> {subject.title}</p>
          <div className='flex gap-1 items-center'>
            <span className=''>{subject.number}</span>
            <div className='icons'>
              <i className={`up-arrow `}>
                <svg
                  style={{
                    transform: !subject?.open
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'>
                  <path
                    d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 11.17L12.53 14.7C12.38 14.85 12.19 14.92 12 14.92C11.81 14.92 11.62 14.85 11.47 14.7L7.94 11.17C7.65 10.88 7.65 10.4 7.94 10.11C8.23 9.82 8.71 9.82 9 10.11L12 13.11L15 10.11C15.29 9.82 15.77 9.82 16.06 10.11C16.35 10.4 16.35 10.87 16.06 11.17Z'
                    fill='#3461FF'
                    // style='fill:#3461FF;fill:color(display-p3 0.2042 0.3792 1.0000);fill-opacity:1;'
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>

        <span className='w-5 h-5 rounded-full bg-white absolute top-0 -left-2'></span>
      </summary>
      <div className='mt-3 p-2 rounded-md border text-sm leading-6 text-slate-600'>
        {subject.innerContent.map((subItem, indx) => {
          return <SubSubjectComponent key={indx} subSubject={subItem} />;
        })}
      </div>
    </details>
  );
};

const SubSubjectComponent = ({ subSubject }) => {
  return (
    <div className='flex space-x-1 p-1'>
      <CheckBox
        id={subSubject.id}
        checkBoxHandler={() => console.log("Id : ", subSubject.id)}
      />
      <label className='text-gray-600 text-xs'>{subSubject.label}</label>
    </div>
  );
};

// ----------------------PropTypes----------------------
SelectedFilter.propTypes = {
  title: PropTypes.string,
};
IconCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  iconLink: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
};
ItemCard.propTypes = {
  badgeColor: PropTypes.string,
  badgeValue: PropTypes.string,
  title: PropTypes.string,
  point_1: PropTypes.string,
  point_2: PropTypes.string,
  point_3: PropTypes.string,
};
SubjectComponent.propTypes = {
  subject: PropTypes.object,
  checkBoxHandler: PropTypes.func.isRequired,
  subjectHandler: PropTypes.func.isRequired,
};
SubSubjectComponent.propTypes = {
  subSubject: PropTypes.object,
};
