export default function Footer() {
  return (
    <footer className='w-full bg-black py-5 font-dm-sans text-white '>
      <div className='responsiveWidth md:-px-5 mx-auto flex flex-col items-baseline justify-between gap-3 text-[14px] text-xs leading-[20px] md:flex-row md:gap-6'>
        <p className='min-w-[287px] pt-3 font-medium '>
          © 2023 Website hosted and managed by ADS | AVAGS DIGITAL SERVICES LLP
          - All Rights Reserved
        </p>
        <div className='flex flex-nowrap gap-5 text-nowrap py-3'>
          <p className='flex-wrap hover:cursor-pointer'>Terms and Conditions</p>
          <p className='flex-wrap hover:cursor-pointer'>Privacy Policy</p>
          <p className='flex-wrap hover:cursor-pointer'>Contact Us</p>
        </div>
      </div>
    </footer>
  )
}
