import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    // console.log(tour.id);
    return (
        <div>
            <div className='w-full md:w-11/12 xl:w-3/4 mx-auto flex gap-0'>
                <div className={`w-1/2 ${tour.id % 2 === 0 ? 'order-2' : ''}`}>
                    <img className="w-full 2xl:w-[900px] h-96 md:h-72 object-cover rounded-sm hover:opacity-90" src={tour.image} alt={tour.name} />
                </div>
                <div className={`w-1/2 pt-0 md:pt-4 2xl:pt-8 ${tour.id % 2 === 0 ? 'text-right pr-2 md:pr-5 2xl:pr-10' : 'text-left pl-2 md:pl-5 2xl:pl-10'}`}>
                    <h2 className='text-2xl lg:text-3xl font-medium text-emerald-700 pb-1 md:pb-2 lg:pb-4'>{tour.name}</h2>
                    <p className=' font-normal text-stone-600 pb-1 lg:pb-2 pl-1'>{tour.description}</p>
                    <div className={`font-normal text-emerald-600 pb-2 lg:pb-4 pl-1 flex flex-wrap items-center ${tour.id % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <p>Tour Guide Charge:</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-400 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='font-medium text-orange-400'>{tour.price}Tk</span>
                    </div>
                    <div className={`w-40 lg:w-48 text-center py-2 rounded-sm bg-emerald-700 text-white hover:border-2 hover:border-emerald-400 
                    hover:text-emerald-700 hover:bg-emerald-50 font-medium hover:cursor-pointer ${tour.id % 2 === 0 ? 'float-right' : 'float-left'}`}>
                        <Link to='/checkout'>Hire for Travel Guide</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;