import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/getBaseUrl';

const  baseQuery = fetchBaseQuery({
  baseUrl: `${getBaseUrl()}/api/books`,
  credentials: 'include',
  prepareHeaders: (Headers) => {
      const token =  localStorage.getItem('token');
      if(token) {
          Headers.set('Authorization', `Bearer ${token}`);
      }
      return Headers;
  }
})



const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery,

  tagTypes: ['Books'],
  endpoints: (builder) => ({
    fetchAllBooks: builder.query({
      query: () => '/',
      providesTags: ['Books'],
    }),
    fetchbookbyId:builder.query({
      query:(id)=> `/${id}`,
      providesTags:(results,error,id)=>[{type:'Books',id}]
    }),
    // post request we use Mutation
    addBook:builder.mutation({
      query:(newBook)=>({
        url:`/create-book`,
        method:'POST',
        body:newBook

      }),
      invalidatesTags:['Books']
    }),

    updateBook:builder.mutation({
      query:({id,...rest})=>({
         url:`//edit/${id}`,
         method:'PUT',
         body:rest,
         headers:{
          'content-type':'application/json'
         }
      }),
      invalidatesTags:['Books']
        
        
      
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
          url: `/${id}`,
          method: "DELETE"
      }),
      invalidatesTags: ["Books"]
  })

  }),
});

export const { useFetchAllBooksQuery,useFetchbookbyIdQuery,useAddBookMutation,useUpdateBookMutation,useDeleteBookMutation} = booksApi;

export default booksApi;
