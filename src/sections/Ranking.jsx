import React, { useEffect, useState } from 'react'
import Player from '../components/Player';
import {motion} from 'framer-motion'
import {container} from '../motion'
import {countries} from '../utils/countries'
function Ranking() {

    const [top10, setTop10]=useState([])
    const [detail, setDetail]=useState([])
    const [images, setImages]=useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8d3375ce3emsh941ecfb03c58645p1ecfa8jsneaaa1743c0b4',
            'X-RapidAPI-Host': 'ultimate-tennis1.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
      async function getPlayers() {
        let storedData = localStorage.getItem("top10");
        let lastFetchTime = localStorage.getItem("top10LastFetchTime");
        if (storedData && lastFetchTime && Date.now() - Number(lastFetchTime) < 30 * 24 * 60 * 60 * 1000) {
          setTop10(JSON.parse(storedData));
        } else {
          let response = await fetch("https://ultimate-tennis1.p.rapidapi.com/live_leaderboard/10", options);
          let ranking = await response.json();
          setTop10(ranking.data);
          localStorage.setItem("top10", JSON.stringify(ranking.data));
          localStorage.setItem("top10LastFetchTime", Date.now());
        }
      }
      getPlayers();
      
    }, []);
    

      useEffect(() => {
        async function getDetail() {
          let storedData = localStorage.getItem("top10Detail");
          let lastFetchTime = localStorage.getItem("top10DetailLastFetchTime");
          if (storedData && lastFetchTime && Date.now() - Number(lastFetchTime) < 10 * 24 * 60 * 60 * 1000) {
            setDetail(JSON.parse(storedData));
            
          } 
          else {
            let promises = top10.map(async (player) => {
              let r = await fetch(`https://ultimate-tennis1.p.rapidapi.com/player_info/${player.id}`, options);
              let json = await r.json();
              return json.player_data[0];
            })
            let temp = await Promise.all(promises);
            setDetail(temp);
            localStorage.setItem("top10Detail", JSON.stringify(temp));
            localStorage.setItem("top10DetailLastFetchTime", Date.now());
          }
        }
      
        if (top10.length > 0) {
          getDetail();
        }
      }, [top10]);
        

      useEffect(()=>{
        if(detail.length>0){
          detail.forEach((player) => {
            setImages((prevImage) => [...prevImage, player.Image]);
          });

        }
    
      },[detail])

     

  return (
    <div className='' id='ranking' >
        <motion.h2 
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:1.5
          }
        }}
        className='pl-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text' >ATP Ranking</motion.h2> 
        <motion.div
          initial='hidden'
          animate='show'
          variants={container}
        className='flex overflow-x-scroll scrollbar-hide' >
            {detail && detail.map((player, index)=>{
                let country=countries.find(country=>country.fifa===player["Flag Code"])
                if (player['Flag Code']==="null"){
                  country=countries.find(country=>country.fifa==="RUS")
                }
                let flag=country?country.flags[0]:null  
                
                return(
                    <Player 
                      key={index} 
                      rank={top10[index].Rank}
                      name={player.Name}
                      prize_money={player["Prize money Career"]} 
                      age={player.Age} 
                      country={player['Flag Code']==="null"?"RUS":player['Flag Code']} 
                      ratio={player['W/L Career']}
                      coach={player['Coach']} 
                      flag={flag}  
                      url={images[index]}/>
                )
            })}
        </motion.div>
        

    </div>
  )
}

export default Ranking