import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { item2, slide } from '../motion'

function Hero() {
  // Initialize state variables
  const [news, setNews] = useState([])
  const [img, setImg] = useState('')
  const [index, setIndex] = useState(0)
  const [active, setActive] = useState(false)

  // Fetch news on component mount
  useEffect(() => {
    async function getNews() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c28d3912b5msh098dac9629c9e1bp10f86bjsnf509f72d9bb1',
          'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
      }
      const response = await fetch('https://livescore6.p.rapidapi.com/news/v2/list-by-sport?category=2021020913321150030&page=1', options)
      const json = await response.json()
      setNews(json.data.slice(0,5))
    }

    getNews()
  }, [])

  // Update image when index changes
  useEffect(() => {
    if (news && news.length > 0) {
      setImg(news[index].image.data.urls.uploaded.original)
    }
  }, [index, news])

  // Change news item every 6 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % 5)
    }, 6000)

    // Cleanup on unmount
    return () => clearInterval(intervalId)
  }, [index, img])

  // Set active state for 2.5 seconds when index changes
  useEffect(() => {
    setActive(true)
    setTimeout(() => setActive(false), 600)
  }, [index])

  // Render component
  return (
    <motion.div 
      id='hero' 
      className={` ${active && "test"} relative bg-no-repeat bg-cover bg-center md:bg-top mb-[50px] p-5 h-[80vh] w-screen flex flex-col gap-4`}
      style={{
        backgroundImage: `linear-gradient(to bottom,transparent, #13274F), url(${img})`,
      }}
    >
      <NavigationArrow
        direction='left'
        onClick={() => setIndex(index === 0 ? 4 : index - 1)}
      />
      <NavigationArrow
        direction='right'
        onClick={() => setIndex(index === 4 ? 0 : index + 1)}
      />
      <motion.h1 
        className='text-white text-[32px] lg:text-[45px] lg:max-w-[80vw] mt-[50vh] font-bold'
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:0.6
          }
        }}     
      >
        {news.length > 0 && news[index].title}
      </motion.h1>
    </motion.div>
  )
}

// Navigation arrow component
const NavigationArrow = ({ direction, onClick }) => (
  <div 
    className={`bg-[rgba(0,0,0,0.2)] justify-center items-center p-3 absolute top-[40vh] ${direction === 'left' ? 'left-[20px]' : 'right-[20px]'} hidden md:flex rounded-[10px] hover:bg-[rgba(0,0,0,0.8)] cursor-pointer`}
    onClick={onClick}   
  >
    <img src={`./${direction}-arrow.png`} alt="" className='h-[28px] w-[28px] object-cover'/>
  </div>
)

export default Hero
