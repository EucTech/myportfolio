import twitterImg from '../footer/imgs/twitter-x-line.png'
import githubImg from '../footer/imgs/Github.png'

const socials = [
  {
    href: 'https://x.com/Euc_Tech',
    label: '@Euc_Tech',
    sub: 'Twitter / X',
    icon: <img src={twitterImg.src} className="w-5 invert" alt="Twitter" />,
  },
  {
    href: 'https://www.github.com/EucTech',
    label: 'EucTech',
    sub: 'GitHub',
    icon: <img src={githubImg.src} className="w-5" alt="GitHub" />,
  },
  {
    href: 'https://www.linkedin.com/in/uchechukwu-ezeibe-76397522b/',
    label: 'Ezeibe Uchechukwu',
    sub: 'LinkedIn',
    icon: <i className="ri-linkedin-box-fill text-xl"></i>,
  },
]

const Contact = () => {
  return (
    <div className="px-10 md:px-16 max-w-[1560px] mx-auto pt-32 pb-20 min-h-screen">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-white font-bold text-4xl mb-2">
          <span className="text-[#C778DD]">/</span>contacts
        </h1>
        <p className="text-[#ABB2BF]">Let's work together</p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left — blurb + socials */}
        <div className="flex flex-col gap-10">
          <p className="text-[#ABB2BF] leading-relaxed text-base max-w-md">
            I'm open to freelance, full-time, and part-time opportunities.
            If you have a project in mind or just want to say hello,
            don't hesitate to reach out.
          </p>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-white font-medium text-xl">
                <span className="text-[#C778DD]">#</span>social-media
              </h2>
              <div className="h-px bg-[#C778DD] w-12"></div>
            </div>
            <div className="flex flex-col gap-4">
              {socials.map(({ href, label, sub, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#ABB2BF22] bg-[#ffffff04] flex items-center justify-center text-[#ABB2BF] group-hover:border-[#C778DD] group-hover:text-white duration-150">
                    {icon}
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium group-hover:text-[#C778DD] duration-150">{label}</div>
                    <div className="text-[#ABB2BF] text-xs">{sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — contact cards */}
        <div className="flex flex-col gap-4">
          <div className="border border-[#ABB2BF22] bg-[#ffffff04] p-6 flex items-start gap-4">
            <div className="w-10 h-10 border border-[#C778DD22] bg-[#C778DD11] flex items-center justify-center flex-shrink-0">
              <i className="ri-phone-line text-[#C778DD] text-lg"></i>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Phone</h3>
              <a href="tel:+250795418393" className="text-[#ABB2BF] hover:text-[#C778DD] duration-150 text-sm">
                +250 795 418 393
              </a>
            </div>
          </div>

          <div className="border border-[#ABB2BF22] bg-[#ffffff04] p-6 flex items-start gap-4">
            <div className="w-10 h-10 border border-[#C778DD22] bg-[#C778DD11] flex items-center justify-center flex-shrink-0">
              <i className="ri-mail-line text-[#C778DD] text-lg"></i>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <a
                href="mailto:uchechukwuezeibe1@gmail.com"
                className="text-[#ABB2BF] hover:text-[#C778DD] duration-150 text-sm break-all"
              >
                uchechukwuezeibe1@gmail.com
              </a>
            </div>
          </div>

          <div className="border border-[#ABB2BF22] bg-[#ffffff04] p-6 flex items-start gap-4">
            <div className="w-10 h-10 border border-[#C778DD22] bg-[#C778DD11] flex items-center justify-center flex-shrink-0">
              <i className="ri-map-pin-line text-[#C778DD] text-lg"></i>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Location</h3>
              <span className="text-[#ABB2BF] text-sm">Rwanda, Africa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
