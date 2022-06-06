import React from 'react';
import image1 from '../../../Slider Images/1.jpg';
import image2 from '../../../Slider Images/2.jpg';
import image3 from '../../../Slider Images/3.jpg';
import image4 from '../../../Slider Images/4.jpg';
import image5 from '../../../Slider Images/5.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay infiniteLoop interval={5000} showThumbs={false} showStatus={false}>
                <div>
                    <img className='w-full h-[511px] object-cover' src={image1} />
                </div>
                <div>
                    <img className='w-full h-[511px] object-cover' src={image2} />
                </div>
                <div>
                    <img className='w-full h-[511px] object-cover' src={image3} />
                </div>
                <div>
                    <img className='w-full h-[511px] object-cover' src={image4} />
                </div>
                <div>
                    <img className='w-full h-[511px] object-cover' src={image5} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;