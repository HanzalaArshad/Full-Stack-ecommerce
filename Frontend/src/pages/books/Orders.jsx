import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useGetOrderByEmailQuery } from '../../redux/features/order/ordersApi';

const OrderPage = () => {
    const { currentUser } = useAuth();

    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);

    if (isLoading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin w-8 h-8 border-t-2 border-b-2 border-primary rounded-full"></div>
        </div>
    );

    if (isError) return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-red-500 text-center">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 15h.01M4.293 6.293a1 1 0 011.414 0L12 12.586l6.293-6.293a1 1 0 011.414 1.414L13.414 14l6.293 6.293a1 1 0 01-1.414 1.414L12 15.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 14 4.293 7.707a1 1 0 010-1.414z"></path>
                </svg>
                <p>Error getting orders data</p>
            </div>
        </div>
    );

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Orders</h2>
            {orders.length === 0 ? (
                <div className="text-center text-gray-600 text-lg">No orders found!</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order, index) => (
                        <div key={order._id} className="bg-white shadow-md rounded-lg p-4">
                            <div className="text-sm text-gray-500 mb-2">Order #{index + 1}</div>
                            <h3 className="font-bold text-lg mb-2">Order ID: {order._id}</h3>
                            <p className="text-gray-700"><strong>Name:</strong> {order.name}</p>
                            <p className="text-gray-700"><strong>Email:</strong> {order.email}</p>
                            <p className="text-gray-700"><strong>Phone:</strong> {order.phone}</p>
                            <p className="text-gray-700"><strong>Total Price:</strong> ${order.totalPrice}</p>
                            <h4 className="font-semibold mt-4">Address</h4>
                            <p className="text-gray-700">{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                            <h4 className="font-semibold mt-4">Products</h4>
                            <ul className="list-disc list-inside text-gray-700">
                                {order.productIds.map((productId) => (
                                    <li key={productId}>{productId}</li>
                                ))}
                            </ul>

                            

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrderPage;
  