import PropTypes from "prop-types";
import CheckBox from "../CheckBox";

const SubSubjectComponent = ({ subSubject }) => {
  return (
    <div className='flex space-x-1 p-1'>
      <CheckBox
        id={subSubject.id}
        checkBoxHandler={() => console.log("Id : ", subSubject.id)}
      />
      <label className='text-gray-600 text-xs'>{subSubject.label}</label>
    </div>
  );
};

SubSubjectComponent.propTypes = {
  subSubject: PropTypes.object,
};

export default SubSubjectComponent;
