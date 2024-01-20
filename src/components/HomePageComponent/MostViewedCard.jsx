import PropTypes from "prop-types";
const MostViewedCard = ({ mostViewedCardData }) => {
  const mostViewedCardHtml = mostViewedCardData.map((item) => {
    return (
      <div
        key={item.id}
        className="py-3 md:ml-2  mr-2 md:mr-0 group flex border-b justify-between font-dm-sans font-medium"
      >
        <p className="font-medium group-hover:text-blue-darkO6 group-hover:underline line-clamp-1 text-wrap border-b-2 text-15px  border-transparent text-blue-darkBlue">
          {item.title}
        </p>
        <sapn className="flex justify-center h-[30px] px-[16px] py-[10px] items-center flex-shrink-0 border border-blue-darkO1 bg-blue-ultramarineBlueO1 rounded-[21px] text-xSmall font-medium leading-5">
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
