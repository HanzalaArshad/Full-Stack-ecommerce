import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


const Recommended = () => {

  const [books, setBooks] = useState([]);
  
    const fetchBooks = async() => {
      try {
        const res = await fetch("book.json");
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };

  
    useEffect(() => {
      fetchBooks();
    }, []);


  return (
    <>
    <div className='py-16'>
    <h1 className="text-3xl font-semibold mb-6 ">Recommendation For you</h1>
      

    <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(10,15).map((book, index) => (
            <SwiperSlide key={index} className="flex justify-center ">
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>

    
    </>
  )
}

export default Recommended