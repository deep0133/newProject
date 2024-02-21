import ebook from '../assets/images/pdfBook.png'
import reference from '../assets/images/reference.png'
import dvlIcon from '../assets/svg/dvl.svg'
import linkIcon from '../assets/svg/link.svg'
import commaseIcon from '../assets/svg/commase.svg'
import sendIcon from '../assets/svg/send.svg'
import fileIcon from '../assets/svg/file.svg'
import pdfIcon from '../assets/svg/pdf.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const cardData = [
  {
    id: 1,
    url: fileIcon,
    title: 'Introduction',
    range: 'Pages Range : 88 - 333',
    viewOnText: 'View on DVL Reader',
    viewOnLink: '/pdf-viewer',
  },
  {
    id: 2,
    url: fileIcon,
    title: 'Chapter 1 : Theory',
    range: 'Pages Range : 88 - 333',
    viewOnText: 'View on DVL Reader',
    viewOnLink: '/pdf-viewer',
  },
  {
    id: 3,
    url: fileIcon,
    title:
      'Chapter 3 : Weakness of the back, with a rigidity of the spine back bone',
    range: 'Pages Range :  333 - 444',
    viewOnText: 'View on DVL Reader',
    viewOnLink: '/pub-viewer',
  },
  {
    id: 4,
    url: fileIcon,
    title:
      'Chapter 4 : Weakness of the back, with a rigidity of the spine back bone',
    range: 'Pages Range : 444 - 542',
    viewOnText: 'View on DVL Reader',
    viewOnLink: '/pub-viewer',
  },
  {
    id: 5,
    url: fileIcon,
    title:
      'Chapter 5 : Weakness of the back, with a rigidity of the spine back bone',
    range: 'Pages Range : 542 - 599',
    viewOnText: 'View on DVL Reader',
    viewOnLink: '/pub-viewer',
  },
  {
    id: 6,
    url: fileIcon,
    title:
      'Chapter 6 : Weakness of the back, with a rigidity of the spine back bone',
    range: 'Pages Range : 542 - 599',
    viewOnText: 'View on DVL Reader',
    viewOnLink: '/pdf-viewer',
  },
]

export default function BookChapters() {
  return (
    <>
      <div className='bg-blue-deepCove'>
        <div className='responsiveWidth relative mx-auto flex flex-col justify-center gap-8 py-10 md:flex-row md:gap-12'>
          <div className='hidden md:block'>
            <ImageComponent />
          </div>
          <div className='flex-grow font-dm-sans'>
            <div className='flex justify-between'>
              <h3 className='text-xSmall font-bold uppercase tracking-[0.15px] text-light-pureWhite underline md:text-15px'>
                Dentistry & Oral Science
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
              <h2 className='text-21px font-bold text-light-pureWhite'>
                Medical Microbiology and Immunology
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
                    John Wiley and Sons
                  </p>
                </div>

                <div className='flex gap-1 text-medium md:text-15px'>
                  <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                    Publication Year :
                  </h3>
                  <p className='font-bold text-light-pureWhite/80'>2015</p>
                </div>
              </div>

              <div className='flex flex-wrap gap-3'>
                <div className='flex gap-1 text-medium md:text-15px'>
                  <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                    Author :
                  </h3>
                  <p className='font-medium text-light-pureWhite/80'>
                    DDS, MS, PhD Radi Masri DMD Carl F. Driscoll
                  </p>
                </div>

                <div className='flex gap-1 text-medium md:text-15px'>
                  <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                    Sub - Author :
                  </h3>
                  <p className='font-medium text-light-pureWhite/80'>
                    DDS, MS, PhD Radi Masri DMD Carl F. Driscoll
                  </p>
                </div>
              </div>

              <div className='flex flex-wrap gap-3'>
                <div className='flex gap-1 text-medium md:text-15px '>
                  <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                    Print ISBN :
                  </h3>
                  <p className='font-medium text-light-pureWhite/80'>
                    555545452212
                  </p>
                </div>

                <div className='flex gap-1 text-medium md:text-15px'>
                  <h3 className='shrink-0 font-bold leading-normal text-light-pureWhite'>
                    E ISBN :
                  </h3>
                  <p className='font-medium text-light-pureWhite/80'>
                    9781118655795
                  </p>
                </div>
              </div>

              <div className='btns relative flex justify-between gap-3 pt-5'>
                <div className='normal-btn flex flex-wrap gap-3'>
                  <Link
                    to={'/pub-viewer'}
                    className='flex w-fit items-center justify-center gap-2 rounded-lg bg-light-smoke px-5 py-2 text-medium font-medium leading-5 text-blue-darkBlue outline-none'
                  >
                    <img src={dvlIcon} alt='' />
                    View on DVL Reader
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className='responsiveWidth mx-auto flex gap-5 py-3 font-dm-sans font-medium'>
          <button className='flex h-[53px] w-[198px] items-center justify-center gap-2 rounded-lg bg-light-smoke py-3 text-[16px] font-medium leading-normal text-blue-darkBlue2 outline-none'>
            Chapters
          </button>
          <button className='flex h-[53px] w-[198px] items-center justify-center gap-2 rounded-lg bg-transparent  py-3 text-[16px] font-medium leading-normal text-light-pureWhite outline-none hover:bg-light-smoke hover:text-blue-darkBlue2'>
            References
          </button>
        </div>
      </div>
      <div className='table-of-content font-feature-setting responsiveWidth mx-auto my-8 rounded-md border font-dm-sans'>
        <div className='title flex items-center gap-5 p-3 text-blue-tealish md:p-5'>
          <h2 className=' text-[23px] font-bold tracking-[-1px]'>
            Table of Contents
          </h2>
          <span className='text-sm font-normal leading-[25px] opacity-50 md:text-[16px]'>
            20 chapters found
          </span>
        </div>
        <div className='card-conainer'>
          {cardData.map((val) => {
            return (
              <Card
                key={val.id}
                url={val.url}
                title={val.title}
                range={val.range}
                viewOnText={val.viewOnText}
                viewOnLink={val.viewOnLink}
              />
            )
          })}
        </div>
      </div>
      <div className='references responsiveWidth mx-auto mb-8 space-y-5 rounded-lg border pb-5'>
        <div className='grid gap-5 md:grid-cols-2 md:gap-2 lg:gap-5'>
          <Reference />
          <Reference />
          <Reference />
          <Reference />
          <Reference />
          <Reference />
        </div>
      </div>
    </>
  )
}

