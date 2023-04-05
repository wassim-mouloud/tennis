import React from 'react'
import {slide} from '../motion'
import { motion } from 'framer-motion'
function Round({round}) {
  return (
    <motion.div className='flex justify-center items-center w-[25vw] p-2 gap-2 text-white rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md'
    initial="hidden"
    animate="show"
    variants={slide("left", 0.2, 0.2)}
    
    >
        <p className='text-white text-[10px] md:text-[14px]' >• {round}</p>
    </motion.div>
  )
}

export default Round