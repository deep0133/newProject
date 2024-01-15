import PropTypes from "prop-types";
const ItemCard = ({
  badgeColor,
  badgeValue,
  title,
  point_1,
  point_2,
  point_3,
}) => {
  return (
    <div className='border-b px-4 py-5 relative'>
      <div className='absolute top-3 left-0 flex justify-between w-full'>
        <div
          style={{ background: badgeColor }}
          className={`badge  rounded-r-lg pl-5 pr-3 text-sm text-white py-1 flex justify-center items-center`}>
          <p>{badgeValue}</p>
        </div>
        <div className='icons flex gap-2 items-center pr-5'>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              viewBox='0 0 35 35'
              fill='none'>
              <circle cx='17.5' cy='17.5' r='17.5' fill='#408000' />
              <circle
                cx='17.5'
                cy='17.5'
                r='17'
                stroke='#00035C'
                strokeOpacity='0.1'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M13.6792 13.9125C13.6792 11.5446 15.5987 9.62502 17.9667 9.62502C19.9636 9.62502 21.6431 10.9908 22.1191 12.8402C22.2034 13.1678 22.5374 13.365 22.8649 13.2807C23.1926 13.1964 23.3897 12.8625 23.3054 12.5349C22.6935 10.1574 20.5361 8.40002 17.9667 8.40002C14.9222 8.40002 12.4542 10.8681 12.4542 13.9125V15.5904C11.5438 15.6585 10.9509 15.8301 10.5176 16.2635C9.79999 16.9811 9.79999 18.136 9.79999 20.4459C9.79999 22.7557 9.79999 23.9106 10.5176 24.6283C11.2352 25.3459 12.3901 25.3459 14.7 25.3459H21.2333C23.5432 25.3459 24.6981 25.3459 25.4157 24.6283C26.1333 23.9106 26.1333 22.7557 26.1333 20.4459C26.1333 18.136 26.1333 16.9811 25.4157 16.2635C24.6981 15.5459 23.5432 15.5459 21.2333 15.5459H14.7C14.3313 15.5459 13.9919 15.5459 13.6792 15.5488V13.9125ZM19.6 20.4459C19.6 21.3479 18.8687 22.0792 17.9667 22.0792C17.0646 22.0792 16.3333 21.3479 16.3333 20.4459C16.3333 19.5438 17.0646 18.8125 17.9667 18.8125C18.8687 18.8125 19.6 19.5438 19.6 20.4459Z'
                fill='white'
              />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'>
              <path
                d='M10.3392 8.66089C12.1204 10.4421 12.1204 13.3238 10.3392 15.0971C8.55792 16.8705 5.67625 16.8784 3.90292 15.0971C2.12958 13.3159 2.12167 10.4342 3.90292 8.66089'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8.38376 10.6163C6.53126 8.76378 6.53126 5.75545 8.38376 3.89503C10.2363 2.03461 13.2446 2.04253 15.105 3.89503C16.9654 5.74753 16.9575 8.75586 15.105 10.6163'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'>
              <path
                d='M14.6667 7.76672H10.8C9.77999 7.76672 9.07999 6.99338 9.07999 6.04671V3.90002C9.07999 2.95336 9.77999 2.18005 10.8 2.18005H12.9467C13.8933 2.18005 14.6667 2.95336 14.6667 3.90002V7.76672Z'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M14.6667 7.76672C14.6667 11.8001 13.9133 12.4667 11.6467 13.8134'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.91333 7.76672H3.04666C2.02666 7.76672 1.32666 6.99338 1.32666 6.04671V3.90002C1.32666 2.95336 2.02666 2.18005 3.04666 2.18005H5.19999C6.14666 2.18005 6.91999 2.95336 6.91999 3.90002V7.76672'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.91334 7.76672C6.91334 11.8001 6.16001 12.4667 3.89334 13.8134'
                stroke='#00035C'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:1;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
          <i>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='19'
              height='19'
              viewBox='0 0 19 19'
              fill='none'>
              <path
                d='M5.85833 5.00333L12.5796 2.76292C15.5958 1.7575 17.2346 3.40417 16.2371 6.42042L13.9967 13.1417C12.4925 17.6621 10.0225 17.6621 8.51833 13.1417L7.85333 11.1467L5.85833 10.4817C1.33791 8.9775 1.33791 6.51542 5.85833 5.00333Z'
                stroke='#00035C'
                strokeOpacity='0.5'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:0.5;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M8.00375 10.8062L10.8379 7.96411'
                stroke='#00035C'
                strokeOpacity='0.5'
                // style='stroke:#00035C;stroke:color(display-p3 0.0000 0.0118 0.3608);strokeOpacity:0.5;'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </i>
        </div>
      </div>
      <div className='content mt-10 px-4 space-y-1'>
        <h3 className='font-semibold text-[16px]'>{title}</h3>
        <p className='text-sm text-gray-600 font-medium'>{point_1}</p>
        <p className='text-sm text-gray-600 font-medium'>{point_2}</p>
        <p className='text-sm text-gray-600 font-medium'>{point_3}</p>
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  badgeColor: PropTypes.string,
  badgeValue: PropTypes.string,
  title: PropTypes.string,
  point_1: PropTypes.string,
  point_2: PropTypes.string,
  point_3: PropTypes.string,
};

export default ItemCard;
