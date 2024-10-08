import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <main className='bg-dark-blue px-6 h-screen flex flex-col gap-14'>
      <div className='flex justify-center align-center pt-14'>
        <img src={logo} alt="logo" />
      </div>
      <div className='bg-navy-blue px-6 rounded-lg lg:max-w-[25rem] mx-auto'>
        <h3 className='text-white text-3xl font-light tracking-tighter leading-10 pt-6 pb-10'>Login</h3>
        <form>
          <input className='block w-full bg-transparent outline-none font-light border-b-2 placeholder-opacity-50 focus:border-b-white pb-4 text-white  focus:caret-accent border-violet-blue placeholder-white text-base leading-5' type="email" name="email" id="email" placeholder='Email address' />
          <input className='block w-full bg-transparent outline-none font-light border-b-2 placeholder-opacity-50 focus:border-b-white pb-4 pt-6 text-white  focus:caret-accent border-violet-blue placeholder-white text-base leading-5' type="password" name="password" id="password" placeholder='Password' />
          <button type="submit" className='bg-accent w-full mt-6 text-white text-base text-center font-light leading-5 px-16 py-4 rounded-md'>Login to your account</button>
        </form>
        <h5 className='pt-6 pb-8 text-center text-white mx-auto text-base leading-5 font-light'>Don't have an account? <Link to ="/signup" className='text-accent'>Sign up</Link> </h5>
      </div>
    </main>
  )
}

export default Login;




