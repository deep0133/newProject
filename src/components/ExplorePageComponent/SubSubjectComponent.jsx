import PropTypes from 'prop-types'
import CheckBox from '../CheckBox'

const SubSubjectComponent = ({ subSubject }) => {
  return (
    <div className='flex items-baseline space-x-1 py-1'>
      <CheckBox
        id={subSubject.id}
        checkBoxHandler={() => console.log('Id : ', subSubject.id)}
      />
      <label className='text-blue-bluewood font-dm-sans text-medium font-medium leading-5'>
        {subSubject.label}
      </label>
    </div>
  )
}

SubSubjectComponent.propTypes = {
  subSubject: PropTypes.object,
}

export default SubSubjectComponent
