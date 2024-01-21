import PropTypes from 'prop-types'
import crossNoBgIcon from '../../assets/svg/cross_no_bg.svg'
const SelectedFilter = ({ title }) => {
  return (
    <div className='selected-filtered box-shadow bg-light-magnolia  border-light-magnolia flex h-[40px] w-fit items-center justify-center rounded-lg border px-5 text-xs font-semibold'>
      <p className='item font-dm-sans text-xSmall font-medium  leading-5 text-black'>
        {title}
      </p>
      <img className='ml-1 hover:cursor-pointer' src={crossNoBgIcon} />
    </div>
  )
}

SelectedFilter.propTypes = {
  title: PropTypes.string,
}

export default SelectedFilter
