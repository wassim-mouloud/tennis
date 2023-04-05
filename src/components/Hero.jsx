import React from 'react'
import {motion} from 'framer-motion'
import Duration from './Duration'
import HeroTournament from './HeroTournament'
import Round from './Round'
import { slide,} from '../motion'
function Hero({s}) {

  return (
    <div className={`test bg-no-repeat bg-cover bg-center md:bg-top p-5 h-[80vh] w-screen  flex flex-col gap-4 ${s===false?'':'blur-md'}`} >
      <motion.h1 
      className='text-white text-[32px] lg:text-[45px] lg:max-w-[80vw] mt-[40vh]  font-bold'
      initial="hidden"
      animate="show"
      variants={slide('left', 0.6)}      
      >
        Federer Beats Nadal in epic 5 sets final to grab his 18th grand slam
      </motion.h1>
      
      <motion.div className='flex gap-2 w-[90vw] md:max-w-[50vw]'>
        <Duration time="3h 38m" />
        <Round round="Men's final" />
        <HeroTournament imageSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Australian_Open_Logo_2017.svg/1200px-Australian_Open_Logo_2017.svg.png'} />
      </motion.div>
      <motion.div className=' w-[90vw] flex md:hidden justify-center items-center  p-1 gap-2 text-white rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md'
          initial="hidden"
          animate="show"
          variants={slide('left', 0.6)} 
      >
          <img src="./youtube.png" alt="" className='h-[16px] w-[16px]' />
          <p className='text-[16px]'>Watch highlights</p>
      </motion.div>
      
    </div>
  )
}

export default Hero