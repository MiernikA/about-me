import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../styles'
import Randomizer from './Randomizer';

const Header = () => {
  return (
    <section className="relative w-full h-screen mx-auto ">

      <div
        className={`absolute inset-0 top-[130px]  max-w-7xl mx-auto flex flex-row items-start gap-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='hidden md:block w-8 h-1 rounded-lg bg-[#f78c0a]' />
          <div className='hidden md:block w-1 md:h-60 h-50 orange-gradient' />
        </div>

        <div style={{ zIndex: 2 }}>
          <h1 className={`${styles.headerMainText} text-white`}>
            Hi, I'm <span className='text-[#f78c0a]'>Adrian</span>
          </h1>
          <p className={`${styles.headerSubText} mt-3 text-white-100`}>
            I am a computer science student and aspiring  <br className='sm:block hidden' />
            softwere developer
          </p>
        </div>
      </div>


      <Randomizer />


      <div className='absolute  bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 30, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Header