import { useState } from "react";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import { selectInputOptionValues } from "../utils/data";

import homeBackgroundImage from "../assets/images/home-background.png";

import blueArrowIcon from "../assets/svg/blue_arrow.svg";
import searchIcon from "../assets/svg/search-normal.svg";
import crossIcon from "../assets/svg/cross.svg";
import starIcon from "../assets/svg/star.svg";
import downArrowIcon from "../assets/svg/downArrow.svg";
import recentlyAddedIcon from "../assets/svg/recentlyAddedBag.svg";

import GeneralData from "../components/HomePageComponent/GeneralData";
import MedicalCard from "../components/HomePageComponent/MedicalCard";
import ResourceCard from "../components/HomePageComponent/ResourceCard";
import CategoryCard from "../components/HomePageComponent/CategoryCard";
import RecentlyCard from "../components/HomePageComponent/RecentlyCard";
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
      imageLink: homeBackgroundImage,
      title:
        "Children of AI: A Protocol for Managing the Born-Digital Ephemera Spawned by Generative AI Language Models.",
      date: "Added on: December 2023",
    },
    {
      id: 2,
      imageLink: homeBackgroundImage,
      title:
        "Pharmaceutical and non-pharmaceutical interventions for controlling the COVID-19 pandemic",
      date: "Added on: July 2022",
    },
    {
      id: 3,
      imageLink: homeBackgroundImage,
      title:
        "Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation",
      date: "Added on: July 2022",
    },
    {
      id: 4,
      imageLink: homeBackgroundImage,
      title:
        "Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation",
      date: "Added on: July 2022",
    },
    {
      id: 5,
      imageLink: homeBackgroundImage,
      title:
        "Neue Wege der standardkonformen Gesamtprozesssteuerung in der Life Science Automation",
      date: "Added on: July 2022",
    },
    {
      id: 6,
      imageLink: homeBackgroundImage,
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
    <section className="w-full">
      <section className="hero home-background-image relative flex  w-full flex-col items-center md:justify-center">
        <div className="mt-[150px] lg:pb-0 pb-10  mx-[5%] lg:mx-0">
          <h2 className="font-feature-setting text-center sm:w-auto font-dm-sans text-large font-bold leading-normal tracking-normal text-home-hero-color ">
            You have subscribed DVL Medical
          </h2>
          <p className="text-text font-feature-setting pb-5 text-center font-dm-sans text-[14px] font-[400] leading-8 text-home-hero-color">
            Here in the database you will get each and every journal for any
            subject field you need
          </p>
          <div className="relative flex md:mx-auto flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-5">
            <div className="select-input  h-[42px] relative order-last flex flex-shrink-0 rounded-[34px] bg-search-icon-background px-3 py-2 text-white sm:order-first w-[127px]">
              <SelectInput items={selectInputOptionValues.selectInputOne} />
            </div>
            <Input
              type="text"
              name="homeSelectBtn"
              onChange={changeHandler}
              value={homeSearchInput}
              placeholder={"Search Articles,Journals,Videos etc"}
              className="h-[42px] flex-grow lg:w-[676px] rounded-full border py-2 pl-5 pr-14 outline-none"
            />
            <div className="icon absolute right-1 top-1">
              {homeSearchInput.length > 0 ? (
                <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-search-icon-background">
                  <img src={searchIcon} alt="" className="object-cover" />
                </div>
              ) : (
                <img src={crossIcon} alt="" className="object-contain" />
              )}
              <button
                className="
              font-feature-setting absolute right-4 text-nowrap pt-4 font-dm-sans text-medium font-medium  leading-8 text-home-hero-color underline outline-none"
              >
                Advance Search
              </button>
            </div>
          </div>
        </div>
        <div className="responsiveWidth py-10 sm:pt-20 lg:pt-24 trust-us sticky mx-auto grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 ">
          <GeneralData />
        </div>
      </section>

      {/* Browse All Resource */}
      <section className="mx-3 mt-3 flex flex-col items-center justify-center overflow-hidden py-7 sm:py-14 rounded-t-[9px] border border-b-0 border-blue-darkO1 bg-blue-clearO7">
        <div className="flex flex-col text-blue-deepCove font-feature-setting font-dm-sans">
          <h2 className="mb-1 text-center text-30px font-bold tracking-[-1px]  ">
            Browse all resources by discipline
          </h2>
          <p className="mb-5 mt-2 text-center text-16px  font-normal leading-6">
            Select your subscribed Databases and find resources
          </p>
        </div>

        <div className="medical-menu flex place-items-end gap-5 sm:responsiveWidth justify-center">
          <img
            src={blueArrowIcon}
            alt="previous"
            className="rotate-180 lg:hidden"
          />
          <div className="no-scrollbar mt-5 flex w-[137px] lg:w-fit gap-2 overflow-auto scroll-smooth ">
            <MedicalCard
              medicalData={medicalData}
              onClickHandler={selectItemHandler}
            />
          </div>
          <img src={blueArrowIcon} alt="next" className="lg:hidden" />
        </div>
      </section>

      {/* Category and Resource */}
      <section className="mx-1 sm:mx-3 rounded-b-[9px]  border border-t-0 border-blue-darkO1 bg-blue-clearO7 py-1 ">
        <div className="mx-auto mb-8 grid responsiveWidth grid-cols-9 gap-5">
          <div className="col-span-full flex place-content-end gap-3 text-blue-deepCove font-dm-sans text-medium font-medium leading-6">
            <button className="flex flex-shrink-0 items-center justify-center px-[14px] gap-2 py-[10px] border rounded-lg border-blue-clearO1 w-[154px] h-[40px] bg-blue-clearO1">
              ResourceType
              <img
                src={downArrowIcon}
                className="w-5 h-5 object-cover brightness-0"
              />
            </button>
            <button className="flex flex-shrink-0 items-center rounded-lg border border-blue-clearO2 bg-light-whiteO4 px-4 py-2 ">
              Show All
            </button>
          </div>
          <div className="left col-span-full space-y-2 md:col-span-3">
            <CategoryCard
              categoryData={categoryData}
              onClickHandler={selectItemHandler}
            />
          </div>
          <div className="flex md:col-span-1 col-span-full">
            <p className=" border border-dashed border-black/50 w-full md:w-0 my-5 md:my-0 md:h-full mx-auto"></p>
          </div>
          <div className="right col-span-full md:col-span-5">
            <div className="grid gap-3 sm:grid-cols-2  lg:grid-cols-3">
              <ResourceCard resourceCardData={resourceCardData} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-1 sm:mx-3 my-3 grid md:grid-cols-12 gap-3">
        <div className="left col-span-full md:col-span-7 grid grid-cols-7 border bg-blue-clearO7 border-blue-darkO1 rounded-[9px]">
          <div className="flex col-span-full md:col-span-7 md:col-start-2  w-[95%] sm:w-[95%] mx-auto md:w-auto">
            <div className="left-recently flex-grow pt-5 px-2 md:p-5 md:-ml-10">
              <h2 className="flex relative w-fit items-baseline gap-2 px-1 text-blue-deepCove font-feature-settings font-dm-sans text-24px font-bold tracking-[-1px] py-2">
                <img src={recentlyAddedIcon} alt="" />
                <p className=""> Recently Added Resources</p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-deepCove"></div>
              </h2>
              <div className="recently-container max-h-[470px] space-y-4 mt-10 mb-5 custom-scroll-bar overflow-y-auto overflow-x-hidden ">
                <RecentlyCard recentlyCardData={recentlyCardData} />
              </div>
            </div>
          </div>
        </div>
        <div className="right col-span-full md:col-span-5 grid md:grid-cols-5 border bg-blue-clearO7 border-blue-darkO1 rounded-[9px]">
          <div className="col-span-full md:col-span-4 py-5 md:pl-5 md:mr-[-19px] lg:mr-0 w-[95%] sm:w-[90%] mx-auto md:w-full">
            <div className="right-recently md:max-w-[474px] flex-grow">
              <h2 className="flex mb-6 relative w-fit items-baseline gap-2 px-1 text-blue-deepCove font-feature-settings font-dm-sans text-24px font-bold tracking-[-1px] py-2">
                <img src={starIcon} alt="" />
                <p> Most Viewed</p>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-deepCove"></div>
              </h2>
              <div className="most-viewed-container">
                <MostViewedCard mostViewedCardData={mostViewedCardData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
