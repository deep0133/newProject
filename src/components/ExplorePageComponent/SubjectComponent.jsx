import PropTypes from 'prop-types'
import SubSubjectComponent from './SubSubjectComponent'
const SubjectComponent = ({ subject, subjectHandler }) => {
  return (
    <details
      className='ring-b-1 relative outline-none open:bg-white'
      open={subject.open}
    >
      <summary
        onClick={() => {
          subjectHandler(subject.id)
        }}
        className=' relative hover:cursor-pointer'
      >
        <div className='hover:text-blue-clear text-grey-brightGrey flex items-center justify-between font-dm-sans text-medium font-medium leading-5'>
          <p className=' flex space-x-1 underline'>{subject.title}</p>
          <div className='flex items-center gap-1'>
            <span className=''>{subject.number}</span>
            <div className={`up-arrow ${!subject.open ? 'rotate-180' : ''}`}>
              <i className={`up-arrow `}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.06 11.17L12.53 14.7C12.38 14.85 12.19 14.92 12 14.92C11.81 14.92 11.62 14.85 11.47 14.7L7.94 11.17C7.65 10.88 7.65 10.4 7.94 10.11C8.23 9.82 8.71 9.82 9 10.11L12 13.11L15 10.11C15.29 9.82 15.77 9.82 16.06 10.11C16.35 10.4 16.35 10.87 16.06 11.17Z'
                    fill='#3461FF'
                  />
                </svg>
              </i>
            </div>
          </div>
        </div>

        <span className='absolute -left-2 top-0 h-5 w-5 rounded-full bg-white'></span>
      </summary>
      <div className='border-blue-darkO2 mt-3 rounded-[9px] border p-3 leading-6'>
        {subject.innerContent.map((subItem, indx) => {
          return <SubSubjectComponent key={indx} subSubject={subItem} />
        })}
      </div>
    </details>
  )
}

SubjectComponent.propTypes = {
  subject: PropTypes.object,
  checkBoxHandler: PropTypes.func.isRequired,
  subjectHandler: PropTypes.func.isRequired,
}

export default SubjectComponent
