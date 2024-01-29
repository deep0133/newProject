import PropTypes from 'prop-types'
const Breadcrumb = ({ title, des }) => {
  return (
    <section className='breadcrumb mt-[85px] bg-black py-8  sm:mt-[72px] sm:bg-blue-blueChalk sm:py-3'>
      <div className='responsiveWidth mx-auto flex flex-col justify-between gap-5 px-1 sm:flex-row'>
        <div className='icon-links flex items-center space-x-3'>
          <i>
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.19 0.833374H5.81C2.17 0.833374 0 3.00337 0 6.64337V15.0134C0 18.6634 2.17 20.8334 5.81 20.8334H14.18C17.82 20.8334 19.99 18.6634 19.99 15.0234V6.64337C20 3.00337 17.83 0.833374 14.19 0.833374ZM11.79 13.8334C12.08 14.1234 12.08 14.6034 11.79 14.8934C11.64 15.0434 11.45 15.1134 11.26 15.1134C11.07 15.1134 10.88 15.0434 10.73 14.8934L7.2 11.3634C6.91 11.0734 6.91 10.5934 7.2 10.3034L10.73 6.77337C11.02 6.48337 11.5 6.48337 11.79 6.77337C12.08 7.06337 12.08 7.54337 11.79 7.83337L8.79 10.8334L11.79 13.8334Z'
                fill='white'
                className='fill-white opacity-100  sm:fill-black'
              />
            </svg>
          </i>
          <div className='links font-feature-setting flex font-dm-sans text-18px font-medium tracking-[-1px]'>
            <p className='text-light-whiteO3 sm:text-black/30'>{des} </p>
            {des && <span className='px-1 text-white sm:text-black'>/</span>}
            <p className='text-white sm:text-black'>{title}</p>
          </div>
        </div>
        <div className='btns space-x-3 font-dm-sans text-medium font-medium leading-6'>
          <button className='h-[34px] rounded-[5px] border border-light-whiteO2 px-[14px] text-light-pureWhite outline-none  duration-200 hover:bg-blue-azul hover:text-light-pureWhite sm:border-black/20 sm:text-black '>
            Apply Filters
          </button>
          <button className='h-[34px] rounded-[5px] border border-light-whiteO2 px-[14px] text-light-pureWhite outline-none  duration-200 hover:bg-blue-azul hover:text-light-pureWhite sm:border-black/20 sm:text-black '>
            Clear All
          </button>
        </div>
      </div>
    </section>
  )
}

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  des: PropTypes.string,
}

export default Breadcrumb
