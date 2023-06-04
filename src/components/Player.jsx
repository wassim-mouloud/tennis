import React,{ useState } from 'react'
import {motion} from 'framer-motion'
import {item} from '../motion'

function Player({rank, name, prize_money,age, url, country, ratio, height, weight, coach, flag}) {

  const [flip, setFlip] = useState(false)
  
  return (
    <motion.div variants={item} className={` first:ml-[20px] relative h-[300px] rounded-[10px]  flex-shrink-0 md:h-[420px] w-[250px] transition-all duration-[300ms] z-20  my-[30px] mr-[20px]  ${rank===1?'ml-[20px]':''} ${flip?'flip':'noflip'}  `} >
        <div className={`${flip?'bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))]':'bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))]'} rounded-[20px]  w-full h-full absolute inset-0 `} ></div>
        <img src={url} alt="player" className={` ${flip?'opacity-0':'opacity-[1] transition-all duration-[0ms] delay-[150ms]'}   rounded-[20px] w-full h-full  object-cover  flex-shrink-0 object-top   bg-cover bg-center`} style={{backgroundImage:`url(${flag})`}} />
        <p 
        className={` ${flip?'opacity-0':'opacity-[1] transition-all duration-[0ms] delay-[150ms]'}  absolute top-[20px] left-[20px] text-white font-bold text-[32px]`} >#{rank}</p>
        <div className='absolute top-[27px] right-[15px] rounded-[10px] flex justify-center items-center cursor-pointer bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.5)]'
             onClick={()=>setFlip(!flip)}         
        >
          <img src="./flip.png" alt="" className='h-[32px] w-[32px] object-cover' />
        </div>
        <p 
        className={` ${flip?'opacity-0':'opacity-[1] transition-opacity duration-300 delay-[150ms]'}  absolute bottom-[20px] left-[50%] translate-x-[-50%] font-bold text-[32px] bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text`}>{name}</p>

        {flip?(
          <div className='absolute flex-col  test2 top-[70px] right-[15px] text-white text-[14px]'>
              <p className='mb-[20px]'> <span className='font-bold' >Name</span> : {name}</p>   
              <p className='mb-[20px]' ><span className='font-bold' >Age</span> : {age}</p>
              <p className='mb-[20px]' ><span className='font-bold' >Country</span> : {country} </p>       
              <p className='mb-[20px]' ><span className='font-bold' >Rank</span> : {rank}</p>
              <p className='mb-[20px]' ><span className='font-bold' >Career prize money</span> : <br />{prize_money}</p> 
              <p className='mb-[20px] hidden md:flex'> <span className='font-bold' >Career W-L </span> : {ratio}</p>   
              <p className='hidden font-bold md:flex'>Coach : </p>  
              <p className='hidden md:flex' >{coach}</p> 
          </div>
        ):''}
    </motion.div>
  )
}

export default Player