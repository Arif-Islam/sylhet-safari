import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo_3-removebg-preview.png';
import Navbar from '../../Shared/Navbar/Navbar';
import { BsGoogle } from "react-icons/bs";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setconfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setconfirmPassword(event.target.value);
    }
    if (user || googleUser) {
        navigate('/');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two passwords didn't match!");
            console.log(error);
            return;
        }
        if (password.length < 6) {
            setError("Password must be 6 characters or longer!");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    
    return (
        <div>
            
            <div className='flex items-center justify-center mt-10 flex-col'>
                <div className='mb-4'>
                    <img className='w-48' src={logo} alt="" />
                </div>
                <form onSubmit={handleCreateUser} className='flex flex-col space-y-5'>
                    <input className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="text" name="text" id="" placeholder='Name' />

                    <input onBlur={handleEmailBlur} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' required />

                    <input onBlur={handlePasswordBlur} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />

                    <input onBlur={handleConfirmPasswordBlur} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="confirmPassword" id="" placeholder='Confirm Password' required />

                    <input className='bg-emerald-700  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-emerald-600' type="submit" value="Sign Up" />
                </form>

                <div className='text-emerald-700 pt-3 font-medium'>
                    <Link to='/login'>Already have an account?</Link>
                </div>
                <div className='h-6 pt-3'>
                    <p className='font-medium' style={{ color: 'red' }}>{error || googleError?.message}</p>
                </div>
                {
                    loading && <p>Loading...</p>
                }
                {
                    googleLoading && <p>Loading...</p>
                }
                <hr className='w-80 mt-3' />
                <div onClick={() => signInWithGoogle()} className='flex bg-emerald-700 items-center mt-6 hover:cursor-pointer hover:bg-emerald-600 rounded-sm'>
                    <div className='text-stone-100 p-2 rounded-full'>
                        <BsGoogle className='w-6 h-6 '></BsGoogle>
                    </div>
                    <div className='pr-2'>
                        <p className='text-stone-100 font-normal'>Sign up with Google</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;