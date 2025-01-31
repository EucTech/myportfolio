import Project_card from "../project_card/Project_card";

import shan from "../projects_section/imgs/shan.png";
import bazzar from "../projects_section/imgs/bazzar.png";
import creator from "../projects_section/imgs/creator.png";
import aq from "../projects_section/imgs/aq.png";
import idea from "../projects_section/imgs/idea.png";

import {useNavigate} from 'react-router-dom'

const Projects = () => {
  // date
  const projects = [
    {
      img: bazzar,
      langs: ["TSX", "NEXT JS", "CSS", "TypeScript"],
      title: "Use Bazzar",
      disc: "A company landing page buying of food stuffs",
      link: "https://bazaar-red.vercel.app/"
    },
    {
      img: shan,
      langs: ["HTML", "CSS", "AJAX", "Django", "Python"],
      title: "Shan Feng Tire Company",
      disc: "A full stack web site for a tire company that repaires and sells tires",
      link: "https://www.shanfengcoltd.com/"
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
