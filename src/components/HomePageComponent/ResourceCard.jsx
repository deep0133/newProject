import PropTypes from 'prop-types'
const ResourceCard = ({ resourceCardData }) => {
  const resourceCardHtml = resourceCardData.map((item) => {
    return (
      <div
        key={item.id}
        className={`font-dm-san group space-y-3 rounded-lg border border-blue-darkO1 bg-white p-5 text-blue-darkBlue`}
      >
        <h3 className='line-clamp-2 text-15px font-medium group-hover:text-blue-darkO6 group-hover:underline'>
          {item.title}
        </h3>
        <p className='line-clamp-3 text-medium font-normal opacity-70'>
          {item.desc}
        </p>
      </div>
    )
  })
  return resourceCardHtml
}

ResourceCard.propTypes = {
  resourceCardData: PropTypes.array,
}

export default ResourceCard
