import PropTypes from "prop-types";
const MostViewedCard = ({ mostViewedCardData }) => {
  const mostViewedCardHtml = mostViewedCardData.map((item) => {
    return (
      <div
        key={item.id}
        className='p-3 flex border-b-2 justify-between text-sm'>
        <p className='font-medium  line-clamp-1 text-wrap border-b-2 border-transparent'>
          {item.title}
        </p>
        <sapn className='font-semibold flex justify-center items-center flex-shrink-0 border-2 rounded-full py-1 px-3 text-xs bg-gray-100'>
          {item.tag}
        </sapn>
      </div>
    );
  });
  return mostViewedCardHtml;
};

MostViewedCard.propTypes = {
  mostViewedCardData: PropTypes.array,
};

export default MostViewedCard;
