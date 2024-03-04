import fileIcon from '../assets/svg/file.svg'
import linkIcon from '../assets/svg/link.svg'
import commaseIcon from '../assets/svg/commase.svg'
import sendIcon from '../assets/svg/send.svg'
import lockIcon from '../assets/svg/whiteLock.svg'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
export default function PDFViewer({ children }) {
  useEffect(() => {
    document.title = 'DVL - Project | PDF - PUB'
  }, [])

  return (
    <>
      <Header />
      <PdfComponent>{children}</PdfComponent>
    </>
  )
}

const Header = () => {
  return (
    <div className='header mx-auto bg-blue-darkBlue3 '>
      <div className='responsiveWidth relative mx-auto flex flex-col items-start justify-between gap-5 py-8 md:flex-row'>
        <div className='left order-last flex max-w-3xl  items-center gap-8 md:order-first'>
          <div className='file-image hidden h-[55px] w-[55px] shrink-0 md:block'>
            <img src={fileIcon} className='invert' alt='' />
          </div>
          <div className='content space-y-3'>
            <div className=' flex items-start gap-2 font-dm-sans text-lg'>
              <img src={lockIcon} alt='' className='shrink-0 scale-125' />
              <p className='font-bold text-white'>
                Comparison between orthodontic and surgical uprighting of
                mandibular molars: a systematic review
              </p>
            </div>
            <div className=''>
              <span className='pr-1 font-dm-sans text-sm font-bold leading-snug text-white'>
                Authors:
              </span>
              <span className='font-dm-sans text-sm font-medium leading-snug text-white'>
                Frantzeska Karkazi
              </span>
              <span className='font-dm-sans text-sm font-medium leading-snug text-white'>
                Angle Orthodontist, Volume 93, Issue 1, Pages 104–110
              </span>
            </div>
          </div>
        </div>
        <div className='right order-first flex w-full items-center justify-between gap-2 md:order-last md:w-auto'>
          <p className='text-xSmall font-bold uppercase tracking-[0.12px] text-white underline md:hidden '>
            Prostodontics
          </p>
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
      </div>
    </div>
  )
}

const PdfComponent = ({ children }) => {
  return (
    <div className='responsiveWidth mx-auto my-5 grid grid-cols-1 gap-5 md:grid-cols-12'>
      <div className='left pdf-open rounded-md border-2 md:col-span-8'>
        {children}
      </div>
      <div className='right pdf-open rounded-md border-2 md:col-span-4'>
        <h2 className='rounded-t-md bg-blue-darkBlue2 p-5 text-white '>
          Suggested resources
        </h2>

        <div className='relative'>
          {suggestionData.map((val) => {
            return (
              <SuggestionCard
                key={val.id}
                id={val.id}
                title={val.title}
                desc={val.desc}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

const SuggestionCard = ({ id, title, desc }) => {
  return (
    <div id={id} className='border-b p-4'>
      <div className='font-dm-sans text-[15px] font-medium text-blue-950'>
        {title}
      </div>
      <div className='font-dm-sans text-[13px] font-medium text-black opacity-70'>
        {desc}
      </div>
    </div>
  )
}

const suggestionData = [
  {
    id: 1,
    title: 'Adaptive negative representations for graph contrastive learning',
    desc: 'Wu, Yunchao.  3C Empresa; Alcoy Vol. 12, Iss. 2, (Apr-Jun 2023): 73-90.',
  },
  {
    id: 2,
    title: 'Adaptive negative representations for graph contrastive learning',
    desc: 'Wu, Yunchao.  3C Empresa; Alcoy Vol. 12, Iss. 2, (Apr-Jun 2023): 73-90.',
  },
  {
    id: 3,
    title: 'Adaptive negative representations for graph contrastive learning',
    desc: 'Wu, Yunchao.  3C Empresa; Alcoy Vol. 12, Iss. 2, (Apr-Jun 2023): 73-90.',
  },
  {
    id: 4,
    title: 'Adaptive negative representations for graph contrastive learning',
    desc: 'Wu, Yunchao.  3C Empresa; Alcoy Vol. 12, Iss. 2, (Apr-Jun 2023): 73-90.',
  },
  {
    id: 5,
    title: 'Adaptive negative representations for graph contrastive learning',
    desc: 'Wu, Yunchao.  3C Empresa; Alcoy Vol. 12, Iss. 2, (Apr-Jun 2023): 73-90.',
  },
]

SuggestionCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
}

PdfComponent.propTypes = {
  children: PropTypes.node,
}

PDFViewer.propTypes = {
  children: PropTypes.node,
}
