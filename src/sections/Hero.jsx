import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Duration from '../components/Duration'
import HeroTournament from '../components/HeroTournament'
import Round from '../components/Round'
import { slide,} from '../motion'
function Hero({s}) {
  const [news, setNews]=useState([])
  const [img, setImg]=useState('')
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
      setImg(news[1].image.data.urls.uploaded.original);
    }
  }, [news]);
  


  return (
    <div className={`test bg-no-repeat bg-cover bg-center md:bg-top mb-[50px]  p-5 h-[80vh] w-screen  flex flex-col gap-4 ${s===false?'':'blur-md'}`}
    style={{
      backgroundImage: `linear-gradient(to bottom,transparent, #13274F), url(${img ? img : ''})`
    }}
    
    >
      <motion.h1 
      className='text-white text-[32px] lg:text-[45px] lg:max-w-[80vw] mt-[50vh]  font-bold'
      initial="hidden"
      animate="show"
      variants={slide('left', 0.6)}      
      >
        {news.length>0 && news[1].title}
      </motion.h1>
      
      {/* <motion.div className='flex gap-2 w-[90vw] md:max-w-[50vw]'>
        <Duration time="3h 38m" />
        <Round round="Men's final" />
        <HeroTournament imageSrc={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Australian_Open_Logo_2017.svg/1200px-Australian_Open_Logo_2017.svg.png'} />
      </motion.div> */}
      <motion.div className=' w-[90vw] flex md:hidden justify-center items-center  p-1 gap-2 text-white rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-md'
          initial="hidden"
          animate="show"
          variants={slide('left', 0.6)} 
      >
          <img src="./youtube.png" alt="" className='h-[16px] w-[16px]' />
          <p className='text-[16px]'>Watch highlights</p>
      </motion.div>
      
    </div>
  )
}

export default Hero