import PropTypes from 'prop-types'
const RecentlyCard = ({ recentlyCardData }) => {
  const recentlyCardHtml = recentlyCardData.map((item) => {
    return (
      <div key={item.id} className=' group flex flex-grow space-x-3 text-sm '>
        <div className='flex-shrink-0 basis-16 rounded-md'>
          <img
            src={item.imageLink}
            className='z-50 h-[73px] w-[59px] flex-shrink-0 rounded-[5px] border border-blue-ultramarineBlue bg-no-repeat object-cover  shadow-[0px_3px_10px_0px_rgba(0,_0,_0,_0.02)] '
            alt=''
          />
        </div>
        <div className='col-span-4 flex-grow font-dm-sans font-medium'>
          <p className='line-clamp-2 max-w-[614px] text-wrap text-medium font-medium text-brown-yellowishBrown'>
            {item.date}
          </p>
          <h3 className='line-clamp-3 pr-16 text-16px text-blue-darkBlue group-hover:text-blue-darkO6 group-hover:underline md:max-w-[614px]'>
            {item.title}
          </h3>
        </div>
      </div>
    )
  })
  return recentlyCardHtml
}

RecentlyCard.propTypes = {
  recentlyCardData: PropTypes.array,
}
export default RecentlyCard
