import React from 'react'
import RightAbout from './RightAbout'

const About = () => {
    return (
        <div className='bg-white h-280 flex justify-between p-30 pt-70' id="about">
            <div>
                <h1 className='text-4xl font-bold text-black p-10 uppercase pt-20'>about</h1>
                <p className='w-200 text-gray-500 text-lg ml-10'>I'm Shivam Bhardwaj, a final-year Computer Science student passionate about
                    building impactful digital products. I specialize in full-stack development
                    using modern technologies like JavaScript and React.<br/>    

                    I enjoy solving real-world problems through clean code and scalable systems.
                    Currently, I’m strengthening my skills in data structures, system design,
                    and AI to prepare for top-tier software engineering roles.<br/>

                    My goal is to contribute to innovative teams, continuously learn,
                    and grow into a world-class engineer.</p>
            </div>

            <RightAbout />




        </div>
    )
}

export default About