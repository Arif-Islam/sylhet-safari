import React from 'react';
import './Carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const images = [
    {
        id: 1,
        img: '/src/images/1.jpg',
    },
    {
        id: 2,
        img: '/src/images/2.jpg',
    },
    {
        id: 3,
        img: '/src/images/3.jpg',
    },
    {
        id: 4,
        img: '/src/images/4.jpg',
    },
    {
        id: 5,
        img: '/src/images/5.jpg',
    }
]
const Carousel = () => {

    return (
        <div>
            <div className='relative'>
                <Slider infinite="true" autoplay="10000" classNames="buttonDisabled previousButton disabled "
                    className="slider-wrapper"
                    previousButton=""
                    nextButton="">
                    {
                        images.map(image => (
                            <div
                                className="absolute top-0 w-full"
                                key={image.id}
                                style={{
                                    backgroundImage: `url(${image.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    height: '555px',
                                }}
                            >
                                
                            </div>
                        ))
                    }
                </Slider>
                <div>
                    <span
                        id="blackOverlay"
                        className="w-full absolute bg-center opacity-20 bg-black top-0"
                        style={{ height: '500px' }}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Carousel;