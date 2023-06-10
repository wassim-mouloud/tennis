import React from 'react'
import Backdrop from './Backdrop'
import {motion} from 'framer-motion'



function TournamentDetail({handleClose, name,city, surface, country, start, end}) {
  const dropIn={
    hidden:{
        y:'-100vh',
        opacity:0
    },
    show:{
        y:'0',
        opacity:1,
        transition:{
            type:"spring",
            duration:0.05,
            damping:50,
            stiffness:300
        }
    },
    exit:{
        y:'100vh',
        opacity:0
    }
}
  return (
    <Backdrop onClick={handleClose} >
        <motion.div
            className='w-[90vw] md:w-[50vw] h-[50vh] bg-white rounded-[15px] '
            onClick={e=>e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <img className='object-cover w-full h-full rounded-[15px]' src={surface.includes('Hard')?'https://courtsunlimitedut.com/wp-content/uploads/2020/11/fall-winter-tennis-court-care.jpg':surface.includes('Clay')?'https://theracketlife.com/wp-content/uploads/2022/04/Can-You-Use-Hard-Court-Balls-On-Clay-Courts-00.jpg':surface.includes('Grass')?'https://photo-assets.wimbledon.com/images/pics/large/s_court_280616_666_fe.jpg':null} alt="" />
            <div className='bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))] rounded-[15px]  w-full h-full absolute inset-0 ' />
            <div className='w-full flex gap-2 justify-center items-center absolute top-[50px]' >
                <img src="./calendar.png" alt="" className='h-[16px] w-[16px] mr-[10px] '/>
                <p className='text-[14px] md:text-[16px] text-[#03A89E]' >{start}</p>
                <p className='text-[14px] md:text-[16px] text-[#03A89E]' >{end}</p>
            </div>
            <div className='flex flex-col items-center w-full gap-2 absolute bottom-[50px] md:bottom-[40px]'>
                <p className='text-white text-[22px]  md:text-[32px] font-bold'>{name}</p>
                <div className='flex gap-2 mt-[20px]' >
                    <span className='text-[14px] md:text-[16px] text-[#20BF55]' >• {city}</span>
                    <span className='text-[14px] md:text-[16px] text-[#20BF55]' >• {country}</span>
                    <span className='text-[14px] md:text-[16px] text-[#20BF55]' >• {surface}</span>
                </div>
            </div>



        </motion.div>
    </Backdrop>
  )
}

export default TournamentDetail