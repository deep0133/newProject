import { useState } from "react";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import { selectInputOptionValues } from "../utils/data";
import blueArrow from "../assets/images/blue_arrow.svg";
import GeneralData from "../components/HomePageComponent/GeneralData";
import MedicalCard from "../components/HomePageComponent/MedicalCard";
import ResourceCard from "../components/HomePageComponent/ResourceCard";
import CategoryCard from "../components/HomePageComponent/CategoryCard";
import MostViewedCard from "../components/HomePageComponent/MostViewedCard";

export default function Home() {
  const [homeSearchInput, setHomeSearchInput] = useState("");

  const [medicalData, setMedicalData] = useState([
    {
      id: 1,
      value: "Medical",
      selected: false,
    },
    {
      id: 2,
      value: "Pharmacy",
      selected: false,
    },
    {
      id: 3,
      value: "Nursing",
      selected: true,
    },
    {
      id: 4,
      value: "Dental",
      selected: false,
    },
    {
      id: 5,
      value: "Science",
      selected: false,
    },
  ]);

  const [categoryData, setCategoryData] = useState([
    {
      id: 1,
      value: "Cardiology",
      selected: false,
      number: 44,
    },
    {
      id: 2,
      value: "Community Medicine",
      selected: true,
      number: 555,
    },
    {
      id: 3,
      value: "Cavid19",
      selected: false,
      number: 22,
    },
    {
      id: 4,
      value: "Emergency Medicine",
      number: 22,
      selected: false,
    },
    {
      id: 5,
      value: "Pharmacology",
      selected: false,
      number: 44,
    },
    {
      id: 6,
      value: "Ophthalmology",
      selected: false,
      number: 555,
    },
    {
      id: 7,
      value: "Surgery",
      selected: false,
      number: 22,
    },
    {
      id: 8,
      value: "Surgery",
      selected: false,
      number: 555,
    },
  ]);

  const [resourceCardData, setResourceCardData] = useState([
    {
      id: 1,
      title: "Acta Neurologica Scandinavica",
      desc: "By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
    },
    {
      id: 2,
      title: "Advanced Gut & Microbiome Research",
      desc: "By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
    },
    {
      id: 3,
      title:
        "Artificial Intelligence In Cancer Diagnostics And Therapy: Current Perspectives",
      desc: "By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow.By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow.By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
    },
    {
      id: 4,
      title:
        "Artificial Intelligence In Cancer Diagnostics And Therapy: Current Perspectives",
      desc: "By Bernd Göde, Silke Holzmüller-Laue, Kerstin Thurow",
    },
  ]);

  const [recentlyCardData, setRecentlyCardData] = useState([
    {
      id: 1,
      imageLink: "../src/assets/images/jpg/home-background.png",
      title:
        "Children of AI: A Protocol for Managing the Born-Digital Ephemera Spawned by Generative AI Language Models.",
      date: "Added on: December 2023",
    },
    {
      id: 2,
      imageLink: "../src/assets/images/jpg/home-background.png",
      title:
        "Pharmaceutical and non-pharmaceutical interventions for controlling the COVID-19 pandemic",
      date: "Added on: July 2022",
    },
    {
      id: 3,
      imageLink: "../src/assets/images/jpg/home-background.png",
      title:
        "Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation",
      date: "Added on: July 2022",
    },
  ]);

  const [mostViewedCardData, setMostViewedCardData] = useState([
    {
      id: 1,
      title: "Access, sources and value of new medical",
      tag: "Medical",
    },
    {
      id: 2,
      title: "Journal of Emergencies Trauma and Shock",
      tag: "Journal",
    },
    {
      id: 3,
      title: "Trauma and Shock",
      tag: "Ebook",
    },
    {
      id: 4,
      title: "Emergencies Trauma and Shock",
      tag: "Video",
    },
    {
      id: 5,
      title: "Journal of Emergencies Trauma and Shock",
      tag: "Journal",
    },
    {
      id: 6,
      title: "Trauma and Shock",
      tag: "Ebook",
    },
    {
      id: 7,
      title: "Emergencies Trauma and Shock",
      tag: "Video",
    },
  ]);

  const changeHandler = (e) => {
    setHomeSearchInput(e.target.value);
  };

  const selectItemHandler = (id, dataType) => {
    const dataArr = dataType === "medical" ? medicalData : categoryData;
    const updatedData = dataArr.map((item) => {
      if (item.selected === true || item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });

    if (dataType === "category") {
      setCategoryData(updatedData);
    } else if (dataType === "medical") {
      setMedicalData(updatedData);
    }
  };

  return (
    <section className='min-h-[100lvh] w-full'>
      <section className='hero relative min-h-[100lvh] w-full flex flex-col justify-center items-center home-background-image'>
        <div className='sm:w-max -mt-64 sm:-mt-20 w-[95%]'>
          <h2 className='text-3xl text-white font-bold text-center'>
            You Have subscribed DVL Medical
          </h2>
          <p className='text-xs text-gray-300 font-medium text-center mt-2 mb-5'>
            Here in the database youll get each and every journal for any
            subject field you need
          </p>
          <div
            className='relative flex sm:flex-row flex-col
               sm:justify-center sm:items-center gap-3 sm:gap-5'>
            <div className='select-input sm:order-first order-last relative py-2 flex text-white w-fit bg-blue-500 px-3 rounded-full hover:bg-blue-600'>
              <SelectInput items={selectInputOptionValues.selectInputOne} />
            </div>
            <Input
              type={"text"}
              name='homeSelectBtn'
              onChange={changeHandler}
              value={homeSearchInput}
              placeholder={"Search Articles,Journals,Videos etc"}
              className={
                "w-full pr-14 pl-4 py-2 border outline-none rounded-full"
              }
            />
            <div className='icon absolute right-1 top-1'>
              {homeSearchInput.length > 0 ? (
                <img
                  src='../src/assets/images/search-normal.svg'
                  alt=''
                  className='object-cover w-8 rounded-full p-1 bg-blue-500'
                />
              ) : (
                <img
                  src='../src/assets/images/cross.svg'
                  alt=''
                  className='object-contain'
                />
              )}
              <button className='outline-none underline absolute text-white text-nowrap pt-5 right-4'>
                Advance Search
              </button>
            </div>
          </div>
        </div>
        <div className='trust-us  w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5  absolute max-[370px]:bottom-2 bottom-20 text-white '>
          <GeneralData />
        </div>
      </section>

      {/* Browse All Resource */}
      <section className=' border-2 border-b-0 mx-3 mt-3 rounded-t-lg overflow-hidden bg-gray-100 flex flex-col py-14 justify-center items-center'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold text-center mb-1'>
            Browse all resources by discipline
          </h2>
          <p className='text-xs text-gray-600 font-medium text-center mt-2 mb-5'>
            Select your subscribed Databases and find resources
          </p>
        </div>
        <div className='medical-menu flex gap-5 place-items-end'>
          <img
            src={blueArrow}
            alt='previous'
            className='rotate-180 sm:hidden'
          />
          <div className='flex gap-2 no-scrollbar mt-5 overflow-auto scroll-smooth sm:w-full w-[120px] '>
            <MedicalCard
              medicalData={medicalData}
              onClickHandler={selectItemHandler}
            />
          </div>
          <img src={blueArrow} alt='next' className='sm:hidden' />
        </div>
      </section>

      {/* Category and Resource */}
      <section className='bg-gray-100 mx-3  border-2 py-1 border-t-0 rounded-b-lg '>
        <div className='w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] gap-5 mb-8 mx-auto grid grid-cols-8'>
          <div className='col-span-full font-semibold flex place-content-end gap-3'>
            <button className='px-4 hover:bg-gray-200 py-2 flex items-center text-blue-600 border-2 rounded-md flex-shrink-0 justify-center'>
              <p>ResourceType</p>
              <i>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'>
                  <path
                    d='M5 7.5L10 12.5L15 7.5'
                    stroke='#0A1847'
                    //   style='stroke:#0A1847;stroke:color(display-p3 0.0392 0.0941 0.2784);stroke-opacity:1;'
                    strokeWidth='1.66667'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </i>
            </button>
            <button className='px-4 py-2 flex items-center text-blue-600 border-2 rounded-md flex-shrink-0'>
              Show All
            </button>
          </div>
          <div className='left col-span-full md:col-span-3 space-y-2'>
            <CategoryCard
              categoryData={categoryData}
              onClickHandler={selectItemHandler}
            />
          </div>
          <div className='right col-span-full md:col-span-5'>
            <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-3'>
              <ResourceCard resourceCardData={resourceCardData} />
            </div>
          </div>
        </div>
      </section>

      <section className='mx-3 border-2 rounded-lg my-3 grid'>
        <div className='w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] grid grid-cols-8 gap-7 mx-auto'>
          <div className='left-recently col-span-full md:col-span-5 border-b-2 md:border-b-0 md:border-r-2 py-5'>
            <h2 className='border-b-2 mb-6 border-gray-600 w-fit px-3 py-2 font-semibold text-xl flex gap-1 items-baseline'>
              <i>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'>
                  <path
                    d='M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z'
                    fill='#0A1847'
                  />
                  <path
                    d='M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z'
                    fill='#0A1847'
                  />
                  <path
                    d='M20 9.84003H4C3.45 9.84003 3 10.29 3 10.84V17C3 20 4.5 22 8 22H12.93C13.62 22 14.1 21.33 13.88 20.68C13.68 20.1 13.51 19.46 13.51 19C13.51 15.97 15.98 13.5 19.01 13.5C19.3 13.5 19.59 13.52 19.87 13.57C20.47 13.66 21.01 13.19 21.01 12.59V10.85C21 10.29 20.55 9.84003 20 9.84003ZM9.21 18.21C9.02 18.39 8.76 18.5 8.5 18.5C8.24 18.5 7.98 18.39 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.49 16.42 8.93 16.51 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21ZM9.21 14.71C9.16 14.75 9.11 14.79 9.06 14.83C9 14.87 8.94 14.9 8.88 14.92C8.82 14.95 8.76 14.97 8.7 14.98C8.63 14.99 8.56 15 8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.02 13.06 8.37 12.95 8.7 13.02C8.76 13.03 8.82 13.05 8.88 13.08C8.94 13.1 9 13.13 9.06 13.17C9.11 13.21 9.16 13.25 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71ZM12.71 14.71C12.52 14.89 12.26 15 12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.67 12.92 12.34 12.92 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71Z'
                    fill='#0A1847'
                  />
                </svg>
              </i>
              <p> Recently Added Resources</p>
            </h2>
            <div className='recently-container'>
              <RecentlyCard recentlyCardData={recentlyCardData} />
            </div>
          </div>
          <div className='right-recently col-span-full md:col-span-3 py-5'>
            <h2 className='border-b-2 mb-6 border-gray-600 w-fit px-3 py-2 font-semibold text-xl flex gap-1 items-baseline'>
              <i>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'>
                  <path
                    d='M15.3899 5.20997L16.7999 8.02997C16.9899 8.41997 17.4999 8.78997 17.9299 8.86997L20.4799 9.28997C22.1099 9.55997 22.4899 10.74 21.3199 11.92L19.3299 13.91C18.9999 14.24 18.8099 14.89 18.9199 15.36L19.4899 17.82C19.9399 19.76 18.8999 20.52 17.1899 19.5L14.7999 18.08C14.3699 17.82 13.6499 17.82 13.2199 18.08L10.8299 19.5C9.11994 20.51 8.07994 19.76 8.52994 17.82L9.09994 15.36C9.18994 14.88 8.99994 14.23 8.66994 13.9L6.67994 11.91C5.50994 10.74 5.88994 9.55997 7.51994 9.27997L10.0699 8.85997C10.4999 8.78997 11.0099 8.40997 11.1999 8.01997L12.6099 5.19997C13.3799 3.67997 14.6199 3.67997 15.3899 5.20997Z'
                    fill='#00035C'
                  />
                  <path
                    d='M8 5.75H2C1.59 5.75 1.25 5.41 1.25 5C1.25 4.59 1.59 4.25 2 4.25H8C8.41 4.25 8.75 4.59 8.75 5C8.75 5.41 8.41 5.75 8 5.75Z'
                    fill='#00035C'
                  />
                  <path
                    d='M5 19.75H2C1.59 19.75 1.25 19.41 1.25 19C1.25 18.59 1.59 18.25 2 18.25H5C5.41 18.25 5.75 18.59 5.75 19C5.75 19.41 5.41 19.75 5 19.75Z'
                    fill='#00035C'
                  />
                  <path
                    d='M3 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H3C3.41 11.25 3.75 11.59 3.75 12C3.75 12.41 3.41 12.75 3 12.75Z'
                    fill='#00035C'
                  />
                </svg>
              </i>
              <p> Most Viewed</p>
            </h2>
            <div className='most-viewed-container'>
              <MostViewedCard mostViewedCardData={mostViewedCardData} />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
