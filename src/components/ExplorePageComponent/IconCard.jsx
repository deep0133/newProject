import PropTypes from 'prop-types'

const IconCard = ({ title, number, iconLink, bgColor }) => {
  return (
    <div
      className={`bg-blueCardBackground relative rounded-md border px-5 py-2 text-xs `}
    >
      <div className={`icon absolute left-[-15px] top-[-17px] bg-[${bgColor}]`}>
        <img
          src={iconLink}
          className={`h-8 w-8 rounded-full`}
          style={{ background: bgColor }}
        />
      </div>
      <p>{title}</p>
      <p className='text-sm font-bold'>{number}</p>
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
