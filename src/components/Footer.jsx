import React from 'react'

const Footer = () => {
    return (
        <div className='h-50 text-black flex items-center justify-center overflow-hidden relative'>
            <video src="src/assets/video.mp4" loop autoPlay muted className='rotate-90 h-300 relative'></video>
            <h1 className='absolute font-bold '>© 2026 Shivam Bhardwaj. All rights reserved. <br /><span className='ml-20 z-10 absolute'>Made With Love ❤</span></h1>
                
        </div>
    )
}

export default Footer