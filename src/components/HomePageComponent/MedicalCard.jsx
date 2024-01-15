import { PropTypes } from "prop-types";

const MedicalCard = ({ medicalData, onClickHandler }) => {
  const medicalCardHtml = medicalData.map((item) => {
    return (
      <div
        key={item.id}
        onClick={() => onClickHandler(item.id, "medical")}
        className={`medical-card px-1 w-[120px] hover:cursor-pointer duration-300 ease-in ${
          item.selected ? "bg-blue-700 text-white" : "text-blue-700 bg-white"
        } flex-shrink-0 pt-1 border rounded-md`}>
        <h3
          className={`text-center px-2 font-bold pb-1 border-b-[3px] border-blue-500  `}>
          {item.value}
        </h3>
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
