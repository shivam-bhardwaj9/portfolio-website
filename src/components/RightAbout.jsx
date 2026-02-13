import React from 'react'
import image from '../assets/hello.png'

const RightAbout = () => {
    return (
        <div>   
        <div className='bg-gray-100 w-150 rounded-xl'>
            <img src={image} alt="Profile" className='h-150 object-cover'/>
            </div>
        </div>
    )
}

export default RightAbout