import PropTypes from "prop-types";

const CategoryCard = ({ categoryData, onClickHandler }) => {
  const categoryCardHtml = categoryData.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => onClickHandler(item.id, "category")}
        className={`px-5 hover:cursor-pointer duration-300 ease-linear border flex justify-between items-center rounded-[34px] h-[42px] border-blue-darkO1 font-feature-settings font-dm-sans text-medium font-medium leading-8 ${
          item.selected
            ? "bg-blue-azul  text-white"
            : "bg-blue-azulO7 text-blue-deepCove"
        } `}
      >
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
