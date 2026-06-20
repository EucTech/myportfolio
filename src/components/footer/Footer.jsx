import twitterlogo from './imgs/twitter-x-line.png'
import logoImg from './imgs/Logo.png'
import githubImg from './imgs/Github.png'

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto">
        <div className="flex justify-between gap-y-10 flex-wrap">
          <div className="mx-auto md:mx-0">
            <div className="flex items-center gap-8 mb-3">
              <div className="flex gap-2 items-center text-2xl text-white font-bold">
                <img src={logoImg.src} alt="Logo" />
                <span>EucTech</span>
              </div>
            </div>
          </div>
          <div className="mx-auto md:mx-0">
            <h2 className="text-white text-2xl font-medium mb-3">Media</h2>
            <div className="flex items-center gap-4">
              <a href="https://x.com/Euc_Tech/" target="_blank" rel="noreferrer">
                <img src={twitterlogo.src} alt="Twitter" style={{ filter: 'invert(1)', width: '20px' }} />
              </a>
              <a href="https://www.linkedin.com/in/uchechukwu-ezeibe-76397522b/" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-fill text-[#ABB2BF] text-2xl"></i>
              </a>
              <a href="https://www.github.com/EucTech" target="_blank" rel="noreferrer">
                <img src={githubImg.src} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          &copy; Copyright {new Date().getFullYear()}. Made by EucTech
        </div>
      </div>
    </>
  )
}

export default Footer
