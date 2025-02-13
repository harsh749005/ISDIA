import React from 'react'
import Globe from '../assets/globe.png'
const Banner = () => {
  return (
    <>
    <div className='w-full h-full bg-black flex flex-row px-10'>
      <h1 className='w-[800px] bg-black text-white font-poppins mt-20 text-8xl '>
      Information System Design <span className='bg-[#9d66ff] line-clamp-1 w-max'>and</span> Intelligent Applications.
      </h1>
        <div className='w-[600px] h-[600px] relative  opacity-55'>
            <img src={Globe} alt="" className='absolute w-full h-full object-cover' />
        </div>

     
    </div>

    </>
  )
}

export default Banner
