import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
  
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import avatarimg from "../assets/avatar.png"
import { useSelector } from 'react-redux';



const navigation=[
  {name:"DashBoard", href:"/dashboard"},
  {name:"Orders", href:"/order"},
  {name:"Cart ", href:"/cart"},
  {name:"Checkout ", href:"/checkout"},
]

const NavBar = () => {

const[isDropdown,setIsDropdown]=useState(false)

const cartItems=useSelector(state => state.cart.cartItem)

console.log(cartItems);


  const currentuser=false;
  
  return (
    <header className='max-w-screen-xl mx-auto px-4 py-6'>
       <nav className='flex justify-between items-center'>
        {/* left side  */}

        <div className='flex items-center gap-1  md:gap-16'>
          <NavLink>
            <h1 className='text-lg font-bold font-primary'>BookNest</h1>
         </NavLink>

          {/* search */}

          <div className='relative sm:w-72 w-[100px] space-x-2'>
          <CiSearch className='absolute inline-block left-4 inset-y-2'/>
          <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus-outline-none' />

          </div>
        </div>
         
         {/* right side */}
        <div className='relative flex items-center md:space-x-3 space-x-2'>

          {
            currentuser?
            <>
             <button onClick={()=> setIsDropdown(!isDropdown)}>
              <img src={avatarimg} alt="" className={`size-7 rounded-full ${currentuser?"ring-2 ring-purple-700":""}`} />
             </button>
             {/* show fropdown */}

             {
              isDropdown &&(
                <div className='absolute right-0 mt-60  w-48  bg-white shadow-lg rounded-md z-40'>
              <ul className='py-2'>
                {
                  navigation.map((curr)=>{
                    return(
                      <li key={curr.name} onClick={()=>setIsDropdown(false)}>
                        <NavLink to={curr.href} className='block text-sm py-2 px-4  hover:bg-slate-400 rounded-lg '>
                          {curr.name}

                        </NavLink>
                      </li>
                    )
                  })
                }
              </ul>
             </div>
              )
             }
            </>
            
            :
             <NavLink to="/login"><HiOutlineUser className='size-6'/></NavLink>
  
          }
           
           <button className='hidden sm:block'>
            <HiOutlineHeart className='size-6' />


          </button>

          <NavLink to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-lg gap-1 ">
          <FaShoppingCart className='text-white' />

          {
            cartItems.length >0?<span className='text-white text-sm font-semibold sm:ml-1'>{cartItems.length}</span>:<span className='text-white text-sm font-semibold sm:ml-1'>0</span>

          }

          </NavLink>
        </div>
       </nav>
    </header>
  )
}

export default NavBar