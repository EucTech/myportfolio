import quickrent from '../projects_section/imgs/quickrent.png'
import langcub from '../projects_section/imgs/langcub.png'
import valcertra from '../projects_section/imgs/valcertra.png'
import zentry from '../projects_section/imgs/zentry.png'

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
    disc: 'A language learning platform.',
    link: 'https://langcub.com',
  },
  {
    img: valcertra.src,
    langs: ['Next JS', 'TypeScript', 'Tailwind CSS'],
    title: 'Valcertra',
    disc: 'A modern business landing page.',
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

const Complete_apps = () => {
  return (
    <div className="px-10 md:px-16 max-w-[1560px] mx-auto pt-32 pb-20">
      {/* Page header */}
      <div className="mb-16">
        <h1 className="text-white font-bold text-4xl mb-2">
          <span className="text-[#C778DD]">/</span>projects
        </h1>
        <p className="text-[#ABB2BF]">Things I've built</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map(({ img, langs, title, disc, link }) => (
          <div
            key={title}
            className="border border-[#ABB2BF22] bg-[#ffffff04] overflow-hidden group flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden h-56">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap px-5 py-3 border-t border-b border-[#ABB2BF22]">
              {langs.map((tag) => (
                <span key={tag} className="text-[#ABB2BF] text-xs">{tag}</span>
              ))}
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
              <p className="text-[#ABB2BF] text-sm leading-relaxed flex-1">{disc}</p>
              <div className="mt-5">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block py-2 px-5 text-sm text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150"
                >
                  Live &lt;~&gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Complete_apps
