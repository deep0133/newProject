import PropTypes from 'prop-types'

const IconCard = ({ title, number, iconLink, bgColor }) => {
  return (
    <div
      className={`relative rounded-[9px] border border-blue-darkO1 bg-light-pureWhite px-6 py-4 text-xs font-bold tracking-[-1px] sm:border-light-whiteO1 sm:bg-light-whiteO05 `}
    >
      <div
        className={`icon font-feature-setting absolute left-[-13px] top-[-13px] h-8 w-8 overflow-hidden font-dm-sans text-light-pureWhite bg-[${bgColor}]`}
      >
        <img
          src={iconLink}
          className={`rounded-full p-1`}
          style={{ background: bgColor }}
        />
      </div>
      <p
        className={`mb-2 text-16px sm:text-light-pureWhite`}
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
