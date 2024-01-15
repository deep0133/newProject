import PropTypes from "prop-types";

const IconCard = ({ title, number, iconLink, bgColor }) => {
  return (
    <div
      className={`relative text-xs border bg-blueCardBackground rounded-md px-5 py-2 `}>
      <div className={`icon absolute top-[-17px] left-[-15px] bg-[${bgColor}]`}>
        <img
          src={iconLink}
          className={`w-8 h-8 rounded-full`}
          style={{ background: bgColor }}
        />
      </div>
      <p>{title}</p>
      <p className='font-bold text-sm'>{number}</p>
    </div>
  );
};

IconCard.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number,
  iconLink: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
};

export default IconCard;
