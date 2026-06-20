'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import logoImg from './imgs/Logo.png'
import closeImg from './imgs/close.png'

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'work' },
  { href: '/about', label: 'about-me' },
  { href: '/contact', label: 'contacts' },
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    document.querySelectorAll('li').forEach(link => {
      link.addEventListener('click', () => setToggle(false))
    })
  }, [])

  return (
    <div data-aos="fade-down" className="fixed top-0 left-0 right-0 bg-[#282C33] z-[999]">
      <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
        <div className="left flex gap-2 items-center font-bold text-white text-base">
          <img src={logoImg.src} alt="Logo" />
          EucTech
        </div>
        <div className="right flex items-center">
          <div className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? 'right-[-100%] top-0 bottom-0' : 'right-0 top-0 bottom-0'} bg-[#282C33] md:static`}>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                  <span className="text-[#C778DD] font-medium">#</span>{label}
                </li>
              </Link>
            ))}
            <div onClick={() => setToggle(false)} className="close absolute block md:hidden right-3 top-3">
              <img src={closeImg.src} alt="close menu" />
            </div>
          </div>
          <div onClick={() => setToggle(true)}>
            <div className="open block md:hidden w-8">
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
              <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
