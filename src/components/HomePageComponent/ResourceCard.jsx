import PropTypes from "prop-types";
const ResourceCard = ({ resourceCardData }) => {
  const resourceCardHtml = resourceCardData.map((item) => {
    return (
      <div key={item.id} className='border-2 p-5 rounded-md'>
        <h3 className='font-semibold line-clamp-2 '>{item.title}</h3>
        <p className='font-light line-clamp-3 text-wrap'>{item.desc}</p>
      </div>
    );
  });
  return resourceCardHtml;
};

ResourceCard.propTypes = {
  resourceCardData: PropTypes.array,
};

export default ResourceCard;
