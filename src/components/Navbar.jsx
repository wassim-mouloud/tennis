import React from 'react'
import { useState } from 'react'
import Backdrop from './Backdrop'
function Navbar({open ,setOpen, loader}) {
 
 
  return (
  
          <div className={`transition-all duration-[200ms] ease-linear z-30 rounded-[15px] ${open===false?'h-[40px] w-[50px]':'h-[50vh] w-[90vw] md:w-[30vw]'} ${loader?'hidden':'flex'}  flex-col  fixed top-[20px] left-[20px]  ${open?"bg-[rgba(255,255,255,0.3)]":"bg-[rgba(255,255,255,0.7)]"}`} >

            <div className={`flex flex-col  gap-2 cursor-pointer z-40 absolute left-[25px] top-[20px] translate-x-[-50%] translate-y-[-50%]`} onClick={() => setOpen(!open)}>
                <span className={`bg-black h-[2px] w-[25px] rounded-[25px] transition duration-[200ms] ${open===true?"rotate-45 translate-y-[10px]":""}`} ></span>
                <span className= {`bg-black h-[2px] w-[25px] rounded-[25px] transition duration-[200ms]  ${open===true?"-rotate-45 ":""}`} ></span>
            </div>

            <div className={` text-[1rem] text-white  flex-col  gap-3 mt-[60px]  ${open?'flex':'hidden'} `}  >

              <a href="#hero" onClick={() => setOpen(!open)}>
                <p className={`cursor-pointer ml-[7vw] md:w-[27vw] p-2 md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'}  w-[90vw] hover:bg-black hover:text-white rounded-[10px] transition-all`} ><span className='text-gray-400'>01.</span> News</p>
              </a>
              <div className={`w-[80vw] md:w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>


              <a href="#live" onClick={() => setOpen(!open)}>
                <p className={`cursor-pointer w-[90vw] md:w-[27vw] ml-[7vw] md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'}   p-2 hover:bg-black hover:text-white rounded-[10px]`}><span className='text-gray-400'>02.</span> Live Matches</p>
              </a>
              <div className={`w-[80vw] md:w-[90%]  mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>

              <a href="#ended" onClick={() => setOpen(!open)}>
                <p className={`cursor-pointer ml-[7vw] md:ml-[5%] md:w-[27vw] p-2 ${open===false?'opacity-0':'opacity-[1]'}  w-[90vw] hover:bg-black hover:text-white rounded-[10px]`} ><span className='text-gray-400'>03.</span> Completed Matches</p>
              </a>
              <div className={`w-[80vw] md:w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>


              <a href='#ranking' onClick={() => setOpen(!open)} >
                <p className={`cursor-pointer ml-[7vw] md:ml-[5%] md:w-[27vw] p-2 ${open===false?'opacity-0':'opacity-[1]'}  w-[90vw] hover:bg-black hover:text-white rounded-[10px]`} ><span className='text-gray-400'>04.</span> ATP Ranking</p>
              </a>
              <div className={`w-[80vw] md:w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
              
              <a href="#calendar" onClick={() => setOpen(!open)}>
                <p className={`cursor-pointer ml-[7vw] md:w-[27vw] p-2 md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'} hover:bg-black hover:text-white w-[90vw]  rounded-[10px] `} ><span className='text-gray-400'>05.</span> Calendar</p>
              </a>



            </div>
        </div>

  
  )
}

export default Navbar