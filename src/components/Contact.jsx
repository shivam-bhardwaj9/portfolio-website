import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-300 h-200 flex items-center flex-col' id='contact'>
      <h1 className='text-4xl font-bold text-black p-10 uppercase pt-10'>contact</h1>
      <h2 className=' font-bold text-xl pr-100 font-mono'>Let's Connect 🚀</h2>
      <div className='bg-gray-100 w-150 h-180 mt-5 p-20 mb-50 rounded-2xl flex flex-col items-center'>
  
  <form 
    name="contact" 
    method="POST" 
    data-netlify="true"
    className="flex flex-col items-center w-full"
  >
    
    {/* Hidden input (VERY IMPORTANT) */}
    <input type="hidden" name="form-name" value="contact" />

    <h1 className='mr-105 mb-3 text-2xl font-mono'>Name</h1>
    <input 
      className="bg-white w-120 border border-black rounded-xl p-5" 
      type="text" 
      name="name"
      placeholder='enter your name' 
      required
    />

    <h1 className='mr-100 text-2xl mt-5 mb-3 font-mono'>Email</h1>
    <input 
      className="bg-white w-120 border border-black rounded-xl p-5" 
      type="email" 
      name="email"
      placeholder='enter your email' 
      required
    />

    <button 
      type="submit"
      className="w-50 bg-black text-white p-3 rounded-full mt-10 hover:bg-gray-200 hover:text-black hover:border"
    >
      Submit
    </button>

  </form>
</div>
    </div >
  )
}

export default Contact
