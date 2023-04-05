import React from 'react'
import { slide } from '../motion'
import { motion } from 'framer-motion'

function Duration({time}) {
  return (
    <motion.div className='flex justify-center items-center w-[30vw] md:w-[20vw] p-1 gap-2 text-white rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md'
      initial="hidden"
      animate="show"
      variants={slide("left", 0.2, 0)}
    >
        <img src="./hourglass.png" alt="" className='w-[16px] h-[16px]'/>
        <p className='text-[10px] md:text-[14px] ' >{time}</p>
    </motion.div>
  )
}

export default Duration