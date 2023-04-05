import React, { useEffect, useState } from 'react'
import Tournament from './Tournament'
import {motion} from 'framer-motion'
function Upcoming() {

    const [atpTournaments, setAtpTournaments]=useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07876d3a6dmsh30b40721cedd345p1be6bbjsnfe5c7ad8559b',
            'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        async function getTournaments(){
            let storedData=localStorage.getItem("atpTournaments")
            let tournamentLastFetchTime=localStorage.getItem("atpTournamentstournamentLastFetchTime")
            if(storedData && tournamentLastFetchTime && Date.now()- tournamentLastFetchTime <30*24*60*60*1000){
                setAtpTournaments(JSON.parse(storedData))
            }
            else{
                let response= await fetch('https://tennis-live-data.p.rapidapi.com/tournaments/ATP/2023', options)
                let tournaments= await response.json()
                setAtpTournaments(tournaments.results)
                localStorage.setItem('atpTournaments', JSON.stringify(tournaments.results))
                localStorage.setItem('tournamentLastFetchTime', Date.now())
            }
        }
        getTournaments()
    },[])
    
  return (
    <div className=''>
        <motion.h2
         initial={{opacity:0}}
         whileInView={{opacity:1,
           transition:{
             duration:1.5
           }
         }}
        className='p-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text'>Upcoming Tournaments</motion.h2>
        <div className='flex gap-5 overflow-x-scroll  scrollbar-hide'>
            {
               atpTournaments.map((tourney, index)=>{
                return(
                    <Tournament key={index} start={tourney.start_date} end={tourney.end_date} city={tourney.city} country={tourney.country} surface={tourney.surface} name={tourney.name} url='https://www.atptour.com/en/tournaments/us-open/560/-/media/images/news/2021/09/13/07/28/us-open-tournament-page-2021.jpg'  />
                )
            })
            
            }
        </div>
    </div>
  )
}

export default Upcoming