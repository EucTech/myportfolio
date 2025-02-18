import React from 'react'

const Contact = () => {
    return (
        <div className='px-5 max-w-[1560px] min-h-screen mx-auto pt-20 py-10'>
            {/* title */}
            <div className=" text-white font-semibold text-[32px] mt-12">
                <span className=' text-[#C778DD]'>/</span>
                contacts</div>
            {/* h2 title */}
            <div className=" text-white mt-[14px] mb-[46px]">Who am I?</div>
            {/* flex main */}
            <div className="flex justify-between flex-wrap gap-10">
                {/* left side */}
                <div className="  md:w-3/5 w-full">
                    {/* some text */}
                    <div className=" text-[#ABB2BF] font-medium">
                        I’m interested in freelance, full-time and part-time opportunities. However, if you have other request or question, don’t hesitate to contact me
                    </div>
                </div>
                {/* right side */}
                <div className="flex flex-col sm:flex-row gap-3">
                    {/* boxes/flex */}
                    {/* 1 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-2'>Call Number</h2>
                        <span className='text-[#ABB2BF]'>+250795418393</span>
                    </div>
                    {/* 2 */}
                    <div className=" p-4 border border-[#ABB2BF]">
                        <h2 className=' text-white font-medium pb-4 '>Message me here</h2>
                        <div className=" text-[#ABB2BF]">
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                {/* <img src={require("./imgs/Discord.png")} alt="" /> */}
                                {/* text */}
                                {/* <span>Elias#1234</span> */}
                            </div>
                            {/* contacts */}
                            <div className=" flex gap-1 items-center">
                                {/* img */}
                                <img src={require("./imgs/Email.png")} alt="" />
                                {/* text */}
                                <span>uchechukwuezeibe1@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* all media */}
            <div className=" mt-6 mb-5x">
                {/* title */}
                <div className=" text-[32px] font-medium text-white"><span className='text-[#C778DD]'>#</span>all-media</div>
                {/* media */}
                <div className=" flex gap-6">
                    <a href="https://x.com/Euc_Tech" target='_blank'>
                        <div className=" text-[#ABB2BF] flex items-center gap-1">
                            <img src={require('../footer/imgs/twitter-x-line.png')} className='mr-2 w-[20px] invert' alt="" />
                            <span>@Euc_Tech</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact


// We completed our project :)