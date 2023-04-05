import React, { useEffect, useState } from 'react'
import Results from './Results'
import {motion} from 'framer-motion'
function Live({s}) {
  const [live, setLive]= useState([])
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '993374ba1fmsh65e6c12ee51854ap1cc3e9jsn506bb6462ab4',
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
            let r1, r2;
            if (a.awayTeam.ranking && a.homeTeam.ranking) {
              r1 = Math.min(a.awayTeam.ranking, a.homeTeam.ranking);
            } else if (a.awayTeam.ranking && !a.homeTeam.ranking) {
              r1 = a.awayTeam.ranking;
            } else {
              r1 = a.homeTeam.ranking;
            }
            if (b.awayTeam.ranking && b.homeTeam.ranking) {
              r2 = Math.min(b.awayTeam.ranking, b.homeTeam.ranking);
            } else if (b.awayTeam.ranking && !b.homeTeam.ranking) {
              r2 = b.awayTeam.ranking;
            } else {
              r2 = b.homeTeam.ranking;
            }
            return r1 - r2;
          });
          
        setLive([...rated, ...unrated])
        
    }
    getLive()
  },[])
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
         <div className='flex gap-2 md:gap-6 overflow-x-scroll scrollbar-hide'>
         {live.map((match, index)=>{
            return(
                <Results gm={false} round={match.roundInfo.name}  type={match.tournament.category.flag} tournament={match.tournament.name} tournamentId={match.tournament.uniqueTournament.id} r1={match.awayTeam.ranking} r2={match.homeTeam.ranking} firstP={match.awayTeam.name} secondP={match.homeTeam.name} set1={'period1' in match.awayScore? {p1:match.awayScore.period1, p2:match.homeScore.period1}: null} set2={'period2' in match.awayScore? {p1:match.awayScore.period2, p2:match.homeScore.period2}: null} set3={'period3' in match.awayScore? {p1:match.awayScore.period3, p2:match.homeScore.period3}: null}  points={{p1:match.awayScore.point, p2:match.homeScore.point}} key={index} />
            )
         })}
         </div>
    </div>
  )
}

export default Live