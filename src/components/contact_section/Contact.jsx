const Contact = () => {
  return (
    <>
      <div  data-aos = "fade-up" data-aos-delay="1000" className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>contacts
              </div>
              <div className="line w-1/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex items-start flex-wrap gap-10 justify-between">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className=" text-[#ABB2BF]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Message me here
              </h2>
              {/* get in touch */}
              <div className="">
                {/* links */}
                <div className="flex gap-1 items-center mb-3">
                  <i className="ri-whatsapp-line text-[#ABB2BF] text-3xl ml-1 pb-0 mb-0"></i>
                  {/* <img src={require("./imgs/whatsapp (1).png")} alt="" className="w-[4%] mx-1" style={{ filter: "invert(100%)", color:"#ABB2BF" }}/> */}
                  <span className="text-[#ABB2BF]">+250795418393</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={require("./imgs/Email.png")} alt="" />
                  <span className="text-[#ABB2BF]">uchechukwuezeibe1@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
