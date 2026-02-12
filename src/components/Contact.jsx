import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-300 h-160 pl-40 flex items-start flex-col'>
        <h1 className='text-4xl font-bold text-black p-10 uppercase pt-20'>contact</h1>
        <input className="w-150 border border-black rounded-md p-5 ml-10 " type="text" placeholder='enter your name'/>
        <input className="w-150 border border-black rounded-md p-5  ml-10 mt-5" type="email" placeholder='enter your email'/>
        <button className="w-50 bg-black text-white p-3 rounded-full mt-5 ml-10 hover:bg-gray-200 hover:text-black hover:border">Submit</button>
    </div>
  )
}

export default Contact