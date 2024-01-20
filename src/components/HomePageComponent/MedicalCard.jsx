import { PropTypes } from "prop-types";

const MedicalCard = ({ medicalData, onClickHandler }) => {
  const medicalCardHtml = medicalData.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => onClickHandler(item.id, "medical")}
        className={`medical-card relative w-[137px] h-[49px] flex hover:cursor-pointer 
        duration-300 ease-in flex-shrink-0 gap-[10px] rounded-[9px] justify-center items-center border border-blue-clearO2 font-feature-setting font-dm-sans ${
          item.selected
            ? "bg-blue-persianBlue text-white"
            : "text-blue-persianBlue  bg-inherit"
        }  `}
      >
        <h3 className="text-center font-bold text-19px leading-8">
          {item.value}
        </h3>
        <div className="w-[5px] border-none h-[120px] absolute shadow-[0px_4px_14px_ 0px_rgba(0,_0,_0,_0.09)] left-[65px] bottom-[-58.5px] rotate-90 flex-shrink-0 rounded-md bg-blue-soft"></div>
      </div>
    );
  });
  return medicalCardHtml;
};

MedicalCard.propTypes = {
  medicalData: PropTypes.array,
  onClickHandler: PropTypes.func,
};

export default MedicalCard;
