import React from 'react'
import {slide} from '../motion'
import { motion } from 'framer-motion'
function Tournament({imageSrc}) {
  return (
    <motion.div className='flex justify-center items-center w-[30vw] p-1 gap-2 text-white rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md'
    initial="hidden"
    animate="show"
    variants={slide("left", 0.2, 0.4)}
    >
        <img src={imageSrc} alt="" className='w-[16px] h-[16px] rounded-[20px]' />
        <p className='text-white text-[10px] md:text-[14px]' >Australian Open</p>
    </motion.div>
  )
}

export default Tournament