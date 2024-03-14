import PropTypes from 'prop-types'

const CategoryCard = ({ categoryData, onClickHandler }) => {
  const categoryCardHtml = categoryData.map((item, index) => {
    return (
      <div
        key={index}
        onClick={() => onClickHandler(item?.Pk)}
        className={`font-feature-settings flex h-[42px] items-center justify-between rounded-[34px] border border-blue-darkO1 px-5 font-dm-sans text-medium font-medium leading-8 duration-300 ease-linear hover:cursor-pointer ${
          item?.selected
            ? 'bg-blue-azul text-white'
            : 'bg-blue-azulO7 text-blue-deepCove'
        } `}
      >
        <h3 className='line-clamp-1'>{item?.Name}</h3>
        {/* <span>{item.count}</span> */}
      </div>
    )
  })
  return categoryCardHtml.length > 0 ? (
    categoryCardHtml
  ) : (
    <h1>No SubSubjects Found</h1>
  )
}

CategoryCard.propTypes = {
  categoryData: PropTypes.array,
  onClickHandler: PropTypes.func,
}

export default CategoryCard
