import React, { useEffect, useRef, useState } from 'react';
import image1 from '../../../Slider Images/1.jpg';
import image2 from '../../../Slider Images/2.jpg';
import image3 from '../../../Slider Images/3.jpg';
import image4 from '../../../Slider Images/4.jpg';
import image5 from '../../../Slider Images/5.jpg';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';
import './Carousel.css';
// import Typewriter from 'typewriter-effect';

const bannerImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
];

let count = 0;
let slideInterval;

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-animation');
    };

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);

        startSlider();
        return () => {
            pauseSlider();
        };
    }, []);

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleOnNextClick();
        }, 4000)
    };

    const pauseSlider = () => {
        clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
        count = (count + 1) % bannerImages.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-animation');
    };

    const handleOnPrevClick = () => {
        const bannersLength = bannerImages.length;
        count = (currentIndex + bannersLength - 1) % bannersLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-animation');
    };

    return (
        <div ref={slideRef} className='w-full select-none relative'>
            <div className='aspect-w-16 aspect-h-9'>
                <img className='w-full h-[511px] object-cover' src={bannerImages[currentIndex]} alt="" />
            </div>

            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button className='bg-black text-white p-1 rounded-full bg-oppacity-50 cursor-pointer hover:bg-oppacity-100 transition' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}></AiOutlineVerticalRight></button>
                <button className='bg-black text-white p-1 rounded-full bg-oppacity-50 cursor-pointer hover:bg-oppacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}></AiOutlineVerticalLeft></button>
            </div>

            {/* <div className='text-4xl font-medium text-stone-100 absolute w-full top-5 text-center'>
                <Typewriter
                    // onInit={(typewriter) => {
                    //     typewriter.typeString('Best Travel Guide in Sylhet!')
                    //         .callFunction(() => {
                    //             console.log('String typed out!');
                    //         })
                    //         .pauseFor(2500)
                    //         .deleteAll()
                    //         .callFunction(() => {
                    //             console.log('All strings were deleted');
                    //         })
                    //         .start();
                    // }}
                    options={{
                        strings: ['Best Travel Guide in Sylhet'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div> */}

        </div>

    );
};

export default Carousel;