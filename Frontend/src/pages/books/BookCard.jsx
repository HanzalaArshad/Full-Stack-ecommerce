import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import getImgUrl from "../../utils/getImgUrl";
import { use } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const BookCard = ({ book }) => {

  const dispatch=useDispatch();

  const handleAddToCart=(product)=>{
   
    dispatch(addToCart(product))
  }
  
  return (
    <div className="w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      {/* Increased height of the image container */}
      <div className="relative h-100 w-full bg-gray-200 flex items-center justify-center">
        <img
          src={`${getImgUrl(book.coverImage)}`}
          alt={book.title || "Book Cover"}
          className="h-full w-full object-fit"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
          {book.title || "Book Title"}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {book.description || "Book Description"}
        </p>
        <p className="text-lg font-semibold text-gray-900 mb-4">
          ${book.newPrice}{" "}
          <span className="line-through text-gray-500 text-sm">
            ${book.oldPrice || book.price + 20}
          </span>
        </p>
        <button onClick={()=> handleAddToCart(book)} className="w-full py-2 px-4 bg-blue-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
          <FiShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
