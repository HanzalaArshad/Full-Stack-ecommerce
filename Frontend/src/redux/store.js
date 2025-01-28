import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice"
import booksApi from './features/Books/BookApi'
import ordersApi from './features/order/ordersApi'
export const store = configureStore({
  reducer:{
    cart:cartReducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
},

middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(booksApi  .middleware,ordersApi.middleware),

})
