import React from 'react'
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className='bg-white opacity-80 fixed h-30 top-0 w-full flex items-center justify-between px-10 z-20' id='#hello'>
    <div className='flex items-end '>
      <a href="/"><img src={logo} alt="logo" className='h-15 pl-10 object-cover' /></a>
      <h1 className='text-2xl font-mono uppercase'>Shivam.</h1>
      </div>
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