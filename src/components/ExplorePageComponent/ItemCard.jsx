import PropTypes from 'prop-types'
import greenLockIcon from '../../assets/svg/greenLock.svg'
import linkIcon from '../../assets/svg/link.svg'
import commaseIcon from '../../assets/svg/commase.svg'
import sendIcon from '../../assets/svg/send.svg'
import { Link } from 'react-router-dom'
const ItemCard = ({
  badgeColor,
  badgeValue,
  title,
  link,
  point_1,
  point_2,
  point_3_1,
  point_3_2,
}) => {
  return (
    <Link to={link}>
      <div className='relative border-b px-4 py-5'>
        <div className='absolute left-0 top-3 flex w-full justify-between'>
          <div
            style={{ background: badgeColor }}
            className={`badge  flex items-center justify-center rounded-r-lg py-1 pl-5 pr-3 text-sm text-white`}
          >
            <p>{badgeValue}</p>
          </div>
          <div className='icons flex items-center gap-2 pr-5'>
            <img src={greenLockIcon} alt='' />
            <img src={linkIcon} alt='' />
            <img src={commaseIcon} alt='' />
            <img src={sendIcon} alt='' />
          </div>
        </div>
        <div className='content mt-10 space-y-1 px-4 font-dm-sans'>
          <h3 className='text-18px font-bold text-blue-darkBlue'>{title}</h3>
          <p className='text-medium font-medium text-black/70'>{point_1}</p>
          <p className='text-medium font-medium text-black/70'>{point_2}</p>
          <p className='text-medium font-medium text-black/70'>
            {point_3_1} <span className='text-black'>{point_3_2}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}
ItemCard.propTypes = {
  badgeColor: PropTypes.string,
  badgeValue: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  point_1: PropTypes.string,
  point_2: PropTypes.string,
  point_3_1: PropTypes.string,
  point_3_2: PropTypes.string,
}

export default ItemCard
