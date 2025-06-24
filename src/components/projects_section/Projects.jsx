import Project_card from "../project_card/Project_card";

import bazzar from "../projects_section/imgs/bazzar.png";
import quickrent from "../projects_section/imgs/quickrent.png";
import idea from "../projects_section/imgs/idea.png";
import rumohq from "../projects_section/imgs/rumohq.png";
import zentry from "../projects_section/imgs/zentry.png";

import {useNavigate} from 'react-router-dom'

const Projects = () => {
  // date
  const projects = [
    {
      img: zentry,
      langs: ["TSX", "NEXT JS", "TAILWIND CSS", "TypeScript"],
      title: "Zentry",
      disc: "A ticket reselling platform for events.",
      link: "https://zentry-web-henna.vercel.app/events"
    },
    {
      img: bazzar,
      langs: ["TSX", "NEXT JS", "TAILWIND CSS", "TypeScript"],
      title: "Use Bazzar",
      disc: "A company landing page buying of food stuffs",
      link: "https://bazaar-red.vercel.app/"
    },
    {
      img: quickrent,
      langs: ["Next js", "Tailwind css", "Node js", "Express js"],
      title: "Quick Rent",
      disc: "Designed and developed a web application for rentinf and selling of properties.",
      link: "https://quickrent-rho.vercel.app/"
    },
    {
      img: rumohq,
      langs: ["CSS", "Javascript", "react", "Tailwind css", "Node.js"],
      title: "Withaudacious",
      disc: "A website for content creators community",
      link: "https://rumorhq-delta.vercel.app/"
    },

    {
      img: idea,
      langs: ["HTML", "CSS", "Javascript", "React", "tailwind css"],
      title: "Idea Nexus",
      disc: "Website to pitch an agricultural innovation project.",
      link: "https://idea-nexus-nine.vercel.app/"
    },

  ];

  const navigate = useNavigate()

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium cursor-pointer" onClick={() => navigate('/projects')}>
            {/* <a href=""> */}
              <span>View all ~~&gt;</span>
            {/* </a> */}
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
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
    </>
  );
};

export default Projects;
