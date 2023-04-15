import React, { useEffect, useState } from 'react'
import Results from '../components/Results'
import {motion} from 'framer-motion'
import FilterMatches from '../components/FilterMatches';
import {countries} from '../utils/countries'
function Live({s}) {

  const [live, setLive]= useState([])
  const [filtered, setFiltered]=useState([])
  const [active, setActive]=useState('atp')


  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '07876d3a6dmsh30b40721cedd345p1be6bbjsnfe5c7ad8559b',
		'X-RapidAPI-Host': 'tennisapi1.p.rapidapi.com'
	}
};
  
  useEffect(()=>{
    async function getLive(){
        let response= await fetch('https://tennisapi1.p.rapidapi.com/api/tennis/events/live', options)
        let json= await response.json()
        let rated = json.events.filter(match => match.homeTeam.ranking || match.awayTeam.ranking);
        let unrated=json.events.filter(match=>match.homeTeam.ranking===null && match.awayTeam.ranking===null)
     
        rated.sort((a, b) => {
          const [r1, r2] = [
            (a.awayTeam.ranking && a.homeTeam.ranking) ? Math.min(a.awayTeam.ranking, a.homeTeam.ranking) :
            a.awayTeam.ranking || a.homeTeam.ranking,
            (b.awayTeam.ranking && b.homeTeam.ranking) ? Math.min(b.awayTeam.ranking, b.homeTeam.ranking) :
            b.awayTeam.ranking || b.homeTeam.ranking
          ];
          return r1 - r2;
        });
        setLive([...rated, ...unrated])
    }
    getLive()
  },[])

  useEffect(()=>{
    setFiltered(live.filter(match => match.tournament.category.flag === 'atp'))
  },[live])

    useEffect(()=>{
      if(active==='all'){
          setFiltered(live)
          return
      }
      else if(active==='atp' || active==='wta'){
          setFiltered(live.filter(match => match.tournament.category.flag === active))
          return
      }
      else if(active==='singles'){
          setFiltered(live.filter(match=>!match.awayTeam.name.includes('/')))
          return
      }
      else if(active==='doubles'){
          setFiltered(live.filter(match=>match.awayTeam.name.includes('/')))
          return
      }
  },[active])
  

  return (
    <div className={` ${s===false?'':'blur-md'}`}>
         <motion.h2
          initial={{opacity:0}}
          whileInView={{opacity:1,
            transition:{
              duration:1.5
            }
          }}
         className='pl-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text' >Live Matches</motion.h2> 
        <FilterMatches active={active} setActive={setActive}/>
         <div className='flex gap-2 md:gap-6 overflow-x-scroll scrollbar-hide'>
         {filtered.map((match, index)=>{
            if (match.awayTeam.country.name === 'USA') {
              match.awayTeam.country.name = 'United States';
            }
            
            if (match.homeTeam.country.name === 'USA') {
              match.homeTeam.country.name = 'United States';
            }
            
            let awayCountry=countries.find(element=>match.awayTeam.country.name?element.name.common.toLowerCase()===match.awayTeam.country.name.toLowerCase():null)
            let homeCountry=countries.find(element=>match.homeTeam.country.name?element.name.common.toLowerCase()===match.homeTeam.country.name.toLowerCase():null)
            return(
                <Results awayCountry={awayCountry?awayCountry.flags[0]:null} homeCountry={homeCountry?homeCountry.flags[0]:null}  gm={false}  round={match.roundInfo?.name || null} type={match.tournament.category.flag} tournament={match.tournament.name} tournamentId={match.tournament.uniqueTournament.id} r1={match.awayTeam.ranking} r2={match.homeTeam.ranking} firstP={match.awayTeam.name} secondP={match.homeTeam.name} set1={'period1' in match.awayScore? {p1:match.awayScore.period1, p2:match.homeScore.period1}: null} set2={'period2' in match.awayScore? {p1:match.awayScore.period2, p2:match.homeScore.period2}: null} set3={'period3' in match.awayScore? {p1:match.awayScore.period3, p2:match.homeScore.period3}: null}  points={{p1:match.awayScore.point, p2:match.homeScore.point}} key={index} />
            )
         })}
         </div>
    </div>
  )
}

export default Live