const ImageComponent = () => {
  return (
    <div className='left h-[260px] w-[206px] flex-shrink-0 overflow-hidden'>
      <img src={ebook} className='object-cover ' alt='journal' />
    </div>
  )
}

const Card = ({ url, title, range, viewOnText, viewOnLink }) => {
  return (
    <div className='flex flex-col justify-between border-t px-3 py-5 md:flex-row md:px-10'>
      <div className='left flex gap-8'>
        <img src={url} alt='' className='hidden md:block' />
        <div className='content'>
          <h3 className='chapter flex shrink items-start gap-2 font-dm-sans text-18px font-semibold text-green-grass md:text-23px'>
            <i className='mt-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M3.19337 4.53795C3.19337 2.58866 4.7736 1.00843 6.72289 1.00843C8.36684 1.00843 9.7494 2.13278 10.1412 3.6552C10.2107 3.92488 10.4856 4.08723 10.7552 4.01782C11.0249 3.94841 11.1872 3.67352 11.1178 3.40384C10.6141 1.4467 8.83812 0 6.72289 0C4.21665 0 2.18494 2.03171 2.18494 4.53795V5.91924C1.43551 5.97524 0.947464 6.11649 0.590727 6.47327C0 7.06401 0 8.01476 0 9.91626C0 11.8178 0 12.7685 0.590727 13.3593C1.18145 13.95 2.13221 13.95 4.03373 13.95H9.41205C11.3136 13.95 12.2643 13.95 12.855 13.3593C13.4458 12.7685 13.4458 11.8178 13.4458 9.91626C13.4458 8.01476 13.4458 7.06401 12.855 6.47327C12.2643 5.88253 11.3136 5.88253 9.41205 5.88253H4.03373C3.73019 5.88253 3.45087 5.88253 3.19337 5.88495V4.53795ZM8.06747 9.91626C8.06747 10.6589 7.4655 11.2608 6.72289 11.2608C5.98028 11.2608 5.37831 10.6589 5.37831 9.91626C5.37831 9.17365 5.98028 8.57169 6.72289 8.57169C7.4655 8.57169 8.06747 9.17365 8.06747 9.91626Z'
                  fill='#408000'
                />
              </svg>
            </i>
            <span className='line-clamp-2'>{title}</span>
          </h3>
          <p className='mb-3 mt-5 font-dm-sans text-sm font-medium italic leading-snug text-black md:ml-5 md:mt-1'>
            {range}
          </p>
        </div>
      </div>
      <div className='right flex flex-shrink-0 justify-between'>
        <Link
          to={viewOnLink}
          className='flex w-fit items-center justify-center gap-2 text-nowrap rounded-lg border border-light-magnolia px-3 py-2 text-medium font-medium leading-5 text-blue-darkBlue3 outline-none md:px-5'
        >
          <img src={dvlIcon} alt='' />
          {viewOnText}
        </Link>
        <div className='icons flex items-center gap-2'>
          <img
            src={linkIcon}
            className='shrink-0 rounded-full border-2 bg-light-pureWhite p-1'
            alt=''
          />
          <img
            src={commaseIcon}
            className='shrink-0 rounded-full border-2 bg-light-pureWhite p-1'
            alt=''
          />
          <img
            src={sendIcon}
            className='shrink-0 rounded-full border-2 bg-light-pureWhite p-1'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

const Reference = () => {
  return (
    <div className='group flex flex-grow space-x-3 px-5 text-sm'>
      <div className='flex-shrink-0 basis-16 rounded-md'>
        <img
          src={reference}
          className='z-50 h-[66px] w-[59px] flex-shrink-0 rounded-[5px] border border-blue-ultramarineBlue bg-no-repeat object-cover  shadow-[0px_3px_10px_0px_rgba(0,_0,_0,_0.02)] '
          alt=''
        />
      </div>
      <div>
        <div className=' flex-grow space-y-2 font-dm-sans font-medium'>
          <h3 className='line-clamp-3 text-16px text-blue-darkBlue2 group-hover:text-blue-darkO6 group-hover:underline md:max-w-[614px]'>
            Trends in medical knowledge as assessed by the certifying
            examination in internal medicine.
          </h3>
          <p className='line-clamp-2 max-w-[614px] text-wrap text-[13px] font-medium leading-normal text-brown-cornHarvest'>
            Journal of the American Medical Association
          </p>
        </div>
      </div>
    </div>
  )
}

const PDFbutton = () => {
  return (
    <Link
      to={'/pdf-viewer'}
      className='text flex flex-shrink-0 gap-2 rounded-lg border border-light-lilac/20 px-5 py-2 outline-none'
    >
      <img src={pdfIcon} alt='' />
      <p className='text-medium font-medium leading-5 text-black/50 text-light-pureWhite md:hidden lg:flex'>
        Full Text Available
      </p>
    </Link>
  )
}

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  range: PropTypes.string,
  viewOnText: PropTypes.string,
  viewOnLink: PropTypes.string,
}

PDFbutton.propTypes = {
  setPDFFile: PropTypes.func,
}
