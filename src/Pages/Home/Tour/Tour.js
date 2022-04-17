import React from 'react';

const Tour = ({ tour }) => {
    return (
        <div>
            <div className='w-full lg:w-11/12 2xl:w-3/4 mx-auto'>
                <div>
                    <img src={tour.image} alt={tour.name} />
                </div>
                <div>
                    <h2>{tour.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Tour;