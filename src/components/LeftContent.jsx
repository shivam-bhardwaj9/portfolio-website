import React, { use, useEffect, useState } from 'react'
import Section2 from './Section2'

const LeftContent = () => {

    return (
        <div>
            <div className='px-50 pb-60'>
                <h1 className='text-5xl font-bold text-black relative z-10 font-mono'><span>Hi</span><br />Im Shivam Bhardwaj</h1>
                <p className='text-gray-500 w-110 mt-5 absolute text-2xl'>Front-End Developer | AI Enthusiast</p>
                <button className='bg-black text-white px-6 py-3 rounded-lg mt-25 absolute hover:bg-gray-200 hover:text-black hover:border' >🚀 View Projects</button>
                <button className='bg-black text-white px-6 py-3 rounded-lg mt-25 absolute left-95 hover:bg-gray-200 hover:text-black hover:border'>📩 Contact Me</button>
            </div>
        </div>
    )
}

export default LeftContent