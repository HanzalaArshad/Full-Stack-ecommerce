import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const initialState={
      cartItem:[],
} 

const cartSlice=createSlice({
  name:"cart",
  initialState:initialState,
  reducers:{
    addToCart:(state,action)=>{
      const existingItem=state.cartItem.find(item=> item._id===action.payload._id);
      if(!existingItem){
        state.cartItem.push(action.payload)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item Added To Cart",
          showConfirmButton: false,
          timer: 750
        });      } else{
          Swal.fire({
            title: "Items Already exists in the Cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ok!"
          })
      }


    },
    removeToCart:(state,action)=>{
      state.cartItem=state.cartItem.filter(item=> item._id!=action.payload._id)
    },
    clearCart:(state)=>{
      state.cartItem=[]
    }
  }

})


// export actions

export const {addToCart,removeToCart,clearCart}=cartSlice.actions;

export default cartSlice.reducer;
