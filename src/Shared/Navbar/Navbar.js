import React, { useState } from 'react';
import './Navbar.css';
import logo1 from '../../images/logo-removebg-preview.png';
import logo from '../../images/logo.png';
import logo2 from '../../images/logo 2.png';
import logo3 from '../../images/logo_2-removebg-preview.png';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { XIcon, MenuIcon } from '@heroicons/react/solid'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [user] = useAuthState(auth);
    console.log(user);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');
    }

    return (
        <div className='bg-emerald-700 sticky top-0 z-20'>
            <div className='md:flex items-center justify-between w-full md:w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto '>
                <div className='flex justify-between items-center w-4/5 mx-auto'>
                    <Link to='/home'>
                        <img className='w-24' src={logo3} alt="site logo" />
                    </Link>
                    {showNav ?
                        <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                            <XIcon className='md:hidden block cursor-pointer w-8 h-8 text-emerald-700 pl-1'>
                            </XIcon>
                        </div>
                        :
                        <div onClick={() => setShowNav(!showNav)} className='bg-white w-9 rounded'>
                            <MenuIcon onClick={() => setShowNav(!showNav)} className='md:hidden block cursor-pointer w-8 h-8 text-emerald-700 pl-1'></MenuIcon>
                        </div>
                    }
                </div>
                <div className={(showNav ? "top-20" : "-top-full") + " fixed md:static md:flex bg-emerald-700 h-[230px] md:h-auto rounded w-full space-y-3 md:space-y-0 items-center md:w-auto md:space-x-5 transition-top duration-500 ease-in-out uppercase font-semibold text-stone-200 text-center"}>
                    <div className='pt-3 md:pt-0 hover:text-lime-400'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='hover:text-lime-400'>
                        <NavLink to='/checkout'>Checkout</NavLink>
                    </div>
                    <div className='hover:text-lime-400'>
                        <NavLink to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className='hover:text-lime-400'>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    {
                        user ? '' :
                            <div className='hover:text-lime-400'>
                                <NavLink to='/login'>Login</NavLink>
                            </div>
                    }
                    {
                        user ? <div onClick={handleSignOut} className='space-x-1 rounded-full md:bg-green-900 md:hover:bg-green-800 md:px-6 md:py-2 font-medium text-stone-100'>
                            <NavLink to='/login'>Sign</NavLink>
                            <NavLink to='/login'>out</NavLink>
                        </div> :
                            <div className='space-x-1 rounded-full md:bg-green-900 md:hover:bg-green-800 md:px-6 md:py-2 font-medium text-stone-100'>
                                <NavLink to='/signup'>Sign</NavLink>
                                <NavLink to='/signup'>up</NavLink>
                            </div>
                    }




                </div>

            </div>
        </div>
    );
};

export default Navbar;