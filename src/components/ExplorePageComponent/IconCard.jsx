import PropTypes from 'prop-types'

const IconCard = ({ title, number, iconLink, bgColor }) => {
  return (
    <div
      className={`bg-light-pureWhite sm:bg-light-whiteO05 sm:border-light-whiteO1 relative rounded-[9px] border border-blue-darkO1 px-6 py-4 text-xs font-bold tracking-[-1px] `}
    >
      <div
        className={`icon text-light-pureWhite font-feature-setting absolute left-[-15px] top-[-17px] h-8 w-8 overflow-hidden font-dm-sans bg-[${bgColor}]`}
      >
        <img
          src={iconLink}
          className={`rounded-full `}
          style={{ background: bgColor }}
        />
      </div>
      <p
        className={`sm:text-light-pureWhite mb-2 text-16px`}
        style={{ color: bgColor }}
      >
        {title}
      </p>
      <p className='text-23px'>{number}</p>
    </div>
  )
}

IconCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  iconLink: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
}

export default IconCard
