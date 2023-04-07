import React, { useEffect, useState } from 'react'

function Results({firstP, secondP, gm, set1, set2, set3, points, sets, r1, r2, tournament, round, type}) {
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
            <div className='flex relative items-center w-full gap-5 md:gap-12'>
                <div className='w-[60%] md:w-[50%] flex gap-2 items-center' >
                    <p className={`font-bold text-[16px] text-white`}>{firstP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r1})</p>:null}
                </div>
                <div className='flex gap-4 items-center  w-[calc(40%-20px)]   md:w-[calc(40%-30px)] '>
                    {set1?<p className={`font-bold w-[10px] ${(set1.p2===6 && set1.p2-set1.p1>=2) || set1.p2===7?'text-gray-400':'text-white'}`} >{set1.p1}</p>:null}
                    {set2? <p className={`font-bold   w-[10px] ${(set2.p2===6 && set2.p2 - set2.p1>=2) || set2.p2===7?'text-gray-400':'text-white'}`} >{set2.p1}</p>:null}
                    {set3? <p className={`text-white font-bold   w-[10px] `} >{set3.p1}</p>:null}
                    {points? <p className={`text-white font-bold   w-[10px] `} >{points.p1}</p>:null}
                </div>
            </div>

            

            <div className='flex items-center relative w-full gap-5  md:gap-12'>
                <div className='w-[60%] md:w-[50%] flex gap-2 items-center' >
                    <p className={`font-bold text-[16px] text-white  `} >{secondP}</p>
                    {r1?<p className='text-[#788AA3] text-[12px]' >({r2})</p>:null}
                </div>
                <div className='flex gap-4 items-center w-[calc(40%-20px)] md:w-[calc(40%-30px)]' >
                    {set1?<p className={` font-bold  w-[10px] ${(set1.p1===6 && set1.p1-set1.p2>=2) || set1.p1===7?'text-gray-400':'text-white'}`} >{set1.p2}</p>:null}
                    {set2? <p className={` font-bold  w-[10px] ${(set2.p1===6 && set2.p1-set2.p2>=2) || set2.p1===7?'text-gray-400':'text-white'}`} >{set2.p2}</p>:null}
                    {set3? <p className={`text-white font-bold  w-[10px] `} >{set3.p2}</p>:null}
                    {points? <p className='text-white font-bold   w-[10px]' >{points.p1}</p>:null}

                </div>
            </div>
 
     </div>
    ):(
        <div className='bg-[#091327] w-[300px] h-[150px] flex flex-col gap-4 p-5 rounded-[20px] m-[20px] justify-center'>
        <div className='flex relative items-center w-full justify-between'>
            <p className='text-white font-bold text-[24px]'>{firstP}</p>
            <div className='flex gap-3 items-center absolute right-[0px] w-[30%] justify-between'>
                {sets?<p className='text-white font-bold'>{sets.p1}</p> :null}              
             
                <p className='text-white font-bold' >{points.p1}</p>
            </div>
        </div>

        <div className='h-[1px] rounded-full bg-white w-full' ></div>

        <div className='flex items-center relative w-full justify-between'>
            <p className='text-white text-[24px] font-bold' >{secondP}</p>
            <div className='flex gap-3 items-center  absolute right-[0px] w-[30%] justify-between' >
                {sets?<p className='text-white font-bold'>{sets.p2}</p> :null}              
                <p className='text-white font-bold' >{points.p2}</p>
            </div>
        </div>

    </div>
    )}
    </>
   
  )
}

export default Results