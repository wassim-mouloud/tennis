import React from 'react'
import {motion} from 'framer-motion'
import { container, item } from '../motion'


function FilterTournaments({active, setActive}) {
  return (
    
    <motion.div className='flex gap-4 p-5 overflow-x-scroll scrollbar-hide'
                initial='hidden'
                animate='show'
                variants={container}
    >
            <motion.button variants={item} onClick={()=>setActive('JAN-DEC')} className={`z-20 ${active==='JAN-DEC'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF] `} >JAN-DEC</motion.button>
            <motion.button variants={item} onClick={()=>setActive('JAN-MAR')} className={`${active==='JAN-MAR'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >JAN-MAR</motion.button>
            <motion.button variants={item} onClick={()=>setActive('APR-JUN')} className={`${active==='APR-JUN'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >APR-JUN</motion.button>
            <motion.button variants={item} onClick={()=>setActive('JUL-SEP')} className={`${active==='JUL-SEP'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >JUL-SEP</motion.button>
            <motion.button variants={item} onClick={()=>setActive('OCT-DEC')} className={`${active==='OCT-DEC'?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >OCT-DEC</motion.button>
    </motion.div>
    
  )
}

export default FilterTournaments