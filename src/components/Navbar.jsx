import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white opacity-80 fixed h-30 top-0 w-full flex items-center justify-between px-10 z-20'>
        <a href="/"><img src="src/assets/logo.png" alt="logo" className='h-15 pl-10 object-cover' /></a>
            <ul className='flex gap-20 text-black text-lg p-10 relative'>
                <li className='font-bold uppercase hover:text-gray-500 '><a href="/">home</a></li>
                <li className='font-bold uppercase hover:text-gray-500'><a href="#skills">skills</a></li>
                <li className='font-bold uppercase hover:text-gray-500'><a href="#about">about</a></li>
                <li className='font-bold uppercase hover:text-gray-500'><a href="#projects">projects</a></li>
                <li className='font-bold uppercase hover:text-gray-500'><a href="#contact">contact</a></li>
            </ul>
    </div>
  )
}

export default Navbar