import React from 'react'

function FilterMatches({active, setActive}) {

  return (
    <div className='flex gap-4 overflow-x-scroll scrollbar-hide p-5' >
            <button onClick={()=>setActive('all')} className={`${active==='all'?'bg-[#008b8b]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center border-solid border-[#008b8b] border-[3px] hover:bg-[#008b8b]`} >All</button>
            <button onClick={()=>setActive('atp')} className={`${active==='atp'?'bg-[#008b8b]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center border-solid border-[#008b8b] border-[3px] hover:bg-[#008b8b]`} >ATP</button>
            <button onClick={()=>setActive('wta')} className={`${active==='wta'?'bg-[#008b8b]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center border-solid border-[#008b8b] border-[3px] hover:bg-[#008b8b]`} >WTA</button>
            <button onClick={()=>setActive('singles')} className={`${active==='singles'?'bg-[#008b8b]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center border-solid border-[#008b8b] border-[3px] hover:bg-[#008b8b]`} >Singles</button>
            <button onClick={()=>setActive('doubles')} className={`${active==='doubles'?'bg-[#008b8b]':''} w-[30vw]  md:w-[200px] flex-shrink-0 h-[40px] p-3 rounded-[20px] text-white font-bold flex justify-center items-center border-solid border-[#008b8b] border-[3px] hover:bg-[#008b8b]`} >Doubles</button>
    </div>
  )
}

export default FilterMatches