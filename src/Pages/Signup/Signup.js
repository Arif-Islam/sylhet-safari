import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_3-removebg-preview.png';
import Navbar from '../../Shared/Navbar/Navbar';

const Signup = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex items-center justify-center mt-10 flex-col'>
                <div className='mb-4'>
                    <img className='w-52' src={logo} alt="" />
                </div>
                <form className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="text" id="" placeholder='Name' />
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' />
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' />
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="confirmPassword" id="" placeholder='Confirm Password' />
                    <input className='bg-emerald-700  font-medium text-stone-200 rounded h-10 hover:cursor-pointer hover:bg-emerald-600' type="submit" value="Sign Up" />
                </form>
                <div className='text-emerald-700 pt-3 font-medium'>
                    <Link to='/login'>Already have an account</Link>
                </div>
                <div className='h-14'>
                    <p></p>
                </div>
                <hr className='w-80 bg-emerald-700' />
            </div>
        </div>
    );
};

export default Signup;