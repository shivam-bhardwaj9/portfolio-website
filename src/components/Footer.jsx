import React from 'react'
import Image from '../assets/github.svg'
import image2 from '../assets/linkedin.svg'

const Footer = () => {
    return (
        <div className='h-150 text-black flex flex-col justify-center items-center'>
            <h1 className=' font-mono text-9xl pr-10'>Tech <br /></h1>
            <div>
                <span className='font-mono text-9xl'>Aesthetic</span>
            </div>
            <div>
                <h1 className='font-bold mt-10'>© 2026 Shivam Bhardwaj. All rights reserved. <br /><span className='ml-20'>Made With Love ❤</span></h1>
                <div className='flex justify-center items-end pr-10'>
                    <a href="https://github.com/shivam-bhardwaj9" target="_blank" rel="noopener noreferrer">
                        <img src={Image} alt="GitHub Logo" className="h-10 mt-5 cursor-pointer" /> </a>
                    <a href="https://www.linkedin.com/in/shivam-bhardwaj-a90539253" target="_blank" rel="noopener noreferrer">
                        <img src={image2} alt="LinkedIn Logo" className="h-10 cursor-pointer ml-5" />
                    </a>
                </div>
            </div>
        </div >
    )
}

export default Footer