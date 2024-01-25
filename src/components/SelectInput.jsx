import PropTypes from 'prop-types'

const SelectInput = ({ items, selectChangeHandler }) => {
  return (
    <select
      onChange={selectChangeHandler}
      className='font-feature-setting flex w-max flex-shrink-0 flex-grow items-center justify-center bg-inherit font-dm-sans text-medium font-medium leading-8 outline-none hover:cursor-pointer'
    >
      {items &&
        items.map((item) => {
          return (
            <option className='bg-white pr-2 text-black' key={item.id}>
              {item.value}
            </option>
          )
        })}
    </select>
  )
}

SelectInput.propTypes = {
  items: PropTypes.array.isRequired,
  selectChangeHandler: PropTypes.func,
}

export default SelectInput
