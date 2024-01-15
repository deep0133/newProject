import PropTypes from "prop-types";
import CheckBox from "../CheckBox";

const SelectionType = ({ items, typeName, checkBoxHandler }) => {
  const onchangeCheckbox = (id) => {
    checkBoxHandler(id, typeName, items);
  };
  return (
    <div className=''>
      <div className='flex justify-between border px-3 py-2 rounded-md'>
        <p>{typeName}</p>
        <div className='all flex justify-center items-center space-x-1'>
          <CheckBox
            id={0}
            checkBoxHandler={onchangeCheckbox}
            checked={items[0].checked}
          />
          <label>All</label>
        </div>
      </div>
      <div className='border my-2 rounded-md '>
        {items.map((item) => {
          return (
            <div key={item.id} className='flex justify-between px-3 py-2'>
              {item.id !== 0 && (
                <div className='all flex justify-center items-center space-x-2'>
                  <CheckBox
                    id={item.id}
                    checkBoxHandler={onchangeCheckbox}
                    checked={item.status}
                  />
                  <label>{item.value}</label>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

SelectionType.propTypes = {
  items: PropTypes.array.isRequired,
  typeName: PropTypes.string.isRequired,
  checkBoxHandler: PropTypes.func.isRequired,
};

export default SelectionType;
