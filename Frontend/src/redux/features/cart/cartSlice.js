import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

const initialState = {
  cartItem: JSON.parse(localStorage.getItem('cartItem')) || [], // Load from localStorage on initial load
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItem.find(item => item._id === action.payload._id);
      if (!existingItem) {
        state.cartItem.push(action.payload);
        localStorage.setItem('cartItem', JSON.stringify(state.cartItem)); // Save to localStorage
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Added To Cart",
          showConfirmButton: false,
          timer: 750,
        });
      } else {
        Swal.fire({
          title: "Item Already exists in the Cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ok!",
        });
      }
    },
    removeToCart: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item._id !== action.payload._id);
      localStorage.setItem('cartItem', JSON.stringify(state.cartItem)); // Save to localStorage
    },
    clearCart: (state) => {
      state.cartItem = [];
      localStorage.removeItem('cartItem'); // Remove from localStorage
    },
  },
});

// Export actions
export const { addToCart, removeToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
