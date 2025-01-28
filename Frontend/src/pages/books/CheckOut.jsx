import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCreateOrderMutation } from "../../redux/features/order/ordersApi";

const CheckOut = () => {
  const [isChecked, setIsChecked] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

    const navigate=useNavigate()

    const [createOrder,{isLoading,error}]=useCreateOrderMutation();

    const {currentUser}=useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item._id),
      totalPrice: totalPrice,
    };


    try {
      await createOrder(newOrder).unwrap()
      alert("order done Successfully  ")
      navigate("/orders")
    } catch (error) {
      console.error("failed in placing order");
      alert("failed to proceed checkout")
    }


  };

  
  if(isLoading) return <h1>Loading ....</h1>

  return (
    <section className=" bg-white min-h-screen flex items-center justify-center   rounded-lg py-12">
      <div className="max-w-4xl mx-auto p-9 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Cash On Delievery{" "}
        </h2>
        <p className="text-gray-500 mb-4">Total Price: ${totalPrice}</p>
        <p className="text-gray-500 mb-6">
          Items: {cartItems.length > 0 ? cartItems.length : 0}
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>

            <div className="md:col-span-5">
              <label html="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                disabled
                defaultValue={currentUser?.email}
                placeholder="email@domain.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                {...register("phone", { required: true })}
                type="tel"
                id="phone"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
                placeholder="+123 456 7890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">Phone number is required</p>
              )}
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address / Street
              </label>
              <input
                {...register("address", { required: true })}
                type="text"
                id="address"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
                placeholder=""
              />
              {errors.address && (
                <p className="text-red-500 text-sm">Address is required</p>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                {...register("city", { required: true })}
                type="text"
                id="city"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
                placeholder=""
              />
              {errors.city && (
                <p className="text-red-500 text-sm">City is required</p>
              )}
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                {...register("country", { required: true })}
                type="text"
                id="country"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
                placeholder="Country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">Country is required</p>
              )}
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <input
                {...register("state", { required: true })}
                type="text"
                id="state"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
                placeholder="State"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">State is required</p>
              )}
            </div>

            <div>
              <label
                htmlFor="zipcode"
                className="block text-sm font-medium text-gray-700"
              >
                Zipcode
              </label>
              <input
                {...register("zipcode", { required: true })}
                type="text"
                id="zipcode"
                className="mt-1 block w-full px-4 py-2 border rounded-md bg-gray-50"
                placeholder=""
              />
              {errors.zipcode && (
                <p className="text-red-500 text-sm">Zipcode is required</p>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="billing_same"
                onChange={(e) => setIsChecked(e.target.checked)}
                className="form-checkbox"
              />
              <label htmlFor="billing_same" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link className="underline text-blue-600">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link className="underline text-blue-600">Shopping Policy</Link>
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-between  ">
            <div>
              <p className="text-sm text-gray-600 mb-2">Order Summary</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <ul>
                  {cartItems.map((item) => (
                    <li key={item._id} className="flex justify-between mb-2">
                      <span>{item.title}</span>
                      <span>${item.newPrice}</span>
                    </li>
                  ))}

                  <div className="flex justify-end mt-5">
                    <p className="text-gray-600 font-medium">
                      Total Price: ${totalPrice}
                    </p>
                  </div>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                disabled={!isChecked}
                className="bg-primary hover:bg-black text-white font-semibold py-2 px-6 rounded"
              >
                Place an Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckOut;
