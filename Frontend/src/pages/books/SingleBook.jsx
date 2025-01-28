import React from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useFetchbookbyIdQuery } from '../../redux/features/Books/BookApi';
import { addToCart } from '../../redux/features/cart/cartSlice';
import getImgUrl from '../../utils/getImgUrl';

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchbookbyIdQuery(id);
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <div className="text-center p-4">Loading...</div>;
    if (isError) return <div className="text-center p-4 text-red-500">Error loading book info</div>;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl w-full p-6 shadow-lg rounded-lg bg-white">
                <h1 className="text-3xl font-bold mb-6 text-center">{book.title}</h1>

                <div className='flex flex-col md:flex-row items-center'>
                    <img
                        src={`${getImgUrl(book.coverImage)}`}
                        alt={book.title}
                        className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-lg mx-auto"
                    />

                    <div className='md:ml-8 md:w-1/2'>
                        {/* <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p> */}
                        <p className="text-gray-700 mb-4">
                            <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700 mb-4 capitalize">
                            <strong>Category:</strong> {book?.category}
                        </p>
                        <p className="text-gray-700 mb-6"><strong>Description:</strong> {book.description}</p>

                        <button 
                          onClick={() => handleAddToCart(book)} 
                          className="btn-primary px-6 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-2 mx-auto">
                            <FiShoppingCart className="text-xl" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
 