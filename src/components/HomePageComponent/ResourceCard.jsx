import PropTypes from "prop-types";
const ResourceCard = ({ resourceCardData }) => {
  const resourceCardHtml = resourceCardData.map((item) => {
    return (
      <div
        key={item.id}
        className={`border p-5 group rounded-lg border-blue-darkO1 bg-white text-blue-darkBlue font-dm-san space-y-3`}
      >
        <h3 className="text-15px group-hover:text-blue-darkO6 font-medium line-clamp-2 group-hover:underline">
          {item.title}
        </h3>
        <p className="text-medium font-normal line-clamp-3 opacity-70">
          {item.desc}
        </p>
      </div>
    );
  });
  return resourceCardHtml;
};

ResourceCard.propTypes = {
  resourceCardData: PropTypes.array,
};

export default ResourceCard;
