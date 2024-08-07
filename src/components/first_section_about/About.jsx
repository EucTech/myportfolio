import { useNavigate } from "react-router";
import "./about.css";

const About = () => {

  const navigate = useNavigate()
   
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div data-aos="fade-right" className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            EucTech is a <span className="text-[#C778DD]">web developer</span> with expertise in
            <span className="text-[#C778DD]"> front-end development.</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
          He creates responsive websites that blend technology with creativity.
          </p>
          <button onClick={() => navigate("/contact")} className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me!!
          </button>
        </div>
        <div  data-aos="fade-left" data-aos-delay="400" className="mx-auto">
          <div className="">
            <img src={require("./imgs/man.png")} alt="" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Currently working on <span className="text-white">Self Development</span>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className=" px-5 py-10">
        <img className="mx-auto" src={require("./imgs/quote.png")} alt="" />
      </div>
    </>
  );
};

export default About;
