import React, { useEffect, useState } from 'react'

function Results({firstP, secondP, gm, set1, set2, set3,set4,set5, points, sets, r1, r2, tournament, round, type, awayCountry, homeCountry}) {
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
         <div className='first:ml-[20px] relative bg-[#091327] md:w-[calc(100vw/4)] h-[200px]  w-[80vw] flex flex-col gap-4 p-5 rounded-[10px] mt-[20px] justify-center flex-shrink-0'>
            <div className='flex gap-2' >
                <p className='text-[#20BF55] text-[12px]' >{tournament}</p>
                <p className='text-[#20BF55] text-[12px]' >({type})</p>
            </div>
            <p className='text-[#20BF55] text-[14px]' >{round}</p>
            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[70%] flex gap-2 items-center' >
                    {awayCountry && homeCountry?<img src={awayCountry} alt="" className='w-[20px] h-[20px] object-cover rounded-[10px]' />:null}
                    <p className={`font-bold text-[16px] text-white`}>{firstP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r1})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(30%-20px)]  md:w-[calc(40%-30px)] '>
                    {set1?<p className={`font-bold w-[10px] flex justify-center ${(set1.p2===6 && set1.p2-set1.p1>=2) || set1.p2===7?'text-gray-400':'text-white'}`} >{set1.p1}</p>:null}
                    {set2? <p className={`font-bold   w-[10px] flex justify-center ${(set2.p2===6 && set2.p2 - set2.p1>=2) || set2.p2===7?'text-gray-400':'text-white'}`} >{set2.p1}</p>:null}
                    {set3? <p className={`text-white font-bold   w-[10px] flex justify-center `} >{set3.p1}</p>:null}
                    {points? <p className={`text-white font-bold   w-[10px] flex justify-center `} >{points.p1}</p>:null}
                </div>
            </div>

            

            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[70%] flex gap-2 items-center' >
                    {homeCountry && awayCountry?<img src={homeCountry} alt="" className='w-[20px] h-[20px] object-cover rounded-[10px]' />:null}
                    <p className={`font-bold text-[16px] text-white  `} >{secondP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r2})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(40%-20px)]  md:w-[calc(40%-30px)]' >
                    {set1?<p className={` font-bold  w-[10px] flex justify-center ${(set1.p1===6 && set1.p1-set1.p2>=2) || set1.p1===7?'text-gray-400':'text-white'}`} >{set1.p2}</p>:null}
                    {set2? <p className={` font-bold  w-[10px] flex justify-center ${(set2.p1===6 && set2.p1-set2.p2>=2) || set2.p1===7?'text-gray-400':'text-white'}`} >{set2.p2}</p>:null}
                    {set3? <p className={`text-white font-bold  w-[10px] flex justify-center `} >{set3.p2}</p>:null}
                    {points? <p className='text-white font-bold   w-[10px] flex justify-center' >{points.p1}</p>:null}

                </div>
            </div>
 
     </div>
    ):(
        <div className='first:ml-[20px] relative bg-[#091327] md:w-[calc(100vw/3.3)] h-[200px]  w-[95vw] flex flex-col gap-4 p-5 rounded-[10px] mt-[20px] justify-center flex-shrink-0'>
            <div className='flex gap-2' >
                <p className='text-[#20BF55] text-[12px]' >{tournament}</p>
                <p className='text-[#20BF55] text-[12px]' >({type})</p>
            </div>
            <p className='text-[#20BF55] text-[14px]' >{round}</p>
            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[70%] flex gap-2 items-center' >
                    {awayCountry && homeCountry?<img src={awayCountry} alt="" className='w-[20px] h-[20px] object-cover rounded-[10px]' />:null}
                    <p className={`font-bold text-[16px] text-white`}>{firstP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r1})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(30%-20px)]  md:w-[calc(40%-30px)] '>
                    {set1?<p className={`font-bold w-[10px] flex justify-center ${(set1.p2===6 && set1.p2-set1.p1>=2) || set1.p2===7?'text-gray-400':'text-white'}`} >{set1.p1}</p>:null}
                    {set2? <p className={`font-bold   w-[10px] flex justify-center ${(set2.p2===6 && set2.p2 - set2.p1>=2) || set2.p2===7?'text-gray-400':'text-white'}`} >{set2.p1}</p>:null}
                    {set3? <p className={`font-bold   w-[10px] flex justify-center ${(set3.p2===6 && set3.p2 - set3.p1>=2) || set3.p2===7?'text-gray-400':'text-white'}`} >{set3.p1}</p>:null}
                    {set4? <p className={`font-bold   w-[10px] flex justify-center ${(set4.p2===6 && set4.p2 - set4.p1>=2) || set4.p2===7?'text-gray-400':'text-white'}`} >{set4.p1}</p>:null}
                    {set5? <p className={`font-bold   w-[10px] flex justify-center ${(set5.p2===6 && set5.p2 - set5.p1>=2) || set5.p2===7?'text-gray-400':'text-white'}`} >{set5.p1}</p>:null}
                    {points? <p className={`text-white font-bold   w-[10px] flex justify-center `} >{points.p1}</p>:null}
                </div>
            </div>

            

            <div className='relative flex items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[70%] flex gap-2 items-center' >
                    {homeCountry && awayCountry?<img src={homeCountry} alt="" className='w-[20px] h-[20px] object-cover rounded-[10px]' />:null}
                    <p className={`font-bold text-[16px] text-white  `} >{secondP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r2})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(40%-20px)]  md:w-[calc(40%-30px)]' >
                    {set1?<p className={` font-bold  w-[10px] flex justify-center ${(set1.p1===6 && set1.p1-set1.p2>=2) || set1.p1===7?'text-gray-400':'text-white'}`} >{set1.p2}</p>:null}
                    {set2? <p className={` font-bold  w-[10px] flex justify-center ${(set2.p1===6 && set2.p1-set2.p2>=2) || set2.p1===7?'text-gray-400':'text-white'}`} >{set2.p2}</p>:null}
                    {set3? <p className={`font-bold   w-[10px] flex justify-center ${(set3.p2===6 && set3.p1 - set3.p2>=2) || set3.p1===7?'text-gray-400':'text-white'}`} >{set3.p2}</p>:null}
                    {set4? <p className={`font-bold   w-[10px] flex justify-center ${(set4.p2===6 && set4.p1 - set4.p2>=2) || set4.p1===7?'text-gray-400':'text-white'}`} >{set4.p2}</p>:null}
                    {set5? <p className={`font-bold   w-[10px] flex justify-center ${(set5.p2===6 && set5.p1 - set5.p2>=2) || set5.p1===7?'text-gray-400':'text-white'}`} >{set5.p2}</p>:null}
                    {points? <p className='text-white font-bold   w-[10px] flex justify-center' >{points.p1}</p>:null}

                </div>
            </div>
 
     </div>
    )}
    </>
   
  )
}

export default Results