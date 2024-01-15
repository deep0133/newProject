export default function Footer() {
  return (
    <footer className='w-full bg-black py-5 text-white'>
      <div className='w-[95%] sm:w-[90%] lg:w-[80%] max-w-[80rem] mx-auto gap-3 md:gap-6 md:flex-row flex-col flex text-xs justify-between'>
        <p className=''>
          © 2023 Website hosted and managed by ADS | AVAGS DIGITAL SERVICES LLP
          - All Rights Reserved
        </p>
        <divc className='flex gap-3 flex-nowrap text-nowrap'>
          <p className='hover:cursor-pointer'>Terms and Conditions</p>
          <p className='hover:cursor-pointer'>Privacy Policy</p>
          <p className='hover:cursor-pointer'>Contact Us</p>
        </divc>
      </div>
    </footer>
  );
}
