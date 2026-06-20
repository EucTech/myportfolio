const skills = [
  { title: 'Languages', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP'] },
  { title: 'Frameworks', items: ['React', 'React Native', 'Next.js', 'Express.js', 'Node.js', 'Tailwind', 'Bootstrap'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL'] },
  { title: 'Tools', items: ['VSCode', 'Git', 'GitHub', 'Postman', 'Vercel'] },
  { title: 'Other', items: ['Redux', 'Redux Toolkit', 'Mongoose', 'REST APIs'] },
]

const Skills = () => {
  return (
    <section className="px-10 md:px-16 max-w-[1560px] mx-auto py-16">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white font-medium text-[32px]">
          <span className="text-[#C778DD]">#</span>skills
        </h2>
        <div className="h-px bg-[#C778DD] w-20"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {skills.map(({ title, items }) => (
          <div key={title} className="border border-[#ABB2BF22] bg-[#ffffff04]">
            <div className="px-4 py-3 border-b border-[#ABB2BF22]">
              <h3 className="text-white font-semibold">{title}</h3>
            </div>
            <div className="px-4 py-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="text-[#ABB2BF] text-sm">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
