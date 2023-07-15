import React, { useEffect, useState, useRef } from 'react';
import Tournament from '../components/Tournament';
import { motion } from 'framer-motion';
import FilterTournaments from '../components/FilterTournaments';

function Upcoming({
  currentMonth,
  setTournaments,
  openTourney,
  setOpenTourney,
  setName,
  setTournamentCity,
  setTournamentStart,
  setTournamentEnd,
  setTournamentSurface,
  setTournamentCountry
}) {
  const [atpTournaments, setAtpTournaments] = useState([]);
  const [active, setActive] = useState([currentMonth]);
  const [filtered, setFiltered] = useState([]);
  const [choose, setChoose] = useState(false);
  const scrollContainerRef = useRef(null);
  const [leftConstraint, setLeftConstraint]= useState(0)


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c28d3912b5msh098dac9629c9e1bp10f86bjsnf509f72d9bb1',
      'X-RapidAPI-Host': 'tennis-live-data.p.rapidapi.com'
    }
  };

  useEffect(() => {
    async function getTournaments() {
      let storedData = localStorage.getItem("atpTournaments");
      let lastFetchTime = localStorage.getItem("tournamentsLastFetchTime");

      if (storedData && lastFetchTime && Date.now() - lastFetchTime < 30 * 24 * 60 * 60 * 1000) {
        setAtpTournaments(JSON.parse(storedData));
      } else {
        let response = await fetch('https://tennis-live-data.p.rapidapi.com/tournaments/ATP/2023', options);
        let tournaments = await response.json();
        setAtpTournaments(tournaments.results);
        localStorage.setItem("atpTournaments", JSON.stringify(tournaments.results));
        localStorage.setItem("tournamentsLastFetchTime", Date.now());
      }
    }
    getTournaments();
  }, []);

  useEffect(() => {
    setTournaments(atpTournaments);
  }, [atpTournaments]);

  useEffect(() => {
    const filteredTournaments = atpTournaments.filter(tourney => {
      const month = tourney.start_date.match(/-(\d{2})-/)[1];
      return active.includes(month);
    });

    setFiltered(filteredTournaments);
    scrollContainerRef.current.scrollLeft = 0;
  }, [atpTournaments, active]);

  useEffect(()=>{
    setLeftConstraint(scrollContainerRef?.current?.scrollWidth - scrollContainerRef?.current?.offsetWidth)
  })

  return (
    <div className='' id='calendar'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.5
          }
        }}
        className='p-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text'
      >
        Upcoming Tournaments
      </motion.h2>
      <FilterTournaments active={active} setActive={setActive} choose={choose} setChoose={setChoose} />
      <motion.div className='w-screen ' >
        <motion.div 
          ref={scrollContainerRef}
          className={`w-full flex gap-5 overflow-x-scroll  `}
          // drag='x'
          // dragConstraints={{right:0, left:-leftConstraint}}
         
         >
          {
            filtered && filtered.map((tourney, index) => {
              return (
                <Tournament
                  choose={choose}
                  setTournamentCity={setTournamentCity}
                  setTournamentStart={setTournamentStart}
                  setTournamentEnd={setTournamentEnd}
                  setTournamentSurface={setTournamentSurface}
                  setTournamentCountry={setTournamentCountry}
                  setName={setName}
                  openTourney={openTourney}
                  setOpenTourney={setOpenTourney}
                  key={index}
                  start={tourney.start_date}
                  end={tourney.end_date}
                  city={tourney.city}
                  country={tourney.country}
                  surface={tourney.surface}
                  name={tourney.name}
                  url={tourney.surface.includes('Hard') ? './hard_court.webp'
                    : tourney.surface.includes('Clay') ? './clay_court.webp'
                      : tourney.surface.includes('Grass') ? './grass_court.webp'
                        : null}
                />
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Upcoming;
