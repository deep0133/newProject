import PropTypes from 'prop-types'
const MostViewedCard = ({ mostViewedCardData }) => {
  const mostViewedCardHtml = mostViewedCardData.map((item) => {
    return (
      <div
        key={item.id}
        className='group mr-2  flex justify-between border-b py-3 font-dm-sans font-medium md:ml-2 md:mr-0'
      >
        <p className='line-clamp-1 text-wrap border-b-2 border-transparent text-15px font-medium text-blue-darkBlue  group-hover:text-blue-darkO6 group-hover:underline'>
          {item.title}
        </p>
        <span className='flex h-[30px] flex-shrink-0 items-center justify-center rounded-[21px] border border-blue-darkO1 bg-blue-ultramarineBlueO1 px-[16px] py-[10px] text-xSmall font-medium leading-5'>
          {item.tag}
        </span>
      </div>
    )
  })
  return mostViewedCardHtml
}

MostViewedCard.propTypes = {
  mostViewedCardData: PropTypes.array,
}

export default MostViewedCard
