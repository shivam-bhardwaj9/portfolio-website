import React from 'react'
import image from '../assets/download.png'
import image2 from '../assets/Rugs for Living Room.png'
import image3 from '../assets/Sweet moment.png'
import image4 from '../assets/arrow-circle-right.svg'
const Projects = () => {
    return (
        <div className='bg-white h-screen pt-50 px-40' id='projects'>
            <h1 className='text-4xl font-bold text-black uppercase'>Projects <span className='text-xl text-red-500'>(In Progress)</span></h1>
            <div className='flex gap-10 mt-10'>
                <div className='bg-gray-300 w-100 h-120 rounded-2xl'>
                    <h2 className='text-2xl font-semibold text-black pl-10 mt-3 mb-3 font-mono'>Project 1</h2>
                    <img src={image} alt="photo" className="w-80 h-60 object-bottom pl-8 object-cover rounded-xl hello" />
                    <p className="pl-10 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p> 
                    <img onClick={() => document.querySelector('.hello').classList.toggle('scale-105')} src={image4} alt="arrow" className="h-10 ml-35 mt-10 transition-transform duration-300 hover:scale-140 hover:rotate-[10deg]" />
                </div>
                <div className='bg-gray-300 w-100 h-120 rounded-2xl'>
                    <h2 className='text-2xl font-bold text-black pl-10 mt-3 mb-3 font-mono'>Project 2</h2>
                    <img src={image2} alt="photo" className="w-80 h-60 object-center pl-8 object-cover rounded-xl hello2" />
                    <p className="pl-10 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p>
                    <img onClick={() => document.querySelector('.hello2').classList.toggle('scale-105')} src={image4} alt="arrow" className="h-10 ml-35 mt-10 transition-transform duration-300 hover:scale-140 hover:rotate-[10deg]" />
                </div>
                <div className='bg-gray-300 w-100 h-120 rounded-2xl'>
                    <h2 className='text-2xl font-bold text-black pl-10 mt-3 mb-3 font-mono'>Project 3</h2>
                    <img src={image3} alt="photo" className="w-80 h-60 object-center pl-8 object-cover rounded-xl hello3" />
                    <p className="pl-10 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p>
                    <img onClick={() => document.querySelector('.hello3').classList.toggle('scale-105')} src={image4} alt="arrow" className="h-10 ml-35 mt-10 transition-transform duration-300 hover:scale-140 hover:rotate-[10deg]" />
                </div>
                <div className='bg-gray-300 w-100 h-120 rounded-2xl'>
                    <h2 className='text-2xl font-bold text-black pl-10 mt-3 mb-3 font-mono'>Project 4</h2>
                    <img src={image} alt="photo" className="w-80 h-60 object-bottom pl-8 object-cover rounded-xl hello4" />
                    <p className="pl-10 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ratione.</p>
                    <img onClick={() => document.querySelector('.hello4').classList.toggle('scale-105')} src={image4} alt="arrow" className="h-10 ml-35 mt-10 transition-transform duration-300 hover:scale-140 hover:rotate-[10deg]" />
                </div>

            </div>
        </div>
    )
}

export default Projects