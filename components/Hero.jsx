import React from 'react'
import Courses from './courses/Courses'
import {  Alexandria } from '@next/font/google'
import {motion } from 'framer-motion'

const fontAlexandria = Alexandria({
  weight: ['400',],
  style: ['normal', ],
  subsets: ['arabic', ],
})

const Hero = () => {

  return (
    <div style={{ backgroundImage: 'url(/hero.png)' }} className="pt1  text-center snap-y  bg-no-repeat bg-cover relative p-5 sm:h-[90vh] h-[80vh] bg-center overflow-hidden flex flex-col gap-2 items-center  justify-center w-full ">
      <div className='z-20 flex  flex-col items-center gap-4 w-full pb-5'>

     
      <span className='sm:tracking-[20px] tracking-[20px] z-10  uppercase text-white'>welcome</span>
      <hr className='w-full z-10  border-white' />
      <span className='sm:tracking-[10px] uppercase z-10  text-white'>To
      </span>
      <hr className='border-white z-10 w-9/12 ' />


      <motion.h1 initial={{y:-10,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.3,delay:.5}} className='sm:text-5xl tracking-widest md:tracking-wide leading-10 text-3xl z-10 sm:py-3  capitalize font-bold text-white'>Shah <span className='underline decoration-pink-500 z-10 '>abdul</span> latif university khairpur</motion.h1>

      <h1 dir='left'  className={`font-sans sm:text-5xl tracking-widest md:tracking-wide text-3xl z-10 sm:py-3 ${fontAlexandria.className}  capitalize font-bold text-white`}>شاه عبداللطيف يونيورسٽي خيرپور</h1>
      <div className='h-3'/>
        {/* <Courses /> */}
      </div>
      <div className='h-screen  bg-black/50 absolute  top-0 left-0 w-full'></div>
      {/* <div className='absolute text-right py-1 italic whitespace-nowrap overflow-hidden  text-xl left-0  w-full  top-0 bg-blue-700  text-white' ><p className='animate-move'>
        Pre-Entry test result 2023 has been Announced click on Annoucement button.
      </p> 

      </div>
  */}
    </div>
  )
}

export default Hero