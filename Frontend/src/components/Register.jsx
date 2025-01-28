import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const { registerUser,signInwithGoogle } = useAuth();
  const navigate=useNavigate()

  
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email.trim(), data.password);
      setMessage(""); // Clear any previous error
      alert("login successfull ")
      navigate("/login")
} 
        catch (error) {
      console.error(error); // Log the actual error for debugging
      setMessage("Please provide a valid Email ID");
      console.error(error)
    }
  };
  

  const handleGoogleSignIn = async() => {
    try {
      await signInwithGoogle();
      alert("Login successful");
      navigate('/');

    } catch (error) {
      console.error(error);
      alert("Google Sign-In failed. Please try again.");
    }  };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold">Register Please</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-1 mt-8 ml-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              id="email"
              aria-label="Enter your email address"
              placeholder="Enter Your Email Address"
              className="shadow appearance-none w-full px-3 py-3 rounded-lg leading-tight focus:outline-none focus:shadow-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            {message && <p className="text-red-500 text-sm">{message}</p>}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-md font-semibold mb-1 mt-8 ml-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              name="password"
              id="password"
              aria-label="Enter your password"
              placeholder="Enter Your Password"
              className="shadow appearance-none w-full px-3 py-3 rounded-lg leading-tight focus:outline-none focus:shadow-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#212678ad] hover:bg-black text-md font-primary font-semibold text-white rounded px-6 py-1"
            >
              Register
            </button>
          </div>
        </form>

        <p className="align-baseline font-medium mt-4 text-sm">
          Have an account? Please{" "}
          <NavLink to="/login" className="text-blue-500">
            Login
          </NavLink>
        </p>

        <div>
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap border-2 justify-center mt-3 px-3 py-1 bg-[#412face6] hover:bg-black text-white font-primary text-md font-semibold items-center gap-3"
          >
            <FaGoogle className="text-blue-400" /> SignIn with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
