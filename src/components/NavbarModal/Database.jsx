import { PropTypes } from 'prop-types'
export default function Database({ database, changeChandler, setModal }) {
  return (
    <div className='relative '>
      <div className='title mb-8 flex items-center justify-between border-b-2 pb-3'>
        <div className='heading'>
          <div className='font-dm-sans text-[21px] font-bold text-indigo-950'>
            Subscribed Databases
          </div>
          <div className='text-center font-dm-sans text-[13px] font-normal leading-[25px] text-indigo-950'>
            Choose your required databases to be shown{' '}
          </div>
        </div>
        <div className='right-btn flex gap-5'>
          <div className='inline-flex h-10 w-[82px] items-center justify-center gap-2 rounded-lg border border-indigo-950 border-opacity-10 px-4 py-2.5 shadow'>
            <div className='font-dm-sans text-[13px] font-medium leading-tight text-blue-950'>
              Confirm
            </div>
          </div>
          <div className='inline-flex h-10 w-[82px] items-center justify-center gap-2 rounded-lg border border-purple-50 border-opacity-0 bg-indigo-500 px-4 py-2.5 shadow'>
            <div
              onClick={() => {
                setModal('')
              }}
              className='font-dm-sans text-[13px] font-medium leading-tight text-white'
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
      <div className='bottom relative'>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
          {database.map((item) => {
            return (
              <div key={item.id} onClick={() => changeChandler(item.id)}>
                <div
                  className={`${item.selected ? 'bg-blue-sapphire text-white' : 'text-blue-sapphire bg-white '} border-blue-ultramarineBlueO2 cursor-pointer break-words rounded-md border border-opacity-20 px-4 py-1 text-center font-dm-sans text-19px font-bold leading-loose`}
                >
                  {item.value}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Database.propTypes = {
  database: PropTypes.array,
  changeChandler: PropTypes.func,
  setModal: PropTypes.func,
}
