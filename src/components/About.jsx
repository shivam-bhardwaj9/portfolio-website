import React from 'react'
import RightAbout from './RightAbout'

const About = () => {
    return (
        <div className='bg-white h-280 flex justify-between p-30 pt-70' id="about">
            <div>
            <h1 className='text-4xl font-bold text-black p-10 uppercase pt-20'>about</h1>
            <p className='w-200 text-gray-500 text-lg ml-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
            </div>
            
            <RightAbout />

            


        </div>
  )
}

export default About