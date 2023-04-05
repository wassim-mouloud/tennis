export const slide=(from, duration, delay)=>({
    
        hidden:{
            x: from === 'left' ? '-400%' : from === 'right' ? '100%' : 0,
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

export const stagger=(staggerChildren, delayChildren) =>({
    hidden:{
      
    },
    show:{
        transition:{
            staggerChildren,
            delayChildren
        }
    }
})