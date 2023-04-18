import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center bg-white h-screen w-screen z-[99]' >
        <video src="./loader.mp4" class="h-[300px] w-[300px]" autoPlay muted loop id>
             
        </video>
    </div>
  )
}

export default Loader