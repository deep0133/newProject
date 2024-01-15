import PropTypes from "prop-types";

const SelectedFilter = ({ title }) => {
  return (
    <div className='selected-filtered px-3 text-xs py-1 rounded-md font-semibold w-fit bg-gray-200 flex justify-center items-center'>
      <p className='item'>{title}</p>
      <i className='hover:cursor-pointer'>
        <svg
          width='30'
          height='30'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g id='Group 1000004642'>
            <g id='Group 1000004641'>
              <g id='Group 427318269'>
                <circle
                  id='Ellipse 2'
                  cx='17.5'
                  cy='17.5'
                  r='17.5'
                  fill='none'
                />
              </g>
              <g id='Group 1000004640'>
                <path
                  id='Vector'
                  d='M12 22.66L22.66 12'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  id='Vector_2'
                  d='M22.66 22.66L12 12'
                  stroke='black'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
            </g>
          </g>
        </svg>
      </i>
    </div>
  );
};

SelectedFilter.propTypes = {
  title: PropTypes.string,
};

export default SelectedFilter;
