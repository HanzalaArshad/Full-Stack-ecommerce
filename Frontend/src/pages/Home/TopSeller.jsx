import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const categories = [
  "choose a genre",
  "Islam",
  "Philosophy",
  "Novels",
  "Science",
  "self-Help",
];

const TopSeller = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("choose a genre");

  const fetchBooks = async () => {
    try {
      const res = await fetch("book.json");
      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredBooks =
    selectedCategory === "choose a genre"
      ? books
      : books.filter(
          (curr) =>
            curr.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="py-6 px-4 lg:px-8">
      <h1 className="text-3xl font-semibold mb-6 ">Top Seller</h1>

      {/* Category Filter */}
      <div className="mb-8 ">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#F9F9F9] border-gray-300 rounded-md py-2 px-4 shadow-sm focus:outline-none"
        >
          {categories.map((curr, index) => (
            <option value={curr} key={index}>
              {curr}
            </option>
          ))}
        </select>
      </div>

      {/* Swiper Slider */}
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
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index} className="flex justify-center ">
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSeller;
