'use client'
import { useRouter } from 'next/navigation'
import Project_card from '../project_card/Project_card'
import quickrent from './imgs/quickrent.png'
import zentry from './imgs/zentry.png'
import langcub from './imgs/langcub.png'
import valcertra from './imgs/valcertra.png'

const Projects = () => {
  const projects = [
    {
      img: zentry.src,
      langs: ['Next JS', 'TypeScript', 'Tailwind CSS'],
      title: 'Zentry',
      disc: 'A ticket reselling platform for events.',
      link: 'https://www.zentry.com.ng/',
    },
    {
      img: langcub.src,
      langs: ['Next JS', 'TypeScript', 'Tailwind CSS'],
      title: 'Langcub',
      disc: '',
      link: 'https://langcub.com',
    },
    {
      img: valcertra.src,
      langs: ['Next JS', 'TypeScript', 'Tailwind CSS'],
      title: 'Valcertra',
      disc: '',
      link: 'https://valcertra.com',
    },
    {
      img: quickrent.src,
      langs: ['Next JS', 'Node.js', 'Tailwind CSS', 'Express'],
      title: 'Quick Rent',
      disc: 'A web application for renting and selling properties.',
      link: 'https://quickrent-rho.vercel.app/',
    },
  ]

  const router = useRouter()

  return (
    <section className="px-10 md:px-16 max-w-[1560px] mx-auto py-20">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <h2 className="text-white font-medium text-[32px]">
            <span className="text-[#C778DD]">#</span>projects
          </h2>
          <div className="h-px bg-[#C778DD] w-24"></div>
        </div>
        <button
          onClick={() => router.push('/projects')}
          className="text-white text-sm font-medium hover:text-[#C778DD] duration-150"
        >
          View all ~~&gt;
        </button>
      </div>

      <div className="flex flex-wrap gap-6">
        {projects.map(({ img, langs, title, disc, link }) => (
          <Project_card key={title} img={img} langs={langs} title={title} disc={disc} link={link} />
        ))}
      </div>
    </section>
  )
}

export default Projects
