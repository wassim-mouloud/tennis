import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { slide,} from '../motion'


function Hero({s}) {
  const [news, setNews]=useState([])
  const [img, setImg]=useState('')
  const [index, setIndex]=useState(0)
  const [active, setActive]=useState(false)

  useEffect(()=>{
    async function getNews(){
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c28d3912b5msh098dac9629c9e1bp10f86bjsnf509f72d9bb1',
          'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
      };
      let response= await fetch('https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1', options)
      let json= await response.json()
      setNews(json.data.slice(0,5))
    }
    getNews()
  },[])

  
  useEffect(() => {
    if (news && news.length > 0) {
      setImg(news[index].image.data.urls.uploaded.original);
    }
  }, [index]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % 5);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [index]);

  useEffect(()=>{
    setActive(true)
    setTimeout(()=>setActive(false),2500)
  },[index])

  


  return (
    <motion.div className={`${active===true?'test':''} relative bg-no-repeat bg-cover bg-center md:bg-top mb-[50px]  p-5 h-[80vh] w-screen  flex flex-col gap-4 ${s===false?'':'blur-md'} `}
    style={{
      backgroundImage: `linear-gradient(to bottom,transparent, #13274F), url(${img ? img : ''})`,
    }}
    >
      <div className='bg-[rgba(0,0,0,0.2)]  justify-center items-center p-3 absolute top-[40vh] left-[20px] hidden md:flex rounded-[10px] hover:bg-[rgba(0,0,0,0.8)] cursor-pointer '
        onClick={()=>setIndex(index === 0 ? 4 : index - 1)}   
      >
        <img src="./left-arrow.png" alt=""  className='h-[28px] w-[28px] object-cover '/>
      </div>
      <div className='bg-[rgba(0,0,0,0.2)]  justify-center items-center p-3 absolute top-[40vh] right-[20px] hidden md:flex rounded-[10px] hover:bg-[rgba(0,0,0,0.8)] cursor-pointer'
          onClick={()=>setIndex(index === 4 ? 0 : index + 1)}   
      >
        <img src="./right-arrow.png" alt=""  className='h-[28px] w-[28px] object-cover'/>
      </div>      <motion.h1 
      className='text-white text-[32px] lg:text-[45px] lg:max-w-[80vw] mt-[50vh]  font-bold'
      initial="hidden"
      animate="show"
      variants={slide('left', 0.6)}      
      >
        {news.length>0 && news[index].title}
      </motion.h1>
      
    </motion.div>
  )
}

export default Hero