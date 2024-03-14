import { PropTypes } from 'prop-types'

const MedicalCard = ({ subjects, onClickHandler }) => {
  const medicalCardHtml = subjects.map((item) => {
    return (
      <div
        key={item.PK}
        onClick={() => onClickHandler(item.PK)}
        className={`subject-card font-feature-setting relative flex h-[49px] flex-shrink-0 
        items-center justify-center gap-[10px] rounded-[9px] border border-blue-clearO2 px-5 font-dm-sans duration-300 ease-in hover:cursor-pointer ${
          item.selected
            ? 'bg-blue-persianBlue text-white'
            : 'bg-inherit  text-blue-persianBlue'
        }  `}
      >
        <h3 className='text-clip text-nowrap text-center text-19px font-bold leading-8'>
          {item.Name}
        </h3>
        <div className='shadow-[0px_4px_14px_ 0px_rgba(0,_0,_0,_0.09)] absolute bottom-0 mx-auto h-[5px] w-[90%] flex-shrink-0 rounded-md border-none bg-blue-soft'></div>
      </div>
    )
  })
  return medicalCardHtml
}

MedicalCard.propTypes = {
  subjects: PropTypes.array,
  onClickHandler: PropTypes.func,
}

export default MedicalCard
