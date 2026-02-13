import React, { useState } from 'react'
import LeftContent from './LeftContent'
import video from '../assets/asset-ed557b88.mp4'
import image from '../assets/arrow-circle-down.svg'


const Section1 = () => {
    return (
        <div className='h-190 flex justify-between items-center pt-30 '>
            <video src={video} autoPlay muted loop className='w-screen h-250 object-cover absolute z-[-1]'></video>
            <LeftContent />
            <img onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} src={image} alt="down" className='h-8 absolute bottom-10 left-1/2 transition-transform duration-300 hover:scale-150 hover:rotate-12"' />
        </div>
    )
}

export default Section1