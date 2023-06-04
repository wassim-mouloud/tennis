import React, { useEffect, useState } from 'react'
import Tournament from '../components/Tournament'
import {motion} from 'framer-motion'
import {months} from '../utils/months'
import FilterTournaments from '../components/FilterTournaments'

function Upcoming() {

    const [atpTournaments, setAtpTournaments]=useState([])
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
    const [active, setActive]=useState(['JAN-DEC'])
    const [filtered, setFiltered]=useState([])


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c28d3912b5msh098dac9629c9e1bp10f86bjsnf509f72d9bb1',
            'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com'
        }
    };

    useEffect(()=>{
        async function getTournaments(){

                let storedData=localStorage.getItem("atpTournaments")
                let lastFetchTime=localStorage.getItem("tournamentsLastFetchTime")

                if (storedData && lastFetchTime && Date.now()-lastFetchTime < 30*24*60*60*1000){
                    setAtpTournaments(JSON.parse(storedData))
                }
                else{
                    let response= await fetch('https://tennis-live-data.p.rapidapi.com/tournaments/ATP/2023', options)
                    let tournaments= await response.json()
                    setAtpTournaments(tournaments.results)
                    localStorage.setItem("atpTournaments", JSON.stringify(tournaments.results))
                    localStorage.setItem("tournamentsLastFetchTime", Date.now())
                }

       
        }
        getTournaments()
    },[])

    useEffect(()=>{
        setFiltered(atpTournaments)
    },[atpTournaments])

    useEffect(() => {
        const monthRange = {
          'JAN-DEC': ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
          'JAN-MAR': ['01', '02', '03'],
          'APR-JUN': ['04', '05', '06'],
          'JUL-SEP': ['07', '08', '09'],
          'OCT-DEC': ['10', '11', '12']
        };
      
        const filteredTournaments = atpTournaments.filter(tourney => {
          const month = tourney.start_date.match(/-(\d{2})-/)[1];
          return monthRange[active].includes(month);
        });
      
        setFiltered(filteredTournaments);
      }, [active]);
      
    
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
        <FilterTournaments active={active} setActive={setActive} />
        <div className='flex gap-5 overflow-x-scroll scrollbar-hide'>
            {
               filtered && filtered.map((tourney, index)=>{
                return(
                    <Tournament key={index} start={tourney.start_date} end={tourney.end_date} city={tourney.city} country={tourney.country} surface={tourney.surface} name={tourney.name} url={tourney.surface.includes('Hard')?'https://longislandtennismagazine.com/sites/default/files/Tennis_Hard_Court_03_28_19.jpg':tourney.surface.includes('Clay')?'https://theracketlife.com/wp-content/uploads/2022/04/Can-You-Use-Hard-Court-Balls-On-Clay-Courts-00.jpg':tourney.surface.includes('Grass')?'https://photo-assets.wimbledon.com/images/pics/large/s_court_280616_666_fe.jpg':null}  />
                )
            })
            
            }
        </div>
        
    </div>
  )
}

export default Upcoming