import React from 'react'
import LeftContent from './LeftContent'
import video from '../assets/asset-ed557b88.mp4'


const Section1 = () => {
    return (
        <div className='h-200 flex justify-between items-center pt-30 '>
            <video src={video} autoPlay muted loop className='w-screen h-250 object-cover absolute z-[-1]'></video>
            <LeftContent />
            
        </div>
    )
}

export default Section1