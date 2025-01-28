import React from "react";
import { useFetchAllBooksQuery } from "../redux/features/Books/BookApi";
import getImgUrl from "../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const ExploreBook = () => {
  const { data: books = [] } = useFetchAllBooksQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">

<section className="text-center bg-gradient-to-r from-purple-300 to-indigo-900 text-white py-16 px-4 rounded-lg shadow-lg">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to our Book Section
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Your ultimate destination for discovering books, connecting with readers, and building your literary haven.
        </motion.p>

        <div className="flex justify-center items-center flex-wrap gap-2">
            
        <motion.button
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
        >
          Easy to Order
        </motion.button>

        
        
        <motion.button
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
        >
          Best Quality Paper
        </motion.button>

        
        <motion.button
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200"
          whileHover={{ scale: 1.1 }}
        >
          Fast Delievery
        </motion.button>
        </div>
      </section>
      {/* Header */}
    

      {/* Books Grid */}
      <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {books.map((book) => (
          <Link
          to={`/books/${book._id}`}
            key={book._id}
            className="relative bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Book Cover */}
            <img
              src={`${getImgUrl(book.coverImage)}`}
              alt={book.title}
              className="h-[400px] w-[300px]  "
            />

            {/* Book Details */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate">
                {book.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {book.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-green-600">
                  ${book.newPrice}
                </span>
                {book.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${book.oldPrice}
                  </span>
                )}
              </div>

              {/* Add to Cart Button */}
              <motion.button
                className="w-full bg-[#1a2c7d] text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, y: 2 }}
                onClick={() => handleAddToCart(book)}
              >
                Add to Cart
              </motion.button>
            </div>

            {/* Category & Trending Badge */}
            <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              {book.category}
            </div>
            {book.trending && (
              <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                Trending
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreBook;
