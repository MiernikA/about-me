import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { cheems_logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <nav className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-opacity-60 bg-primary`}>

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link
          to="/"
          className='flex item-center gap-6'
          onClick={() => {
            setActive('')
            scrollToTop();
          }}
        >

          <img src={cheems_logo} alt="logo" className="w-9 h-9 object-contain ml-10 md:ml-0" />

          <p className='mt-1 text-white text-[18px] font-bold cursor-pointer flex'>Adrian Miernik &nbsp;
            <span className='hidden md:inline-block'>| Portfolio WebSite</span>
          </p>

        </Link>


        <ul className='list-none hidden md:flex flex-row gap-11'>

          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` ${active === link.title ? "text-white" : "text-gray-400"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>

            </li>
          ))}

        </ul>


        <div className='md:hidden mr-16'>

          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black absolute top-10 right-2 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4 mr-16'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={` font-medium cursor-pointer text-[16px] ${active === link.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>

                </li>
              ))}

            </ul>
          </div>
        </div>
      </div>

    </nav >
  )
}

export default Navbar