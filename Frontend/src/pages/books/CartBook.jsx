import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getImgUrl from '../../utils/getImgUrl';
import { clearCart, removeToCart } from '../../redux/features/cart/cartSlice';

const CartBook = () => {

  const dispatch=useDispatch();

  const cartItems=useSelector(state=>state.cart.cartItem)
  
  console.log(cartItems);

  
  

  const TotalPrice=cartItems.reduce((acc,item)=> acc+item.newPrice,0 ).toFixed(2);
  
  const handleClearCart = (product) => {

    dispatch(removeToCart(product))
  };

  const handleDeleteCart=()=>{
    dispatch(clearCart())
  }


  return (
    <div className="container mx-auto mt-12 p-6 bg-gray-50 shadow-lg rounded-lg">
      {/* Cart Header */}
      <div className="flex justify-between items-center pb-4 border-b">
        <h2 className="text-3xl font-bold text-gray-800">Shopping Cart</h2>
        <button
        onClick={handleDeleteCart}
          
          className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md transition"
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div className="mt-6">


        {cartItems.length>0?( <ul className="space-y-6">
          {/* Single Cart Item */}

          {
            cartItems.map((product)=>{
              return (
                <li key={product._id} className="flex flex-wrap md:flex-nowrap items-center bg-white rounded-lg p-4 shadow-sm">
                {/* Product Details */}
                <div className="w-full md:w-3/4 flex flex-col">
                  <div className="flex justify-between items-center">
                    <Link
                      to="/"
                      className="text-xl font-semibold text-gray-700 hover:underline"
                    >
                      {product.title}
                    </Link>
                    <p className="text-lg font-bold text-gray-800"> ${product.newPrice}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    <strong>Category:</strong> {product.category}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-gray-600">
                      <strong>Qty:</strong> 1
                    </p>
                    <button
                     onClick={()=>handleClearCart(product)}
                      className="text-red-500 hover:text-red-700 text-sm"
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
    
                {/* Product Image */}
                <div className="w-full flex justify-center  md:w-1/4 h-40 mt-4 md:mt-0 md:ml-6 flex-shrink-0 overflow-hidden rounded-lg ">
                  <img
                    src={`${getImgUrl(product.coverImage)}`}
                    alt="Product"
                    className="h-[160px] w-[100px] object-contain"
                  />
                </div>
              </li>
              )
            })
          }
         
          {/* Add more <li> for multiple products */}
        </ul>):( <p>No Product Found</p> )}
       
      </div>

      {/* Subtotal & Checkout */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center text-lg font-medium">
          <span>Subtotal</span>
          <span>${TotalPrice?TotalPrice:0}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link
            to="/checkout"
            className="w-full sm:w-auto text-center bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition"
          >
            Proceed to Checkout
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto text-center text-purple-600 border border-purple-600 py-3 px-6 rounded-lg hover:bg-purple-50 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartBook;
