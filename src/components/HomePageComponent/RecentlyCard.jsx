import PropTypes from "prop-types";
const RecentlyCard = ({ recentlyCardData }) => {
  const recentlyCardHtml = recentlyCardData.map((item) => {
    return (
      <div key={item.id} className='p-5 flex space-x-3 rounded-md text-sm'>
        <div className='basis-16 flex-shrink-0 rounded-md overflow-hidden'>
          <img
            src={item.imageLink}
            className='object-cover aspect-square'
            alt=''
          />
        </div>
        <div className='col-span-4 flex-grow'>
          <p className='font-medium  line-clamp-2 text-yellow-500 text-wrap'>
            {item.date}
          </p>
          <h3 className='font-semibold line-clamp-3'>{item.title}</h3>
        </div>
      </div>
    );
  });
  return recentlyCardHtml;
};

RecentlyCard.propTypes = {
  recentlyCardData: PropTypes.array,
};
export default RecentlyCard;
