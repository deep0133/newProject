export default function Footer() {
  return (
    <footer className="w-full bg-black py-5 font-dm-sans text-white ">
      <div className="responsiveWidth mx-auto gap-3 md:gap-6 md:-px-5 text-[14px] leading-[20px] md:flex-row flex-col flex text-xs justify-between items-baseline">
        <p className="pt-3 min-w-[287px] font-medium ">
          © 2023 Website hosted and managed by ADS | AVAGS DIGITAL SERVICES LLP
          - All Rights Reserved
        </p>
        <divc className="flex gap-5 py-3 flex-nowrap text-nowrap">
          <p className="hover:cursor-pointer flex-wrap">Terms and Conditions</p>
          <p className="hover:cursor-pointer flex-wrap">Privacy Policy</p>
          <p className="hover:cursor-pointer flex-wrap">Contact Us</p>
        </divc>
      </div>
    </footer>
  );
}
