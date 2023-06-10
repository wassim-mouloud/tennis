import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { container, item } from '../motion'

const jan_mar=['01', '02', '03']
const apr_jun = ['04', '05', '06'];
const jul_sep = ['07', '08', '09'];
const oct_dec = ['10', '11', '12'];

function FilterTournaments({active, setActive, choose, setChoose}) {
  return (
    
    <div  >
        <motion.div className='flex gap-4 p-5 overflow-x-scroll scrollbar-hide'
                    initial='hidden'
                    animate='show'
                    variants={container}
        >
                <motion.button variants={item} onClick={()=>setChoose(!choose)} className={`${choose?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF] `} >Choose</motion.button>
                <motion.button variants={item} onClick={()=>setActive(jan_mar)} className={`${active===jan_mar?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >JAN-MAR</motion.button>
                <motion.button variants={item} onClick={()=>setActive(apr_jun)} className={`${active===apr_jun?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >APR-JUN</motion.button>
                <motion.button variants={item} onClick={()=>setActive(jul_sep)} className={`${active===jul_sep?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >JUL-SEP</motion.button>
                <motion.button variants={item} onClick={()=>setActive(oct_dec)} className={`${active===oct_dec?'bg-gradient-to-r from-[#2C3E50] to-[#4CA1AF]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box  hover:bg-gradient-to-r hover:from-[#2C3E50] hover:to-[#4CA1AF]`} >OCT-DEC</motion.button>
        </motion.div>

     
        {choose?(
            <motion.div className='flex gap-4 p-5 overflow-x-scroll scrollbar-hide '
              initial='hidden'
              animate='show'
              exit='hidden'
              variants={container}
            >
                  <motion.button variants={item} 
                    onClick={()=>{
                    setActive(['01'])}} 
                    className={`${active[0]==='01'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box2 hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c] `} >JAN</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['02'])}}  className={`${active[0]==='02'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >FEB</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['03'])}}  className={`${active[0]==='03'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >MAR</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['04'])}}  className={`${active[0]==='04'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >APR</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['05'])}}  className={`${active[0]==='05'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >MAY</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['06'])}}  className={`${active[0]==='06'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >JUN</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['07'])}}  className={`${active[0]==='07'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >JUL</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['08'])}}  className={`${active[0]==='08'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >AUG</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['09'])}}  className={`${active[0]==='09'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >SEP</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['10'])}}  className={`${active[0]==='10'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >OCT</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['11'])}}  className={`${active[0]==='11'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >NOV</motion.button>
                  <motion.button variants={item} onClick={()=>{
                    setActive(['12'])}}  className={`${active[0]==='12'?'bg-gradient-to-r from-[#00c3ff] to-[#ffff1c]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center  box2  hover:bg-gradient-to-r hover:from-[#00c3ff] hover:to-[#ffff1c]`} >DEC</motion.button>
              </motion.div>
        ):''}
    
        
    </div>
    
    
  )
}

export default FilterTournaments