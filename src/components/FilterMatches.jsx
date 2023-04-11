import React from 'react'
import {motion} from 'framer-motion'
import { container, item } from '../motion'

function FilterMatches({active, setActive}) {

  return (
    <motion.div className='flex gap-4 overflow-x-scroll scrollbar-hide p-5'
                initial='hidden'
                animate='show'
                variants={container}
    >
            <motion.button variants={item} onClick={()=>setActive('all')} className={`z-20 ${active==='all'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF] `} >All</motion.button>
            <motion.button variants={item} onClick={()=>setActive('atp')} className={`${active==='atp'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >ATP</motion.button>
            <motion.button variants={item} onClick={()=>setActive('wta')} className={`${active==='wta'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >WTA</motion.button>
            <motion.button variants={item} onClick={()=>setActive('singles')} className={`${active==='singles'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >Singles</motion.button>
            <motion.button variants={item} onClick={()=>setActive('doubles')} className={`${active==='doubles'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >Doubles</motion.button>
    </motion.div>
  )
}

export default FilterMatches

