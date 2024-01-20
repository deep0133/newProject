import PropTypes from "prop-types";

const SelectInput = ({ items }) => {
  return (
    <select className='outline-none font-dm-sans font-feature-setting text-medium font-medium leading-8 flex-shrink-0 w-max bg-inherit flex-grow flex justify-center items-center hover:cursor-pointer'>
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
