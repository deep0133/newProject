const Breadcrumb = () => {
  return (
    <section className='breadcrumb bg-black py-8 text-white sm:bg-gray-200 sm:py-3 sm:text-black'>
      <div className='mx-auto flex w-[95%] max-w-[80rem] flex-col justify-between gap-5 px-1 sm:w-[90%] sm:flex-row lg:w-[80%]'>
        <div className='icon-links flex items-center space-x-3'>
          <i>
            <svg
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.19 0.833374H5.81C2.17 0.833374 0 3.00337 0 6.64337V15.0134C0 18.6634 2.17 20.8334 5.81 20.8334H14.18C17.82 20.8334 19.99 18.6634 19.99 15.0234V6.64337C20 3.00337 17.83 0.833374 14.19 0.833374ZM11.79 13.8334C12.08 14.1234 12.08 14.6034 11.79 14.8934C11.64 15.0434 11.45 15.1134 11.26 15.1134C11.07 15.1134 10.88 15.0434 10.73 14.8934L7.2 11.3634C6.91 11.0734 6.91 10.5934 7.2 10.3034L10.73 6.77337C11.02 6.48337 11.5 6.48337 11.79 6.77337C12.08 7.06337 12.08 7.54337 11.79 7.83337L8.79 10.8334L11.79 13.8334Z'
                fill='white'
                className='fill-white opacity-100  sm:fill-black'
              />
            </svg>
          </i>
          <div className='links flex'>
            <p className='text-gray-500'>Basic Search </p>
            <span className='px-1 font-bold'>/</span>
            <p>Advanced Search</p>
          </div>
        </div>
        <div className='btns space-x-3'>
          <button className='rounded-md border border-gray-700 px-4 py-1 text-center outline-none hover:bg-blue-500 hover:text-white sm:border-gray-400'>
            Apply Filters
          </button>
          <button className='rounded-md border border-gray-700 px-4 py-1 text-center outline-none hover:bg-blue-500 hover:text-white sm:border-gray-400'>
            Clear All
          </button>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
