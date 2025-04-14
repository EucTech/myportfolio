import React from 'react'
// imgs
import Project_card from '../project_card/Project_card';
import quickrent from "../projects_section/imgs/quickrent.png";
import bazzar from "../projects_section/imgs/bazzar.png";
import rumohq from "../projects_section/imgs/rumohq.png";
import aq from "../projects_section/imgs/aq.png";
import idea from "../projects_section/imgs/idea.png";

const Complete_apps = () => {
    const projects = [
        {
            img: quickrent,
            langs: ["Next.js", "Tailwind css", "Node.js", "Express"],
            title: "Quick Rent",
            disc: "Designed and developed a web application for rentinf and selling of properties.",
            link: "https://quickrent-rho.vercel.app/"
          },
        {
          img: bazzar,
          langs: ["TSX", "NEXT.jS", "CSS", "TypeScript"],
          title: "Use Bazzar",
          disc: "A company landing page buying of food stuffs",
          link: "https://usebazaar.africa/"
        },

        {
          img: rumohq,
          langs: ["CSS", "Javascript", "react", "Tailwind css", "Node.js"],
          title: "Withaudacious",
          disc: "A website for content creators community",
          link: "https://rumorhq-delta.vercel.app/"
        },

        {
          img: aq,
          langs: ["HTML", "CSS", "Javascript", "Next js", "Tailwind css"],
          title: "Aquavital Relief ",
          disc: "Designed and developed a clean, modern landing page for healthcare.",
          link: "https://aquavital-relief.vercel.app/"
        },

        {
          img: idea,
          langs: ["HTML", "CSS", "Javascript", "React", "Tailwind css"],
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