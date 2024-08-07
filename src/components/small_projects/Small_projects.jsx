import React from 'react'

const Small_projects = () => {
    
    let projects = [
        {
            languages: ["HTML", "CSS", "JavaScript"],
            title: "My URL Shortner",
            body: 'Start creating scalable discord.js bot with typescript in seconds',
            link:"https://my-urlshortner.netlify.app/"
        },
        {
            languages: ["JSX", "JS", "REACT", "TAILWIND CSS"],
            title: "My Dictionary Web App",
            body: 'Front-end of my future blog website written in vue',
            link:"https://frank-dictionary-web-app.netlify.app/"
        },
        {
            languages: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            title: "IAP Solar",
            body: 'Figma landing page about service for viewing chess tournaments',
            link:"https://iapsolar.com/"
        },
        {
            languages: ["JSX", "JS", "REACT", "REST API"],
            title: "Rest Countries API",
            body: 'Front-end of my future blog website written in vue',
            link:"https://frankrestcountriesapi.netlify.app/"
        },
        {
            languages: ["JS", "CSS", "HTML"],
            title: "Tic-Tac-Toe Game",
            body: 'Front-end of my future blog website written in vue',
            link:"https://franktictactoe.netlify.app/"
        },
        {
            languages: ["JS", "CSS", "HTML"],
            title: "Web Masters Academy",
            body: 'Front-end of my future blog website written in vue',
            link:"https://webmastersacademy.netlify.app/"
        },
        // {
        //     languages: ["VUE", "CSS", "HTML"],
        //     title: "My blog",
        //     body: 'Front-end of my future blog website written in vue'
        // },
        // {
        //     languages: ["VUE", "CSS", "HTML"],
        //     title: "My blog",
        //     body: 'Front-end of my future blog website written in vue'
        // },
    ]
    // you will write dates by yourselves
    return (
        <div className=' pt-[80px] px-5 max-w-[1560px] mx-auto'>
            {/* title */}
            <div className="">
                <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                    <span className=" text-[#C778DD]">#</span>
                    <span>small-projects</span>
                </div>
            </div>
            {/* body/cards */}
            <div className="cards flex justify-center flex-wrap gap-4">
                {
                    // mapping
                    projects.map(e => {
                        let { languages, title, body, link } = e
                        return <>
                            {/* card */}
                            <div className="card max-w-[331px] w-full border border-[#ABB2BF]">
                                {/* skills */}
                                <div className=" border-b border-[#ABB2BF] p-2 text-[#ABB2BF]">
                                    {languages.map(lang => {
                                        return <span>{lang} </span>
                                    })}
                                </div>
                                {/* discription */}
                                <div className="disc p-4">
                                    <h2 className=' text-white font-medium text-2xl mb-5'>{title}</h2>
                                    {/* <p className=' text-[#ABB2BF] py-4'>{body}</p> */}
                                    <button className=' border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
                                        <a href={link}>Live {'<'}~{'>'}</a>
                                    </button>
                                </div>
                            </div></>
                    })
                }
            </div>
        </div>
    )
}

export default Small_projects