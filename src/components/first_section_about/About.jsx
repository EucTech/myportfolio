'use client'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()

  return (
    <>
      <div className="px-10 md:px-16 max-w-[1560px] mx-auto pt-24 pb-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 md:min-h-screen">
        {/* Left */}
        <div data-aos="fade-right" className="flex-1 max-w-xl">
          <p className="text-[#C778DD] font-medium text-sm mb-3 tracking-widest uppercase">
            Hi, I'm
          </p>
          <h1 className="font-bold text-5xl sm:text-6xl text-white mb-4 leading-tight">
            Uchechukwu
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium mb-6">
            <span className="text-[#C778DD]">Software</span>
            <span className="text-[#ABB2BF]"> Engineer</span>
          </h2>
          <p className="text-[#ABB2BF] text-base leading-relaxed mb-10 max-w-md">
            I build fast, scalable web and mobile applications — turning ideas
            into clean, production-ready products that users love.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => router.push('/contact')}
              className="text-white font-medium py-3 px-8 border-2 duration-200 border-[#C778DD] hover:bg-[#C778DD33]"
            >
              Contact me
            </button>
            <button
              onClick={() => router.push('/projects')}
              className="text-[#ABB2BF] font-medium py-3 px-8 border-2 duration-200 border-[#ABB2BF33] hover:border-[#C778DD] hover:text-white"
            >
              View Work
            </button>
          </div>
        </div>

        {/* Right */}
        <div data-aos="fade-left" data-aos-delay="300" className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#C778DD] blur-2xl opacity-20 scale-110"></div>
            <img
              src="/uche-dp2.png"
              alt="Uchechukwu"
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#C778DD]"
            />
          </div>
        </div>
      </div>

      {/* Quote */}
      <div data-aos="fade-up" className="px-10 md:px-16 py-16 max-w-[1560px] mx-auto">
        <div className="border border-[#ABB2BF22] bg-[#ffffff04] px-8 py-8 relative max-w-3xl mx-auto">
          <span className="absolute -top-5 left-6 text-6xl text-[#C778DD] leading-none font-serif">"</span>
          <p className="text-[#ABB2BF] text-lg leading-relaxed italic">
            Talk is cheap. Show me the code.
          </p>
          <p className="text-[#C778DD] font-medium mt-4 text-right">— Linus Torvalds</p>
        </div>
      </div>
    </>
  )
}

export default About
