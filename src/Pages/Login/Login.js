import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import logo from '../../images/logo_3-removebg-preview.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, PasswordReseterror] = useSendPasswordResetEmail(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user || googleUser) {
        navigate(from, { replace: true });
    }
    const handleLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address!');
        }
    }

    return (
        <div>

            <div className='flex items-center justify-center mt-10 flex-col'>
                <div className='mb-4'>
                    <img className='w-48' src={logo} alt="" />
                </div>
                <form onSubmit={handleLogIn} className='flex flex-col space-y-5'>
                    <input onBlur={handleEmailBlur} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="email" name="email" id="" placeholder='Email' required />

                    <input onBlur={handlePasswordBlur} className='w-80 h-12 bg-gray-100 rounded pl-4 text-stone-700 focus:outline-none' type="password" name="password" id="" placeholder='Password' required />

                    <input className='bg-emerald-700  font-medium text-stone-100 rounded h-10 hover:cursor-pointer hover:bg-emerald-600' type="submit" value="Log In" />
                </form>

                <div className='flex w-80'>
                    <div className='text-emerald-700 pt-3 font-medium mr-9'>
                        <Link to='/signup'>New to Sylhet Safari?</Link>
                    </div>
                    <div className='text-red-600 pt-3'>
                        <button onClick={resetPassword} className='font-medium'>Forgot Password?</button>
                    </div>
                </div>
                <div className='h-6 pt-3'>
                    <p className='font-medium' style={{ color: 'red' }}>{error?.message || googleError?.message}</p>
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
                        <p className='text-stone-100 font-normal'>Sign in with Google</p>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;