import PropTypes from 'prop-types'
import arrowIcon from '../assets/svg/arrow.svg'
const Pagination = ({ currentPage, totalPages, onNextClick, onPrevClick }) => {
  return (
    <nav className='mt-4 flex items-center justify-center'>
      <div className='next-previous-page-icon flex items-center gap-3'>
        <button
          onClick={onPrevClick}
          disabled={currentPage === 1}
          className='flex h-9 w-9 items-center justify-center rounded-[22px] border border-blue-darkO1 '
        >
          <img src={arrowIcon} className='object-cover' alt='' />
        </button>
        <p className='flex flex-nowrap text-nowrap text-medium font-normal leading-5 text-grey-pickledBlueWood'>
          <span className='hidden pr-1 sm:block'>Page</span> {currentPage} of{' '}
          {totalPages}
        </p>
        <button
          onClick={onNextClick}
          disabled={currentPage === totalPages}
          className='flex h-9 w-9 rotate-180 items-center justify-center rounded-[22px] border border-blue-darkO1 '
        >
          <img src={arrowIcon} className='object-cover' alt='' />
        </button>
      </div>
    </nav>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
}

export default Pagination
