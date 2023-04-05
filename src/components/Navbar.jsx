import React from 'react'
import { useState } from 'react'
function Navbar() {
    const [open, setOpen]=useState(false)
 
  return (
    <div className={`transition-all duration-[100ms] ease-linear z-30 rounded-[10px] ${open===false?'h-[40px] w-[50px]':'h-[50vh] w-[90vw] md:w-[30vw]'}  flex flex-col  absolute top-[20px] left-[20px] backdrop-blur  bg-[rgba(255,255,255,0.1)]`} >
        <div className={`flex flex-col  gap-2 cursor-pointer z-40 absolute ${open === false ? 'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' : 'top-[20px] left-[7vw] md:left-[20px]'}`} onClick={() => setOpen(!open)}>
            <span className={`bg-white h-[2px] w-[25px] rounded-[25px] transition duration-[200ms] ${open===true?"rotate-45 translate-y-[10px]":""}`} ></span>
            <span className= {`bg-white h-[2px] w-[25px] rounded-[25px] transition duration-[200ms]  ${open===true?"-rotate-45 ":""}`} ></span>
        </div>
        <div className={`flex  text-[1rem] text-white  flex-col  gap-3 mt-[60px] transition-all duration-[400ms]  `}  >
          <p className={`ml-[7vw] md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'} transition-all duration-[400ms] w-[90vw] md:w-[90%] p-2 hover:bg-black rounded-[10px]`}><span className='text-gray-400'>01.</span> Live Matches</p>
          <div className={`w-[90%]  mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:w-[90%] p-2 md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'} transition-all duration-[400ms] w-[90vw] hover:bg-black rounded-[10px] `} ><span className='text-gray-400'>02.</span> Calendar</p>
          <div className={`w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:w-[90%] p-2 md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'} transition-all duration-[400ms] w-[90vw] hover:bg-black rounded-[10px]`} ><span className='text-gray-400'>03.</span> News</p>
          <div className={`w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:ml-[5%] md:w-[90%] p-2 ${open===false?'opacity-0':'opacity-[1]'} transition-all duration-[400ms] w-[90vw] hover:bg-black rounded-[10px]`} ><span className='text-gray-400'>04.</span> ATP Ranking</p>
          <div className={`w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:ml-[5%] md:w-[90%] p-2 ${open===false?'opacity-0':'opacity-[1]'} transition-all duration-[400ms] w-[90vw] hover:bg-black rounded-[10px]`} ><span className='text-gray-400'>05.</span> WTA Ranking</p>
        </div>
    </div>
  )
}

export default Navbar