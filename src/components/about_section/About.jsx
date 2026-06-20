import manImg from './imgs/man.png'
import Link from 'next/link'

const AboutSec = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
      <div className="flex flex-wrap items-center justify-between gap-10">
        <div data-aos="fade-right" className="md:w-[48%] w-full">
          <div className="mb-8 text-white font-medium text-[32px] flex items-center gap-3">
            <span className="text-[#C778DD]">#</span>about-me
            <div className="h-px bg-[#C778DD] w-20"></div>
          </div>
          <p className="text-[#ABB2BF] leading-relaxed">
            Hello, I'm Uche! I'm a self-taught software engineer based in Rwanda.
            I specialize in building responsive websites from the ground up and
            transforming them into modern, user-friendly web experiences.
            <br /><br />
            Turning creativity into functional websites has been my passion for years.
            I've helped clients establish their online presence and constantly seek
            out the latest technologies to sharpen my skills.
          </p>
          <div className="mt-8">
            <Link
              href="/about"
              className="duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-6 py-2.5 text-white inline-block"
            >
              Read more →
            </Link>
          </div>
        </div>
        <div data-aos="fade-left" className="mx-auto">
          <img className="mx-auto max-w-[280px]" src={manImg.src} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutSec
