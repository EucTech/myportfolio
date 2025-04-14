import twitterlogo from './imgs/twitter-x-line.png'


const Footer = () => {
  return (
    <>
      {/* line */}
      <div  className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos = "fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>EucTech</span>
              </div>
              {/* email */}
              {/* <span className="text-[#ABB2BF]">igboekwulusifranklin@gmail.com</span> */}
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Web Developer @Global</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-4">
              <a href="https://x.com/Euc_Tech/" target="_blank">
                <i className="ri-twitter-x-fill text-[#ABB2BF] text-2xl"></i>
                <img src={twitterlogo} alt="" style={{ filter:"invert(1)", width:"20px" }}/>
              </a>
              <a href="https://www.linkedin.com/in/ezeibe-uchechukwu-76397522b" target="_blank">
                <i className="ri-linkedin-box-fill text-[#ABB2BF] text-2xl"></i>
              </a>
              <a href="https://www.github.com/EucTech" target="_blank">
                <img src={require("./imgs/Github.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          &copy; Copyright {new Date().getFullYear()}. Made by EucTech
        </div>
      </div>
    </>
  );
};

export default Footer;
