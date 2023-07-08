export const slide=(from, duration, delay)=>({
    
        hidden:{
            x: from === 'left' ? '-100%' : from === 'right' ? '100%' : 0,
            opacity:0
        },
        show:{
            x:0,
            opacity:1,
            transition:{
                duration,
                delay
            }
        },
    
})


export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren:0,
        staggerChildren:0,
      }
    }
  }
  
 export  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition:{duration:1} }
  }

