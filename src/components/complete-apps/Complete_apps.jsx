import React from 'react'
// imgs
import first from "../projects_section/imgs/project1.jpg";
import second from "../projects_section/imgs/project2.jpg";
import third from "../projects_section/imgs/project3.jpg";
import forth from "../projects_section/imgs/project4.jpg";
import fifth from "../projects_section/imgs/project5.jpg";
import sixth from "../projects_section/imgs/project6.jpg";
import seventh from "../projects_section/imgs/project7.jpg";
import eight from "../projects_section/imgs/project8.jpg";
import ninth from "../projects_section/imgs/project9.jpg";
import Project_card from '../project_card/Project_card';

const Complete_apps = () => {
    const projects = [
        {
          img: seventh,
          langs: ["jsx", "css", "javascript", "react", "tailwind css", "node js"],
          title: "The farm house club",
          disc: "A full stack web application for investors in the agricultural industry",
          link: "https://thefarmhouseclub.io/"
        },
        {
          img: eight,
          langs: ["jsx", "react", "css", "javascript"],
          title: "Heart Felt",
          disc: "A full stack web appllication for customization and distribution of cards to loved ones",
          link: "https://new-heartfelt.vercel.app/"
        },
        {
          img: first,
          langs: ["jsx", "css", "javascript", "react", "tailwind css", "node js", "express js", "mongo db"],
          title: "E-Invoice",
          disc: "A Sass for recording sales and generating of receipts both in pdf format and image",
          link: "https://invoice-application-three.vercel.app/"
        },
        {
          img: ninth,
          langs: ["html", "css", "javascript", "bootstrap"],
          title: "The Go travels",
          disc: "Landing page for an applcation for booking travels and tours",
          link: "https://thegotravels.com/"
        },
        {
          img: second,
          langs: ["html", "css", "javascript", "owl carousel"],
          title: "Homyz",
          disc: "A landing page for a real estate website",
          link: "https://frank-real-estate.netlify.app"
        },
        {
          img: third,
          langs: ["jsx", "css", "javascript", "material UI", "node.js", "express js", "mongo db"],
          title: "Class Monitor",
          disc: "A full stack application for taking down my students records, assignments and projects",
          link: "https://classmonitor.netlify.app/"
        },
        {
          img: forth,
          langs: ["jsx", "css", "javascript", "node.js", "express js", "mongo db"],
          title: "Elx Academy",
          disc: "A full stack application for registering students who wants to learn tech skills",
          link: "https://elx-academy.netlify.app/"
        },
        {
          img: fifth,
          langs: ["jsx", "css", "javascript", "node.js", "express js", "mongo db"],
          title: "My Students Records",
          disc: "A full stack application for taking down my students records to keep track of their training period",
          link: "https://mystudentsrecords.netlify.app/"
        },
        {
          img: sixth,
          langs: ["jsx", "css", "javascript", "node.js", "express js"],
          title: "Frank AI",
          disc: "A clone of ChatGpt making use of Open AI's API for the development.",
          link: "https://frankai.netlify.app"
        },
      ];
    return (
        <div>
            <div className=" pt-[114px] px-5 max-w-[1560px] mx-auto">
                {/* top / title */}
                <div className="">
                    {/* projects */}
                    <div className=" text-white font-bold text-[32px]">
                        <span className=" text-[#C778DD]">/</span>
                        <span>projects</span>
                    </div>
                    {/* list */}
                    <div className=" text-white mt-[14px]">List of my projects</div>
                </div>
                {/* completed tasks */}
                <div className="">
                    {/* title */}
                    <div className=" text-white font-medium mt-[68px] mb-[48px] text-[32px]">
                        <span className=" text-[#C778DD]">#</span>
                        <span>complete-apps</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
                        {/* cards */}
                        {projects.map(({ img, langs, title, disc }) => {
                            return (
                                <>
                                    <Project_card
                                        img={img}
                                        langs={langs}
                                        title={title}
                                        disc={disc}
                                    />
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complete_apps