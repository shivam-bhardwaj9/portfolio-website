import React from 'react'
import Leftcontent from './LeftContent'

const Section1 = () => {
    return (
        <div className='h-200 flex justify-between items-center pt-30 '>
            <video src="src/assets/asset-ed557b88.mp4" autoPlay muted loop className='w-screen h-250 object-cover absolute z-[-1]'></video>
            <LeftContent />
            
        </div>
    )
}

export default Section1