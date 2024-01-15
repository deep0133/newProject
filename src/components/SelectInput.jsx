import PropTypes from "prop-types";

const SelectInput = ({ items }) => {
  return (
    <select className='outline-none flex-shrink-0 w-max bg-inherit flex-grow-1 flex justify-center items-center text-sm hover:cursor-pointer'>
      {items &&
        items.map((item) => {
          return (
            <option className='bg-white text-black pr-3' key={item.id}>
              {item.value}
            </option>
          );
        })}
    </select>
  );
};

SelectInput.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SelectInput;
