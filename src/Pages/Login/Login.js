import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import logo from '../../images/logo_3-removebg-preview.png';
import { Link } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs"

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center mt-10 flex-col'>
                <div className='mb-4'>
                    <img className='w-48' src={logo} alt="" />
                </div>
                <form className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' />
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' /> 
                    <input className='bg-emerald-700  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-emerald-600' type="submit" value="Log In" />
                </form>
                <div className='text-emerald-700 pt-3 font-medium'>
                    <Link to='/signup'>Don't have an account?</Link>
                </div>
                <div className='h-14'>
                    <p></p>
                </div>
                <hr className='w-80 ' />
                <div className='flex bg-emerald-700 items-center mt-6 hover:cursor-pointer hover:bg-emerald-600 rounded-sm'>
                    <div className='text-stone-100 p-2 rounded-full'>
                        <BsGoogle className='w-6 h-6 '></BsGoogle>
                    </div>
                    <div className='pr-2'>
                        <p className='text-stone-100 font-normal'>Sign in with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;