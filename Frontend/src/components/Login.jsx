import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {login,signInwithGoogle}=useAuth()
  const navigate=useNavigate()

  const onSubmit = async(data) => {
     try {
      await login(data.email.trim(),data.password);
      setMessage("")  
      navigate("/")
       
     } catch (error) {
       console.error(error);
       setMessage("You are Entering Wrong Credentials")
     }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInwithGoogle();
      alert("Login successful");
      navigate('/');

    } catch (error) {
      console.error(error);
      alert("Google Sign-In failed. Please try again.");
    }
  };


  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
      <div className='w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold'>Login Please</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-md font-semibold mb-1 mt-8 ml-1' htmlFor='email'>Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type='email'
              name='email'
              id='email'
              placeholder='Enter Your Email Address'
              className='shadow appearance-none w-full px-3 py-3 rounded-lg leading-tight focus:outline-none focus:shadow-lg'
            />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-md font-semibold mb-1 mt-8 ml-1' htmlFor='password'>Password</label>
            <input
              {...register('password', { required: 'Password is required' })}
              type='password'
              name='password'
              id='password'
              placeholder='Enter Your Password'
              className='shadow appearance-none w-full px-3 py-3 rounded-lg leading-tight focus:outline-none focus:shadow-lg'
            />
            {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
          </div>

          {message && <p className='text-red-500 mt-2 mb-2 text-md font-semibold'>You are entering incorrect credentials</p>}

          <div className='text-center'>
            <button type='submit' className='bg-[#212678ad] hover:bg-black text-md font-primary font-semibold text-white rounded px-6 py-1'>
              Login
            </button>
          </div>
        </form>

        <p className='align-baseline font-medium mt-4 text-sm'>
          Haven't an account? Please <NavLink to="/register" className='text-blue-500'>Register</NavLink>
        </p>

        <div>
          <button onClick={handleGoogleSignIn} className='w-full flex flex-wrap border-2 justify-center mt-3 px-3 py-1 bg-[#412face6] hover:bg-black text-white font-primary text-md font-semibold items-center gap-3'>
            <FaGoogle className='text-blue-400' /> SignIn with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
