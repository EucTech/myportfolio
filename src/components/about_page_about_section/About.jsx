import Link from 'next/link'

const About = () => {
  const stats = [
    { value: '4+', label: 'Years experience' },
    { value: '30+', label: 'Projects completed' },
    { value: '10', label: 'Happy clients' },
  ]

  return (
    <div className="px-10 md:px-16 max-w-[1560px] mx-auto pt-32 pb-10">

      {/* Header */}
      <div className="mb-16">
        <h1 className="text-white font-bold text-4xl mb-2">
          <span className="text-[#C778DD]">/</span>about-me
        </h1>
        <p className="text-[#ABB2BF]">Get to know me</p>
      </div>

      {/* Main */}
      <div className="flex flex-col md:flex-row items-start gap-16 justify-between">

        {/* Left — text */}
        <div className="flex-1">
          <p className="text-[#ABB2BF] leading-relaxed text-base mb-5">
            Hi, I'm Uchechukwu — a software engineer based in Rwanda with a passion
            for building things that live on the internet. I work across the full
            spectrum of web and mobile development, from crafting pixel-perfect UIs
            to architecting back-end systems that scale.
          </p>
          <p className="text-[#ABB2BF] leading-relaxed text-base mb-5">
            Over the past 4+ years I've shipped production apps across different
            domains — from e-commerce and property platforms to event ticketing
            and healthcare landing pages. I care deeply about clean code,
            performance, and building products that users actually enjoy using.
          </p>
          <p className="text-[#ABB2BF] leading-relaxed text-base">
            When I'm not coding, I'm exploring new frameworks, contributing to
            projects, and sharpening my craft. I'm always open to interesting
            problems and the right collaboration.
          </p>

          {/* Stats */}
          <div className="mt-12 flex gap-8 flex-wrap">
            {stats.map(({ value, label }) => (
              <div key={label} className="border-l-2 border-[#C778DD] pl-4">
                <div className="text-white text-2xl font-bold">{value}</div>
                <div className="text-[#ABB2BF] text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-block py-3 px-8 text-white border-2 border-[#C778DD] hover:bg-[#C778DD33] duration-150 font-medium"
            >
              Contact me
            </Link>
            <Link
              href="/projects"
              className="inline-block py-3 px-8 text-[#ABB2BF] border-2 border-[#ABB2BF33] hover:border-[#C778DD] hover:text-white duration-150 font-medium"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* Right — photo */}
        <div data-aos="fade-left" className="flex-shrink-0 mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#C778DD] blur-2xl opacity-20 scale-110"></div>
            <img
              src="/uche-dp2.png"
              alt="Uchechukwu"
              className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-[#C778DD]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
