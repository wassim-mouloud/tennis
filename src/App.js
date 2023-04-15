import './App.css';
import Upcoming from './sections/Upcoming';
import Hero from './sections/Hero';
import Ranking from './sections/Ranking';
import Live from './sections/Live';
import Ended from './sections/Ended';
import { useState } from 'react';
function App() {
  const [open, setOpen]=useState(false)
  return (
    <div className={``}>
      <div className={`transition-all duration-[350ms] ease-linear z-30 rounded-[10px] ${open===false?'h-[40px] w-[50px]':'h-[50vh] w-[90vw] md:w-[30vw]'}  flex flex-col  absolute top-[20px] left-[20px]  bg-[rgba(0,0,0,0.8)]`} >
        <div className={`flex flex-col  gap-2 cursor-pointer z-40 absolute left-[25px] top-[20px] translate-x-[-50%] translate-y-[-50%]`} onClick={() => setOpen(!open)}>
            <span className={`bg-white h-[2px] w-[25px] rounded-[25px] transition duration-[200ms] ${open===true?"rotate-45 translate-y-[10px]":""}`} ></span>
            <span className= {`bg-white h-[2px] w-[25px] rounded-[25px] transition duration-[200ms]  ${open===true?"-rotate-45 ":""}`} ></span>
        </div>
        <div className={` text-[1rem] text-white  flex-col  gap-3 mt-[60px]  ${open?'flex':'hidden'} `}  >
          <p className={`w-[90vw] md:w-[27vw] ml-[7vw] md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'}   p-2 hover:bg-white hover:text-black rounded-[10px]`}><span className='text-gray-400'>01.</span> Live Matches</p>
          <div className={`w-[80vw] md:w-[90%]  mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:w-[27vw] p-2 md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'} hover:bg-white hover:text-black w-[90vw]  rounded-[10px] `} ><span className='text-gray-400'>02.</span> Calendar</p>
          <div className={`w-[80vw] md:w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:w-[27vw] p-2 md:ml-[5%] ${open===false?'opacity-0':'opacity-[1]'}  w-[90vw] hover:bg-white hover:text-black rounded-[10px]`} ><span className='text-gray-400'>03.</span> News</p>
          <div className={`w-[80vw] md:w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:ml-[5%] md:w-[27vw] p-2 ${open===false?'opacity-0':'opacity-[1]'}  w-[90vw] hover:bg-white hover:text-black rounded-[10px]`} ><span className='text-gray-400'>04.</span> ATP Ranking</p>
          <div className={`w-[80vw] md:w-[90%] mx-auto bg-gray-400 rounded-[10px] h-[2px] ${open===false?'opacity-0':'opacity-[1]'}`} ></div>
          <p className={`ml-[7vw] md:ml-[5%] md:w-[27vw] p-2 ${open===false?'opacity-0':'opacity-[1]'}  w-[90vw] hover:bg-white hover:text-black rounded-[10px]`} ><span className='text-gray-400'>05.</span> WTA Ranking</p>
        </div>
    </div>
      <Hero s={open} />
      <Live s={open}/>
      <div className='w-[calc(100vw-20px)] h-[1px] bg-[#4776d5] rounded-[10px] ml-[20px] mt-[20px] mb-[20px]' />
      <Ended s={open}/>
      <div className='w-[calc(100vw-20px)] h-[1px] bg-[#4776d5] rounded-[10px] ml-[20px] mt-[20px] mb-[20px]' />

      <Ranking/>
      <div className='w-[calc(100vw-20px)] h-[1px] bg-[#4776d5] rounded-[20px] ml-[20px] mt-[20px] mb-[20px]' />

      <Upcoming/>


    </div>
  );
}

export default App;
