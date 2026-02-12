import React from 'react'
import video from '../assets/video.mp4'

const Footer = () => {
    return (
        <div className='h-50 text-black flex items-center justify-center overflow-hidden relative'>
            <video src={video} loop autoPlay muted className='rotate-90 h-300 relative'></video>
            <h1 className='absolute font-bold '>© 2026 Shivam Bhardwaj. All rights reserved. <br /><span className='ml-20 z-10 absolute'>Made With Love ❤</span></h1>
                
        </div>
    )
}

export default Footer