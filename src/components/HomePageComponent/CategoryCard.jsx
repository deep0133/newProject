import PropTypes from "prop-types";

const CategoryCard = ({ categoryData, onClickHandler }) => {
  const categoryCardHtml = categoryData.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => onClickHandler(item.id, "category")}
        className={`px-5 hover:cursor-pointer duration-300 ease-linear py-2 border-2  ${
          item.selected ? "bg-blue-600  text-white" : "bg-gray-200 text-black"
        } flex justify-between items-center rounded-full`}>
        <h3>{item.value}</h3>
        <span>{item.number}</span>
      </div>
    );
  });
  return categoryCardHtml;
};

CategoryCard.propTypes = {
  CategoryData: PropTypes.array,
  onClickHandler: PropTypes.func,
};

export default CategoryCard;
