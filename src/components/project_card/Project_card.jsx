const Project_card = ({ img, langs, title, disc, link }) => {
  return (
    <div data-aos="fade-up" className="border border-[#ABB2BF22] bg-[#ffffff04] overflow-hidden group flex flex-col w-full md:w-[48%] lg:w-[31%]">
      <div className="overflow-hidden h-52">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex gap-2 flex-wrap px-4 py-3 border-t border-b border-[#ABB2BF22]">
        {langs.map((e) => (
          <span key={e} className="text-[#ABB2BF] text-xs">{e}</span>
        ))}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-white text-xl font-semibold mb-2">{title}</h2>
        {disc && <p className="text-[#ABB2BF] text-sm leading-relaxed mb-5 flex-1">{disc}</p>}
        <div className="mt-auto">
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
  )
}

export default Project_card
