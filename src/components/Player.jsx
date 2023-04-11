import React from 'react'
import {motion} from 'framer-motion'
import {item} from '../motion'
function Player({rank, name, country, url}) {
  return (
    <motion.div variants={item} className={`group hover:scale-[1.1] relative h-[300px] rounded-[10px]  flex-shrink-0 md:h-[400px] w-[250px] transition duration-[400ms] z-20  my-[30px] mr-[20px]  ${rank===1?'ml-[20px]':''}`} >
        <div className='bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))] rounded-[20px]  w-full h-full absolute inset-0 ' ></div>
        <img src={url} alt="player" className=' rounded-[20px] w-full h-full  object-cover  flex-shrink-0 object-top  bg-black bg-cover bg-center ' />
        <motion.p 
         initial={{opacity:0}}
         whileInView={{opacity:1,
           transition:{
             duration:2
           }
         }}
        className=' absolute top-[20px] left-[20px] text-white font-bold text-[32px]' >#{rank}</motion.p>
        <motion.p 
         initial={{opacity:0}}
         whileInView={{opacity:1,
           transition:{
             duration:2
           }
         }}
        className=' absolute bottom-[20px] left-[20px] font-bold text-[32px] bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text'>{name}</motion.p>
     
    </motion.div>
  )
}

export default Player