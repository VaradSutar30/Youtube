import React from 'react'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const page = () => {
  return (
    <div className='h-fit w-full flex justify-start items-start'>
      <Sidebar />
       <div className='flex-col flex w-full h-fit gap-4'>
        <Navbar/>
        <Hero/>
       </div>
      </div>

  )
}

export default page
