import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Services = () => {
    const [tours, setTours] = useState([]);
    useEffect( () => {
        fetch('tours.json')
        .then(res => res.json())
        .then(data => setTours(data));
    },[]);

    return (
        <div className='bg-emerald-50 pb-10' id='services'>
            <h1 className='text-center font-semibold text-2xl text-emerald-700 pt-14 pb-2 border-b-2 border-emerald-700 mb-20'>Sylhet Popular Tours</h1>
            {
                tours.map(tour => <Tour 
                    key={tour.id} 
                    tour={tour}
                ></Tour>)
            }
        </div>
    );
};

export default Services;