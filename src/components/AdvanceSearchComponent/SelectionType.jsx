import PropTypes from 'prop-types'
import CheckBox from '../CheckBox'

const SelectionType = ({ items, typeName, checkBoxHandler }) => {
  const onchangeCheckbox = (id) => {
    checkBoxHandler(id, typeName, items)
  }
  return (
    <div className=''>
      <div className='flex  justify-between gap-2 rounded-lg border px-3 py-2 font-dm-sans text-medium font-medium leading-6'>
        <p className='border-1 border-grey-iron text-grey-mirage text-nowrap bg-white'>
          {typeName}
        </p>
        <div className='all flex items-center justify-center space-x-1'>
          <CheckBox
            id={0}
            checkBoxHandler={onchangeCheckbox}
            checked={items[0].checked}
          />
          <label className='text-black'>All</label>
        </div>
      </div>
      <div className='my-2 rounded-md border text-medium font-medium leading-5 text-blue-bluewood'>
        {items.map((item) => {
          return (
            <div key={item.id} className='flex justify-between px-3 py-2'>
              {item.id !== 0 && (
                <div className='all flex items-center justify-center space-x-2'>
                  <CheckBox
                    id={item.id}
                    checkBoxHandler={onchangeCheckbox}
                    checked={item.status}
                  />
                  <label className=''>{item.value}</label>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

SelectionType.propTypes = {
  items: PropTypes.array.isRequired,
  typeName: PropTypes.string.isRequired,
  checkBoxHandler: PropTypes.func.isRequired,
}

export default SelectionType
