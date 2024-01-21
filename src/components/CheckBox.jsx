import PropTypes from 'prop-types'
const CheckBox = ({ id, checked, name, checkBoxHandler }) => {
  return (
    <input
      type='checkbox'
      name={name}
      onChange={() => checkBoxHandler(id)}
      checked={checked}
      className={'border-none accent-blue-500 outline-none ring-0'}
    />
  )
}

CheckBox.propTypes = {
  id: PropTypes.number,
  checked: PropTypes.bool,
  name: PropTypes.string,
  checkBoxHandler: PropTypes.func,
}

export default CheckBox
