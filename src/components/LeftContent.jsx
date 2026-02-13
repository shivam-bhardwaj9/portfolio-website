import React, { use, useEffect, useState } from 'react'
import Section2 from './Section2'

const LeftContent = () => {
return (
    <div>
        <div className='px-50 pb-60'>
            <h1 className='text-5xl font-bold text-black relative z-10'><span>Hi</span><br />Im Shivam Bhardwaj</h1>
            <p className='text-gray-500 w-110 mt-5 absolute'>Im a final-year Computer Science student passionate about full-stack development and AI. Im eager to contribute to impactful projects and gain hands-on experience through my first software engineering internship.</p>
            <button className='bg-black text-white px-6 py-3 rounded-lg mt-35 absolute hover:bg-gray-200 hover:text-black hover:border' >🚀 View Projects</button>
            <button className='bg-black text-white px-6 py-3 rounded-lg mt-35 absolute left-95 hover:bg-gray-200 hover:text-black hover:border'>📩 Contact Me</button>
        </div>
    </div>
) 
}

export default LeftContent