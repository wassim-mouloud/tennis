import React, { useEffect, useState } from 'react'
import Player from './Player';
import {motion} from 'framer-motion'

function Ranking() {

    const [top10, setTop10]=useState([])
    const [images, setImages]=useState([])
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '07876d3a6dmsh30b40721cedd345p1be6bbjsnfe5c7ad8559b',
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
        async function getImages() {
          let storedData = localStorage.getItem("images");
          let lastFetchTime = localStorage.getItem("imagesLastFetchTime");
          if (storedData && lastFetchTime && Date.now() - Number(lastFetchTime) < 30 * 24 * 60 * 60 * 1000) {
            setImages(JSON.parse(storedData));
          } else {
            let promises = top10.map(async (player) => {
              let r = await fetch(`https://ultimate-tennis1.p.rapidapi.com/player_info/${player.id}`, options);
              let json = await r.json();
              return json.player_data[0].Image;
            });
            let temp = await Promise.all(promises);
            setImages(temp);
            localStorage.setItem("images", JSON.stringify(temp));
            localStorage.setItem("imagesLastFetchTime", Date.now());
          }
        }
        if (top10.length > 0) {
          getImages();
        }
      }, [top10]);  

    
  return (
    <div className=''>
        <motion.h2 
        initial={{opacity:0}}
        whileInView={{opacity:1,
          transition:{
            duration:1.5
          }
        }}
        className='pl-5 text-[32px] font-bold bg-gradient-to-r from-[#20BF55] to-[#01BAEF] inline-block text-transparent bg-clip-text' >ATP Ranking</motion.h2> 
        <div className='flex overflow-x-scroll scrollbar-hide' >
            {top10 && top10.map((player, index)=>{
                return(
                    <Player key={index} rank={player.Rank} name={player.Name} url={images[index]}/>
        
                    
                )
            })}
        </div>
        

    </div>
  )
}

export default Ranking