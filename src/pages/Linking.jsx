import journal from '../assets/images/journal.png'
import journalCover from '../assets/images/journalCover.png'
import lockIcon from '../assets/svg/whiteLock.svg'
import earthIcon from '../assets/svg/earth.svg'
import linkIcon from '../assets/svg/link.svg'
import commaseIcon from '../assets/svg/commase.svg'
import sendIcon from '../assets/svg/send.svg'
import pdfIcon from '../assets/svg/pdf.svg'
export default function Linking() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

const Header = () => {
  return (
    <div className='bg-blue-deepCove'>
      <div className='responsiveWidth relative mx-auto flex flex-col justify-center gap-8 py-10 md:flex-row md:gap-12'>
        <div className='hidden md:block'>
          <ImageComponent />
        </div>
        <div className='flex-grow font-dm-sans'>
          <div className='flex justify-between'>
            <h3 className='text-15px font-bold uppercase tracking-[0.15px] text-light-pureWhite underline'>
              Orthodontics
            </h3>
            <div className='icons flex items-center gap-2'>
              <img
                src={linkIcon}
                className='shrink-0 rounded-full bg-light-pureWhite p-1'
                alt=''
              />
              <img
                src={commaseIcon}
                className='shrink-0 rounded-full bg-light-pureWhite p-1'
                alt=''
              />
              <img
                src={sendIcon}
                className='shrink-0 rounded-full bg-light-pureWhite p-1'
                alt=''
              />
            </div>
          </div>
          <div className='my-3 mb-2 flex items-start gap-1 '>
            <img src={lockIcon} className='flex-shrink-0' alt='' />
            <h2 className='text-21px font-bold text-light-pureWhite'>
              Journal of Orthodontics and Science Behind
            </h2>
          </div>
          <div className='my-8 md:hidden'>
            <ImageComponent />
            <div className='mt-8'>
              <PDFbutton />
            </div>
          </div>
          <div className='detail space-y-3'>
            <div className='flex flex-wrap gap-3'>
              <div className='flex gap-1 text-medium md:text-15px '>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  Published by :{' '}
                </h3>
                <p className='font-medium text-light-pureWhite/80'>
                  Taylor and Francis Ltd
                </p>
              </div>

              <div className='flex gap-1 text-medium md:text-15px'>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  Publication Place :
                </h3>
                <p className='font-bold text-light-pureWhite/80'>Pondichery</p>
              </div>

              <div className='flex gap-1 text-medium md:text-15px'>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  Bibliography Records :
                </h3>
                <p className='flex flex-wrap font-medium text-light-pureWhite/80'>
                  <span>
                    Index Start : 1999 to Index End : 20{' '}
                    <span className='font-bold'>23</span>
                  </span>
                </p>
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex gap-1 text-medium md:text-15px'>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  Citation,Records :
                </h3>
                <p className='font-medium text-light-pureWhite'>
                  2020 (Vol.9) - Present
                </p>
              </div>

              <div className='flex gap-1 text-medium md:text-15px'>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  ISSN(Print) :
                </h3>
                <p className='font-medium text-light-pureWhite/80'>2413-1903</p>
              </div>

              <div className='flex gap-1 text-medium md:text-15px'>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  ISSN(Online) :
                </h3>
                <p className='flex font-medium text-light-pureWhite/80'>
                  1684-1999
                </p>
              </div>
            </div>

            <div className='flex flex-wrap gap-3'>
              <div className='flex gap-1 text-medium md:text-15px '>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  Indexed In :
                </h3>
                <p className='font-medium text-light-pureWhite/80'>Scopus</p>
              </div>

              <div className='flex gap-1 text-medium md:text-15px'>
                <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                  Current Issue :
                </h3>
                <p className='font-medium text-light-pureWhite/80'>
                  Volume 23, Number , 22 Jan 2023
                </p>
              </div>
            </div>

            <div className='btns relative flex justify-between gap-3 pt-5'>
              <div className='normal-btn flex flex-wrap gap-3'>
                <button className='flex w-fit items-center justify-center gap-2 rounded-lg bg-yellow-muddy px-5 py-2 text-medium font-medium leading-5 text-light-pureWhite outline-none'>
                  <img src={earthIcon} alt='' />
                  View Current Issue On Pub Site
                </button>

                <button className='bg-blue-denim flex w-fit items-center justify-center gap-2 rounded-lg px-5 py-2 text-medium font-medium leading-5 text-light-pureWhite outline-none'>
                  <img src={earthIcon} alt='' />
                  View Archives on Pub Site
                </button>

                <button className='bg-light-smoke flex w-fit items-center justify-center rounded-lg px-5 py-2 text-medium font-medium leading-5 text-blue-darkBlue outline-none'>
                  <img src={earthIcon} alt='' />
                  View Archives on Pub Site
                </button>
              </div>

              {/* <button className='text absolute right-5 top-4 flex gap-2 rounded-lg border border-light-lilac/20 bg-light-lilac px-5 py-2  outline-none'>
                <img src={pdfIcon} alt='' />
                <p className='text-medium font-medium leading-5 text-black/50 text-light-pureWhite lg:flex'>
                  Full Text Available
                </p>
              </button> */}
              <div className='hidden flex-shrink-0 md:block'>
                <PDFbutton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ImageComponent = () => {
  return (
    <div className='left h-[260px] w-[206px] flex-shrink-0 overflow-hidden'>
      <img src={journal} className='object-cover ' alt='journal' />
    </div>
  )
}

const Main = () => {
  return (
    <div className='responsiveWidth mx-auto my-8  pb-8 '>
      <div className='flex w-full gap-3 rounded-t-md border border-black/10 p-5 text-16px leading-[25px]'>
        <h2 className='font-bold text-blue-deepCove'>Related Journals</h2>
        <span className='font-normal  text-blue-deepCove/50 '>
          1444 Resources found
        </span>
      </div>
      <div className='card-container grid grid-cols-1 gap-8 rounded-b-md border border-t-0 border-black/10 px-5 py-10 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-14 lg:grid-cols-4 lg:gap-16'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

const Card = () => {
  return (
    <div className='overflow-hidden'>
      <div className='flex h-[186px] w-[168px] overflow-hidden'>
        <img src={journalCover} className='flex-shrink-0 object-cover' alt='' />
      </div>
      <div className='content space-y-2'>
        <p className='mt-5 text-xSmall font-bold uppercase tracking-[0.12px] text-black underline '>
          Prostodontics
        </p>
        <h1 className='text-16px font-bold leading-normal text-blue-darkBlue'>
          The 1st Annual Crossing the Quality Chasm Summit: A Focus on
          Communities: Report of a Summit; Washington, D.C.
        </h1>
        <p className='text-small font-medium leading-normal text-black'>
          Published by : Taylor and Francis Ltd
        </p>
      </div>
    </div>
  )
}

const PDFbutton = () => {
  return (
    <button className='text flex flex-shrink-0 gap-2 rounded-lg border border-light-lilac/20 px-5 py-2 outline-none'>
      <img src={pdfIcon} alt='' />
      <p className='text-medium font-medium leading-5 text-black/50 text-light-pureWhite md:hidden lg:flex'>
        Full Text Available
      </p>
    </button>
  )
}
