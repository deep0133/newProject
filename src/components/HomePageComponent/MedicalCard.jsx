import { PropTypes } from 'prop-types'

const MedicalCard = ({ medicalData, onClickHandler }) => {
  const medicalCardHtml = medicalData.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => onClickHandler(item.id, 'medical')}
        className={`medical-card font-feature-setting relative flex h-[49px] w-[137px] 
        flex-shrink-0 items-center justify-center gap-[10px] rounded-[9px] border border-blue-clearO2 font-dm-sans duration-300 ease-in hover:cursor-pointer ${
          item.selected
            ? 'bg-blue-persianBlue text-white'
            : 'bg-inherit  text-blue-persianBlue'
        }  `}
      >
        <h3 className='text-center text-19px font-bold leading-8'>
          {item.value}
        </h3>
        <div className='shadow-[0px_4px_14px_ 0px_rgba(0,_0,_0,_0.09)] absolute bottom-[-58.5px] left-[65px] h-[120px] w-[5px] flex-shrink-0 rotate-90 rounded-md border-none bg-blue-soft'></div>
      </div>
    )
  })
  return medicalCardHtml
}

MedicalCard.propTypes = {
  medicalData: PropTypes.array,
  onClickHandler: PropTypes.func,
}

export default MedicalCard
