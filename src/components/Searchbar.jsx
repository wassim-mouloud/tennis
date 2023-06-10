import React, { useEffect, useState } from 'react'

function Searchbar({setOpenSearch, openSearch, tournaments, searched, setSearched, setName, setTournamentCity,setTournamentStart, setTournamentEnd, setTournamentSurface,setTournamentCountry, setOpenTourney}) {
  const handleChange= (event)=>{
    const word= event.target.value;
    if(word===""){
      setSearched([])
    }else{
      setSearched(tournaments.filter(tournament=>tournament.name.toLowerCase().includes(word.toLowerCase())))
    }
  }

  return (
    <div className='relative'>
        <div onClick={()=>setOpenSearch(true)}  className={` absolute top-[20px]  z-[40]   rounded-[15px] cursor-pointer transition-all duration-300 flex-col  ${openSearch?" w-[90vw] lg:w-[50vw] h-[60px] right-[50%] translatex bg-[rgba(255,255,255,0.5)] ":" w-[50px] h-[40px] right-[20px] bg-[rgba(255,255,255,0.5)]"}`} >
            <div className='flex items-center justify-center h-full bg-[rgba(255,255,255,0.5)] rounded-[15px]' >
              {openSearch && <input onChange={handleChange} type='text' placeholder='test' className='bg-[rgba(255,255,255,0.1)] order-2 w-[calc(100%-34px)] h-[100%] rounded-r-[15px]  outline-0 text-[20px] p-4 md:text-[24px]'/>}
              <img src="./search.png" alt="search-icon" className={` h-[24px] w-[24px] order-1 object-cover ${openSearch?"m-[10px]":''}`} />
            </div>
            {openSearch && (
              <div className='w-full h-auto max-h-[300px] overflow-y-scroll  rounded-[15px] mt-[10px]' >
                {searched.length!=0 &&  searched.map((tourney, index)=>{
                  return( 
                  <div className='flex-col bg-[rgba(255,255,255,0.5)]'
                        onClick={(e)=>{
                          e.stopPropagation()
                          setName(tourney.name)
                          setTournamentCity(tourney.city)
                          setTournamentStart(tourney.start_date)
                          setTournamentEnd(tourney.end_date)
                          setTournamentSurface(tourney.surface)
                          setTournamentCountry(tourney.country)
                          setOpenSearch(false)
                          setOpenTourney(true)
                          setSearched([])
                          
                        }}   

                        key={index}
                  >
                    <div className='flex h-[70px] text-[14px]  items-center  ' >
                      <img className='object-cover h-full md:w-[10%] w-[30%] rounded-[15px] p-1' src={tourney.surface.includes('Hard')?'https://longislandtennismagazine.com/sites/default/files/Tennis_Hard_Court_03_28_19.jpg':tourney.surface.includes('Clay')?'https://theracketlife.com/wp-content/uploads/2022/04/Can-You-Use-Hard-Court-Balls-On-Clay-Courts-00.jpg':tourney.surface.includes('Grass')?'https://photo-assets.wimbledon.com/images/pics/large/s_court_280616_666_fe.jpg':null} alt="" />
                      <p className='font-bold text-black ' >{tourney.name}</p>
                    </div>
                  </div>
                  
                  )
                })}
              </div>
              )
            }
        </div>
    </div>
  )
}

export default Searchbar
