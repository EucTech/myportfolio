import React from "react";

const About = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10">
      {/* title */}
      <div className=" mb-12">
        <div className=" text-white w-2/3 font-semibold text-[32px]">
          <div className="">
            <span className="text-[#C778DD]">/</span>
            about-me
          </div>
          <div className=" text-white text-base font-normal mt-[14px]">
            Who am i?
          </div>
        </div>
      </div>
      <div className=" flex-wrap flex items-center justify-between">
        {/* left */}
        <div className="md:w-[48%] w-full">
          {/* disc */}
          <p className="text-[#ABB2BF] ">
            Hello, i’m Uchechukwu!
            <br />
            <br />
            I’m a self-taught front-end developer from Anambra State, Nigeria. I
            specialize in building responsive websites from the ground up and
            transforming them into modern, user-friendly web experiences.
            <br />
            <br />
            Turning my creativity and expertise into functional websites has
            been my passion for years. I’ve assisted numerous clients in
            establishing their online presence and continually seek out the
            latest technologies and frameworks to enhance my skills.
          </p>
        </div>
        {/* right */}
        <div className=" mx-auto">
          <img className="mx-auto" src={require("./imgs/man.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
