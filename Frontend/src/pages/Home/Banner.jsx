import React from 'react'
import banner from "../../assets/banner1.png.png"

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row py-16 justify-between items-center gap-12'>
       <div className='md:w-1/2 w-full flex item-center md:justify-end'>
        <img src={banner} alt="" />
      </div>
      <div className='md:w-1/2 w-full'>
        <h1 className=' md:text-5xl text-2xl font-medium mb-7'>Your Gateway to Infinite Stories and Knowledge
        </h1>

        <p className='mb-10'>Welcome to your one-stop destination for all things books! Whether you're a lover of thrilling mysteries, timeless romance, gripping fantasies, or enriching non-fiction, we have something for everyone. Explore our curated collections, discover hidden gems, and let every book take you on a journey of imagination and discovery.

</p>
     <button  className='btn-primary text-white'>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Banner