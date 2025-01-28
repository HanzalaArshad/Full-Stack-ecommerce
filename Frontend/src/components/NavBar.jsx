import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { HiOutlineUser } from "react-icons/hi";
import { useFetchAllBooksQuery } from '../redux/features/Books/BookApi';
import avatar from "../assets/avatar.png"

const navigation = [
  { name: "Orders", href: "/orders" },
];

const NavBar = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useSelector(state => state.cart.cartItem);
  const { currentUser, Logout } = useAuth();
  const navigate = useNavigate();
  
  const { data: allBooks, error, isLoading } = useFetchAllBooksQuery();
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = allBooks?.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
    setSearchTerm("");
  };

  const LogOut = () => {
    Logout();
  };

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='max-w-screen-xl mx-auto px-4 py-6'>
      <nav className='flex justify-between items-center'>
        {/* Left Side */}
        <div className='flex items-center gap-1'>
          <NavLink to="/">
            <h1 className='text-lg font-bold font-primary '>BookNest</h1>
          </NavLink>

          {/* Search Bar */}
          <div className='relative sm:w-72 w-full'>
            <CiSearch className='absolute left-2 top-1/2 transform -translate-y-1/2' />
            <input 
              type="text" 
              placeholder='Search here' 
              className='bg-[#EAEAEA] w-full py-2 md:px-8 px-6 rounded-md focus:outline-none'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && filteredBooks?.length > 0 && (
              <div className="absolute bg-white border rounded-md w-full mt-1 z-10 max-h-60 overflow-y-auto">
                <ul>
                  {filteredBooks.map((book) => (
                    <li 
                      key={book._id} 
                      className="py-2 px-4 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleBookClick(book._id)}
                    >
                      {book.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className='relative flex flex-row-reverse  gap-1 items-center md:space-x-3 space-x-2'>
          {/* User Avatar */}
          {currentUser ? (
            <>
              <button className=' flex justify-center flex-col items-center  ' onClick={() => setIsDropdown(!isDropdown)}>
              <img 
  src={currentUser?.photo || avatar} 
  alt="User Avatar" 
  className={`h-8 w-8 rounded-full ${currentUser ? "ring-2 ring-purple-700" : ""}`} 
/>
                <span className="ml-2">{currentUser.userName || currentUser.email.slice(0,13)}</span>
              </button>

              {/* Dropdown Menu */}
              {isDropdown && (
                <div className='absolute right-0 top-full mt-2  w-48 bg-white shadow-lg rounded-md z-40'>
                  <ul className='py-2'>
                    {navigation.map((curr) => (
                      <li key={curr.name} onClick={() => setIsDropdown(false)}>
                        <NavLink 
                          to={curr.href} 
                          className='block text-sm py-2 px-4 hover:bg-slate-400 rounded-lg'
                        >
                          {curr.name}
                        </NavLink>
                      </li>
                    ))}
                    <li>
                      <button 
                        className='block text-sm py-2 px-4 hover:bg-slate-400 rounded-lg'
                        onClick={LogOut}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <NavLink to="/login">
              <HiOutlineUser className='h-6 w-6' />
            </NavLink>
          )}

          {/* Cart */}
          <NavLink 
            to="/cart" 
            className="bg-primary py-2 mt-0 sm:px-6 px-2 flex items-center rounded-lg gap-1"
          >
            <FaShoppingCart className='text-white' />
            <span className='text-white text-sm font-semibold sm:ml-1'>
              {cartItems.length > 0 ? cartItems.length : "0"}
            </span>
          </NavLink>
        </div>
      </nav>


    </header>
  );
};

export default NavBar;
