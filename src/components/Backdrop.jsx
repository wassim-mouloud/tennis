import React from 'react'
import {motion} from 'framer-motion'


function Backdrop({children, onClick, navbar}) {
  return (
    <motion.div 
    className={`h-screen w-screen flex justify-center items-center fixed  ${navbar?"top-0":"bottom-0"} mt-[200px] left-0 bg-[#000000e1] z-[1]`}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    onClick={onClick}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop