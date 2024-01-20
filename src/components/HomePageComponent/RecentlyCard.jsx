import PropTypes from "prop-types";
const RecentlyCard = ({ recentlyCardData }) => {
  const recentlyCardHtml = recentlyCardData.map((item) => {
    return (
      <div key={item.id} className=" group flex space-x-3 text-sm flex-grow ">
        <div className="basis-16 flex-shrink-0 rounded-md">
          <img
            src={item.imageLink}
            className="w-[59px] h-[73px] z-50 flex-shrink-0 rounded-[5px] border-blue-ultramarineBlue border object-cover bg-no-repeat  shadow-[0px_3px_10px_0px_rgba(0,_0,_0,_0.02)] "
            alt=""
          />
        </div>
        <div className="col-span-4 flex-grow font-dm-sans font-medium">
          <p className="font-medium line-clamp-2 max-w-[614px] text-medium text-brown-yellowishBrown text-wrap">
            {item.date}
          </p>
          <h3 className="text-16px pr-16 md:max-w-[614px] text-blue-darkBlue group-hover:text-blue-darkO6 group-hover:underline line-clamp-3">
            {item.title}
          </h3>
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
