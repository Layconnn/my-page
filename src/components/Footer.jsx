

export default function Footer() {
  return (
    <div className="bg-[#120b48] text-white md:px-[80px] px-16 py-[70px] grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
      <div>
        {" "}
        <img src='./whitelogo.svg' alt="" />
      </div>
      <div className="">
        <p className="cursor-pointer font-semibold text-[14px] font-['Sora']">Menu</p>
        <p className="cursor-pointer font-normal py-4 font-['Work_sans']">Home</p>
        <p className="cursor-pointer font-normal font-['Work_sans']">Converter</p>
        <p className="cursor-pointer font-normal py-4 font-['Work_sans']">How It Works</p>
      </div>
      <div>
        <p className="cursor-pointer font-semibold text-[14px] font-['Sora']">About Us</p>
        <p className="cursor-pointer font-normal py-4 font-['Work_sans']">About</p>
        <p className="cursor-pointer font-normal font-['Work_sans']">Contact Us</p>
        <p className="cursor-pointer font-normal py-4 font-['Work_sans']">Privacy Policy</p>
      </div>
      <div>
        <p className="cursor-pointer font-semibold text-[14px] font-['Sora']">Screen Record</p>
        <p className="cursor-pointer font-normal py-4 font-['Work_sans']">Browser Window</p>
        <p className="cursor-pointer font-normal font-['Work_sans']">Desktop</p>
        <p className="cursor-pointer font-normal py-4 font-['Work_sans']">Application</p>
      </div>
    </div>
  );
}
