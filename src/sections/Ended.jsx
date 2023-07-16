import React, { useEffect, useState, useRef } from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import EndedResults from '../components/EndedResults'
import FilterMatches from '../components/FilterMatches'
import { countries } from '../utils/countries'
import { players } from '../utils/players'
import '../App.css'

function Ended() {
    const [ended, setEnded]=useState([])
    const [filtered, setFiltered]=useState([])
    const [active, setActive]=useState('atp')
    const scrollContainerRef = useRef(null);
    const [leftConstraint, setLeftConstraint]= useState(0)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c28d3912b5msh098dac9629c9e1bp10f86bjsnf509f72d9bb1',
            'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
        }
    };
    
    useEffect(()=>{
        let x=new Date()
        async function getEnded(){
            let response = await fetch(`https://tennisapi1.p.rapidapi.com/api/tennis/events/${x.getDate()}/${x.getMonth()+1}/${x.getFullYear()}`, options)
            let json = await response.json()
            setEnded(json.events.filter(match=>match.status.type === 'finished' && !match.awayTeam.name.includes('/')))
        }
        getEnded()
    },[])

   
    
    useEffect(()=>{
        setFiltered(ended.filter(match => match.tournament.category.flag === active && match.status.type === 'finished'))
    }, [ended])
    
    useEffect(()=>{
        if(active==='all'){
            setFiltered(ended)
            scrollContainerRef.current.scrollLeft = 0;
            console.log( scrollContainerRef.current.scrollLeft)
        }
        else if(active==='atp' || active==='wta'){
            setFiltered(ended.filter(match => match.tournament.category.flag === active && match.status.type === 'finished'))
            scrollContainerRef.current.scrollLeft = 0;
        }
        else if(active==='singles'){
            setFiltered(ended.filter(match=>!match.awayTeam.name.includes('/')))
        }
        else if(active==='doubles'){
            setFiltered(ended.filter(match=>match.awayTeam.name.includes('/')))
        }
    },[active])
    
    useEffect(()=>{
        setLeftConstraint(scrollContainerRef?.current?.scrollWidth - scrollContainerRef?.current?.offsetWidth)
    })
    
  return (
    <div className='horizontal-scroll' id='ended' >
        <motion.h2 
         initial={{opacity:0}}
         whileInView={{opacity:1,
           transition:{
             duration:2.5
           }
         }}
        className='pl-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text' >Completed Matches</motion.h2> 
        <FilterMatches active={active} setActive={setActive}/>
       
       <motion.div className='w-screen '>
           <motion.div
                ref={scrollContainerRef}
                className='flex w-full gap-2 overflow-x-scroll md:gap-6 '
                // drag='x'
                // dragConstraints={{right:0, left:-leftConstraint}}
                >
            
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
       </motion.div>
       
    </div>
  )
}

export default Ended