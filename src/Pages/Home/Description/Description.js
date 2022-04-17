import React from 'react';

const Description = () => {
    return (
        <div className='bg-emerald-700'>
            <div className='w-11/12 lg:w-4/5 2xl:w-3/4 mx-auto'>
                <h1 className='text-7xl font-bold text-white pt-12 pb-5'>Welcome to Sylhet!</h1>
                <p className="text-2xl font-normal text-white pl-2 pb-4">A City full of peace, love and natural beauty</p>
                <p className='text-lg font-light text-white pl-2 pb-4'>All of our country is abundant with greenery and riverside scenery, but none compares to Sylhet. From spinning hills covered in deep green tea gardens and dazzling paddy fields to olive marshlands and protected woods, Sylhet seemed to have been endowed with every shade of green one could imagine. </p>
                <div className="">
                    <button className="ml-2 text-emerald-700 text-lg font-medium mb-14 bg-white px-6 py-2 border-2 border-white hover:border-emerald-200 rounded-sm hover:text-white hover:bg-emerald-700">Popular Tours</button>
                </div>
            </div>
        </div>
    );
};

export default Description;