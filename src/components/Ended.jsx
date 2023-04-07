import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import EndedResults from './EndedResults'
import FilterMatches from './FilterMatches'

function Ended() {
    const [ended, setEnded]=useState([])
    const [filtered, setFiltered]=useState([])
    const [active, setActive]=useState('all')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8951329bd7msha60049130daf0c6p14ecdejsn70858ee3c4ec',
            'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
        }
    };
    
    useEffect(()=>{
        let x=new Date()
        async function getEnded(){
            let response = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/events/${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`, options)
            let json = await response.json()
            setEnded(json.events.filter(match=>match.status.type === 'finished'))
        }
        getEnded()
    },[])
    
    useEffect(()=>{
        setFiltered(ended)
    }, [ended])
    
    useEffect(()=>{
        if(active==='all'){
            setFiltered(ended)
            return
        }
        else if(active==='atp' || active==='wta'){
            setFiltered(ended.filter(match => match.tournament.category.flag === active && match.status.type === 'finished'))
            return
        }
        else if(active==='singles'){
            setFiltered(ended.filter(match=>!match.awayTeam.name.includes('/')))
            return
        }
        else if(active==='doubles'){
            setFiltered(ended.filter(match=>match.awayTeam.name.includes('/')))
            return
        }
    },[active])
    
    
    
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
        <FilterMatches active={active} setActive={setActive}/>
       
       <motion.div
            layout
            className='flex gap-2 md:gap-6 overflow-x-scroll scrollbar-hide overflow-y-hidden' >
                <AnimatePresence>
            {filtered.map((match, index)=>{
                return(
                    <EndedResults gm={false} round={match.roundInfo.name} type={match.tournament.category.flag} tournament={match.tournament.name}  r1={match.awayTeam.ranking} r2={match.homeTeam.ranking} firstP={match.awayTeam.name} secondP={match.homeTeam.name} set1={'period1' in match.awayScore? {p1:match.awayScore.period1, p2:match.homeScore.period1}: null} set2={'period2' in match.awayScore? {p1:match.awayScore.period2, p2:match.homeScore.period2}: null} set3={'period3' in match.awayScore? {p1:match.awayScore.period3, p2:match.homeScore.period3}: null} key={index} />
                )
            })}
            </AnimatePresence>
        </motion.div>
       
    </div>
  )
}

export default Ended