import React from 'react'

function Tournament({url, name, city, surface, country, start, end}) {
  return (
    <div className={`first:ml-[20px] overflow-hidden w-[85vw] md:w-[calc(100vw/3)] h-[220px] md:h-[300px] rounded-[10px] flex-shrink-0  mt-[20px] hover:scale-[1.05] transition relative`}>
        <div className='bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] rounded-[20px]  w-full h-full absolute inset-0 ' ></div>
        <img src={url} alt="" className='w-full h-full object-cover'/>
        <div className='w-full flex gap-2 justify-center absolute top-[30px]' >
          <img src="./calendar.png" alt="" className='h-[16px] w-[16px] mr-[10px] '/>
          <p className='text-[12px] text-white' >{start}</p>
          <p className='text-[12px] text-white' >{end}</p>
        </div>
        <div className='flex flex-col items-center w-full gap-2 absolute bottom-[30px] md:bottom-[40px]'>
          <p className='text-white text-[14px] md:text-[18px] font-bold'>{name}</p>
          <div className='flex gap-2' >
              <span className='text-[12px] text-[#20BF55]' >•{city}</span>
              <span className='text-[12px] text-[#20BF55]' >•{country}</span>
              <span className='text-[12px] text-[#20BF55]' >•{surface}</span>
          </div>
        </div>
    </div>
  )
}

export default Tournament