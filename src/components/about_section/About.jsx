const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div data-aos="fade-right" className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, I’m Uche!
              <br />
              <br />
              I’m a self-taught front-end developer Based in Rwanda. I specialize
              in building responsive websites from the ground up and
              transforming them into modern, user-friendly web experiences.
              <br />
              <br />
              Turning my creativity and expertise into functional websites has
              been my passion for years. I’ve assisted numerous clients in
              establishing their online presence and continually seek out the
              latest technologies and frameworks to enhance my skills.
            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="/contact"
                className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
              >
                <button>Contact me -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div data-aos="fade-left" className=" mx-auto">
            <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
