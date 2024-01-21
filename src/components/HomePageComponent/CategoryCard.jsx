import PropTypes from 'prop-types'

const CategoryCard = ({ categoryData, onClickHandler }) => {
  const categoryCardHtml = categoryData.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => onClickHandler(item.id, 'category')}
        className={`font-feature-settings flex h-[42px] items-center justify-between rounded-[34px] border border-blue-darkO1 px-5 font-dm-sans text-medium font-medium leading-8 duration-300 ease-linear hover:cursor-pointer ${
          item.selected
            ? 'bg-blue-azul  text-white'
            : 'bg-blue-azulO7 text-blue-deepCove'
        } `}
      >
        <h3>{item.value}</h3>
        <span>{item.number}</span>
      </div>
    )
  })
  return categoryCardHtml
}

CategoryCard.propTypes = {
  CategoryData: PropTypes.array,
  onClickHandler: PropTypes.func,
}

export default CategoryCard
