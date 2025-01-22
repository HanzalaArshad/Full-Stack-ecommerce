import React from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {NavLink} from "react-router-dom"



import news1 from "../../assets/news/news1.png"


import news2 from "../../assets/news/news2.png"
import news3 from "../../assets/news/news3.png"
import news4 from "../../assets/news/news4.png"



 
const News=() => {
  const news = [
    {
        "id": 1,
        "title": "Launch of 'The AI Revolution: A Guide for Beginners'",
        "description": "A new tech book by Dr. Sarah Ahmed explores the fundamentals of artificial intelligence, its applications, and the impact it will have on future industries.",
        "image": news1
    },
    {
        "id": 2,
        "title": "Naseem Hijazi's Works to Be Reprinted in Digital Format",
        "description": "Classic novels by renowned Pakistani author Naseem Hijazi are being reprinted with a modern design and will also be available as eBooks.",
        "image": news2
    },
    {
        "id": 3,
        "title": "'React Handbook' for Developers Released",
        "description": "A comprehensive guide to mastering React.js has been launched by tech author John Doe, covering hooks, state management, and best practices.",
        "image": news3
    },
    {
        "id": 4,
        "title": "Debut Novel 'The Untold Stories of Karachi' Gains Popularity",
        "description": "A fresh take on urban life in Pakistan, this debut novel by a local author delves into the challenges and triumphs of Karachi’s diverse population.",
        "image": news4
    },
];

  
  return (

    <>
    <div className='py-16'>

      <h1 className="text-3xl font-semibold mb-6 ">News Section </h1>

      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >

        {
          news.map((news,index)=>{
          return(  <SwiperSlide key={index} >

              <div className=' flex flex-col sm:flex-row sm:justify-between items-center gap-12 rounded-lg   '>

                <div className='p-4 '>
                  <NavLink to='/'><h3 className='text-lg font-medium hover:text-purple-400  mb-4'>{news.title}</h3></NavLink>
                   
                   <div className='w-12  h-[4px] bg-primary mb-5'></div>
                  <p className='text-sm text-gray-400'>{news.description}</p>

                </div >

                <div className='flex-shrink-0 w-[100px] h-[150px]'>
                  <img src={news.image} alt="" className='w-full object-cover'/>
                </div>
              </div>

            </SwiperSlide>
          )

          })
        }
      </Swiper>


    </div>
    </>
  )
}

export default News