import React from 'react';
import myPhoto from '../../images/myself.jpg';

const About = () => {
    return (
        <div className='flex'>
            <div className='flex flex-col lg:flex-row md:w-4/5 2xl:w-4/6 mx-auto items-center justify-between gap-10'>
                <div className=' space-y-4 order-2 lg:order-first w-11/12 md:w-1/2 mx-auto'>
                    <h1 className='font-semibold text-center md:text-left font-kanit text-3xl xl:text-4xl 2xl:text-5xl text-emerald-600'>MD Ariful Islam</h1>
                    <p className='text-justify px-6 md:px-0 text-gray-800'>Graduation's over. It's high time for me to lift my career upwards. I've been sincerely doing Programming Hero course by Jhankar Mahbub and also the Algo Expert course and I'm constantly trying to build myself as a good Web Developer. I'm looking forward to getting a job within a month or two.
                    </p>

                </div>
                <div className='w-11/12 md:w-1/2 mx-auto mt-10'>
                    <img className='rounded w-[400px]' src={myPhoto} alt="photo of md ariful islam" />
                </div>
            </div>
        </div>
    );
};

export default About;