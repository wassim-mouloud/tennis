import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

function Results({firstP, secondP, gm, set1, set2, set3, set4, set5, points, sets, r1, r2, tournament,round, type, awayFlag, homeFlag}) {
    const [image, setImage]= useState("")
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8951329bd7msha60049130daf0c6p14ecdejsn70858ee3c4ec',
            'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
        }
    };

  return (
    <>
    {gm===false?(
        <motion.div    
            whileTap={{cursor:'grabbing'}}
             className=' first:ml-[20px]  last:mr-[20px] md:hover:scale-105  transition-all duration-[300ms] relative bg-[#091327] w-[80vw] sm:w-[400px] md:w-[420px] lg:w-[420px] h-[200px]  flex flex-col gap-4 p-5 rounded-[10px] mt-[20px] mb-[20px] justify-center flex-shrink-0 cursor-pointer'>
            <div className='flex gap-2 ' >
                <p className='text-[#20BF55] text-[12px]' >{tournament}</p>
                <p className='text-[#20BF55] text-[12px]' >({type})</p>
            </div>
            <p className='text-[#20BF55] text-[14px]' >{round}</p>
            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[50%] flex gap-2 items-center' >
                    {awayFlag &&homeFlag?<img src={awayFlag} className='w-[24px] h-[24px] skeleton object-cover rounded-[50%]'/>:null}
                    <p className={`font-bold text-[16px] ${set2 && set3 ? (set3.p1 < set3.p2 ? 'text-gray-400' : 'text-white') : (set2 && !set3 ? (set2.p1 < set2.p2 ? 'text-gray-400' : 'text-white'):'text-white')} `}>{firstP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r1})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(40%-20px)]   md:w-[calc(40%-30px)] '>
                    {set1?<p className={` font-bold   w-[10px] ${set1.p1>set1.p2?'text-white':'text-gray-400'}`} >{set1.p1}</p>:null}
                    {set2? <p className={` font-bold   w-[10px] ${set2.p1>set2.p2?'text-white':'text-gray-400'}`} >{set2.p1}</p>:null}
                    {set3? <p className={` font-bold   w-[10px] ${set3.p1>set3.p2?'text-white':'text-gray-400'}`} >{set3.p1}</p>:null}
                    {points? <p className={` font-bold   w-[10px] ${points.p1>points.p2?'text-white':'text-gray-400'}`} >{points.p1}</p>:null}
                </div>
            </div>

            

            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[50%] flex gap-2 items-center' >
                    {awayFlag &&homeFlag?<img src={homeFlag} className='w-[24px] h-[24px] rounded-[50%] object-cover'/>:null}
                    <p className={`font-bold text-[16px]  ${set2 && set3 ? (set3.p2 < set3.p1 ? 'text-gray-400' : 'text-white') : (set2 && !set3 ? (set2.p2 < set2.p1 ? 'text-gray-400' : 'text-white') : 'text-white')} `} >{secondP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r2})</p>:null}
                </div>
                <div className='flex gap-4 items-center w-[calc(40%-20px)] md:w-[calc(40%-30px)]' >
                    {set1?<p className={` font-bold  w-[10px] ${set1.p1>set1.p2?'text-gray-400':'text-white'}`} >{set1.p2}</p>:null}
                    {set2? <p className={` font-bold  w-[10px] ${set2.p1>set2.p2?'text-gray-400':'text-white'} `} >{set2.p2}</p>:null}
                    {set3? <p className={` font-bold  w-[10px]  ${set3.p1>set3.p2?'text-gray-400':'text-white'}`} >{set3.p2}</p>:null}
                    {points? <p className=' font-bold   w-[10px]' >{points.p1}</p>:null}

                </div>
            </div>
 
     </motion.div>
    ):(
        <div 
            whileTap={{cursor:'grabbing'}}

             className='first:ml-[20px] last:mr-[20px] mb-[20px] relative bg-[#091327] md:hover:scale-[1.05] transition-all duration-[300ms] lg:w-[calc(100vw/3.5)] h-[200px] w-[90vw] flex flex-col gap-4 p-5 rounded-[10px] mt-[20px] justify-center flex-shrink-0 cursor-grab'>
            <div className='flex gap-2 ' >
                <p className='text-[#20BF55] text-[12px]' >{tournament}</p>
                <p className='text-[#20BF55] text-[12px]' >({type})</p>
            </div>
            <p className='text-[#20BF55] text-[14px]' >{round}</p>
            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[50%] md:w-[50%] flex gap-2 items-center' >
                    {awayFlag &&homeFlag?<img src={awayFlag} className='w-[24px] h-[24px]  object-cover rounded-[50%]'/>:null}
                    <p className={`font-bold text-[14px] md:text-[16px] ${set2 && set3 ? (set3.p1 < set3.p2 ? 'text-gray-400' : 'text-white') : (set2 && !set3 ? (set2.p1 < set2.p2 ? 'text-gray-400' : 'text-white'):'text-white')} `}>{firstP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r1})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(50%-20px)]   md:w-[calc(40%-30px)] '>
                    {set1?<p className={` font-bold   w-[10px] ${set1.p1>set1.p2?'text-white':'text-gray-400'}`} >{set1.p1}</p>:null}
                    {set2? <p className={` font-bold   w-[10px] ${set2.p1>set2.p2?'text-white':'text-gray-400'}`} >{set2.p1}</p>:null}
                    {set3? <p className={` font-bold   w-[10px] ${set3.p1>set3.p2?'text-white':'text-gray-400'}`} >{set3.p1}</p>:null}
                    {set4? <p className={` font-bold   w-[10px] ${set4.p1>set4.p2?'text-white':'text-gray-400'}`} >{set4.p1}</p>:null}
                    {set5? <p className={` font-bold   w-[10px] ${set5.p1>set5.p2?'text-white':'text-gray-400'}`} >{set5.p1}</p>:null}
                </div>
            </div>

            

            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[50%] md:w-[50%] flex gap-2 items-center' >
                    {awayFlag &&homeFlag?<img src={homeFlag} className='w-[24px] h-[24px] rounded-[50%] object-cover'/>:null}
                    <p className={`font-bold text-[14px] md:text-[16px]  ${set2 && set3 ? (set3.p2 < set3.p1 ? 'text-gray-400' : 'text-white') : (set2 && !set3 ? (set2.p2 < set2.p1 ? 'text-gray-400' : 'text-white') : 'text-white')} `} >{secondP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r2})</p>:null}
                </div>
                <div className='flex gap-4 items-center w-[calc(50%-20px)] md:w-[calc(40%-30px)]' >
                    {set1?<p className={` font-bold  w-[10px] ${set1.p1>set1.p2?'text-gray-400':'text-white'}`} >{set1.p2}</p>:null}
                    {set2? <p className={` font-bold  w-[10px] ${set2.p1>set2.p2?'text-gray-400':'text-white'} `} >{set2.p2}</p>:null}
                    {set3? <p className={` font-bold  w-[10px]  ${set3.p1>set3.p2?'text-gray-400':'text-white'}`} >{set3.p2}</p>:null}
                    {set4? <p className={` font-bold   w-[10px] ${set4.p2>set4.p1?'text-white':'text-gray-400'}`} >{set4.p2}</p>:null}
                    {set5? <p className={` font-bold   w-[10px] ${set5.p2>set5.p1?'text-white':'text-gray-400'}`} >{set5.p2}</p>:null}
                </div>
            </div>
 
     </div>
    )}
    </>
   
  )
}

export default Results