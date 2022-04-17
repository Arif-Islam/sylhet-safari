import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    // console.log(tour.id);
    return (
        <div>
            <div className='w-full md:w-11/12 xl:w-3/4 mx-auto flex'>
                <div className={`w-1/2 ${tour.id % 2 === 0 ? 'order-2' : ''}`}>
                    <img className="w-full 2xl:w-[900px] h-96 md:h-72 object-cover rounded-sm hover:opacity-90" src={tour.image} alt={tour.name} />
                </div>
                <div className={`w-1/2 pt-4 2xl:pt-8 ${tour.id % 2 === 0 ? 'text-right pr-5 2xl:pr-10' : 'text-left pl-5 2xl:pl-10'}`}>
                    <h2 className='text-2xl lg:text-3xl font-medium text-emerald-700 pb-2 lg:pb-4'>{tour.name}</h2>
                    <p className=' font-normal text-stone-600 pb-2 lg:pb-4 pl-1'>{tour.description}</p>
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