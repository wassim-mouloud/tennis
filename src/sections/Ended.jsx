import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import EndedResults from '../components/EndedResults'
import FilterMatches from '../components/FilterMatches'
import { countries } from '../utils/countries'
import { players } from '../utils/players'

function Ended() {
    const [ended, setEnded]=useState([])
    const [filtered, setFiltered]=useState([])
    const [playerCountries, setPlayerCountries]=useState([])
    const [active, setActive]=useState('atp')
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
        }
        else if(active==='atp' || active==='wta'){
            setFiltered(ended.filter(match => match.tournament.category.flag === active && match.status.type === 'finished'))
        }
        else if(active==='singles'){
            setFiltered(ended.filter(match=>!match.awayTeam.name.includes('/')))
        }
        else if(active==='doubles'){
            setFiltered(ended.filter(match=>match.awayTeam.name.includes('/')))
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
            className='flex gap-2 overflow-x-scroll overflow-y-hidden md:gap-6 scrollbar-hide' >

            {filtered.map((match, index)=>{
                let awayName=match.awayTeam.name.substring(0, match.awayTeam.name.indexOf(" ")).toLowerCase()
                let homeName=match.homeTeam.name.substring(0, match.homeTeam.name.indexOf(" ")).toLowerCase()
                let awayCountry=players.find(element=>element.last_name.toLowerCase()===awayName || element.first_name.toLowerCase()===awayName)?.country
                let homeCountry=players.find(element=>element.last_name.toLowerCase()===homeName || element.first_name.toLowerCase()===homeName)?.country
                let awayFlag=awayCountry?countries.find(element=>element.name.common===awayCountry)?.flags[0]:null
                let homeFlag=homeCountry?countries.find(element=>element.name.common===homeCountry)?.flags[0]:null
                return(
                    <EndedResults gm={match.tournament.name.includes("French Open") || match.tournament.name.includes("Australian Open")||match.tournament.name.includes("Wimbledon")||match.tournament.name.includes("US Open")} awayFlag={awayFlag} homeFlag={homeFlag} round={match.roundInfo?.name || null} type={match.tournament.category.flag} tournament={match.tournament.name}  r1={match.awayTeam.ranking} r2={match.homeTeam.ranking} firstP={match.awayTeam.name} secondP={match.homeTeam.name} set1={'period1' in match.awayScore? {p1:match.awayScore.period1, p2:match.homeScore.period1}: null} set2={'period2' in match.awayScore? {p1:match.awayScore.period2, p2:match.homeScore.period2}: null} set3={'period3' in match.awayScore? {p1:match.awayScore.period3, p2:match.homeScore.period3}: null} set4={'period4' in match.awayScore? {p1:match.awayScore.period4, p2:match.homeScore.period4}: null} set5={'period5' in match.awayScore? {p1:match.awayScore.period5, p2:match.homeScore.period5}: null} key={index} />
                )
            })}
            
        </motion.div>
       
    </div>
  )
}

export default Ended