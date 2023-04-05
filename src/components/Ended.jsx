import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import EndedResults from './EndedResults'
function Ended() {
    const [ended, setEnded]=useState([])
    const [filtered, setFiltered]=useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '993374ba1fmsh65e6c12ee51854ap1cc3e9jsn506bb6462ab4',
            'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
        }
    };
    
    useEffect(()=>{
        let x=new Date()
        async function getEnded(){
            let response = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/events/${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`, options)
            let json = await response.json()
            setEnded(json.events)
        }
        getEnded()
    },[])
    
    useEffect(()=>{
        setFiltered(ended.filter(match => (match.tournament.category.flag === 'atp' || match.tournament.category === 'wta') && match.status.type === 'finished'))
    
    }, [ended])
    
    
    
    
  return (
    <div className='' >
        <motion.h2 
         initial={{opacity:0}}
         whileInView={{opacity:1,
           transition:{
             duration:1.5
           }
         }}
        className='pl-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text' >Ended Matches</motion.h2> 
        <div className='flex gap-2 md:gap-6 overflow-x-scroll scrollbar-hide' >
        {filtered.map((match, index)=>{
            return(
                <EndedResults gm={false} round={match.roundInfo.name} type={match.tournament.category.flag} tournament={match.tournament.name}  r1={match.awayTeam.ranking} r2={match.homeTeam.ranking} firstP={match.awayTeam.name} secondP={match.homeTeam.name} set1={'period1' in match.awayScore? {p1:match.awayScore.period1, p2:match.homeScore.period1}: null} set2={'period2' in match.awayScore? {p1:match.awayScore.period2, p2:match.homeScore.period2}: null} set3={'period3' in match.awayScore? {p1:match.awayScore.period3, p2:match.homeScore.period3}: null} key={index} />
            )

        })}
        </div>
    </div>
  )
}

export default Ended