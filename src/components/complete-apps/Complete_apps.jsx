import React from 'react'
// imgs
import Project_card from '../project_card/Project_card';
import shan from "../projects_section/imgs/shan.png";
import bazzar from "../projects_section/imgs/bazzar.png";
import creator from "../projects_section/imgs/creator.png";
import aq from "../projects_section/imgs/aq.png";
import idea from "../projects_section/imgs/idea.png";

const Complete_apps = () => {
    const projects = [
        {
          img: shan,
          langs: ["HTML", "CSS", "AJAX", "Django", "Python"],
          title: "Shan Feng Tire Company",
          disc: "A full stack web site for a tire company that repaires and sells tires",
          link: "https://www.shanfengcoltd.com/"
        },
        {
          img: bazzar,
          langs: ["TSX", "NEXT JS", "CSS", "TypeScript"],
          title: "Use Bazzar",
          disc: "A company landing page buying of food stuffs",
          link: "https://usebazaar.africa/"
        },

        {
          img: creator,
          langs: ["jsx", "css", "javascript", "react", "tailwind css", "node js"],
          title: "Withaudacious",
          disc: "A website for content creators community",
          link: "https://withaudacious.vercel.app/"
        },

        {
          img: aq,
          langs: ["HTML", "CSS", "Javascript", "Next js", "tailwind css"],
          title: "Aquavital Relief ",
          disc: "Designed and developed a clean, modern landing page for healthcare.",
          link: "https://aquavital-relief.vercel.app/"
        },

        {
          img: idea,
          langs: ["HTML", "CSS", "Javascript", "React", "tailwind css"],
          title: "Idea Nexus",
          disc: "Website to pitch an agricultural innovation project.",
          link: "https://idea-nexus-nine.vercel.app/"
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
                        <span>Projects</span>
                    </div>
                    {/* projects */}
                    <div className="flex flex-wrap justify-start  gap-4 my-12">
                        {/* cards */}
                        {projects.map(({ img, langs, title, disc, link }) => {
                            return (
                                <>
                                    <Project_card
                                        img={img}
                                        langs={langs}
                                        title={title}
                                        disc={disc}
                                        link={link}
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