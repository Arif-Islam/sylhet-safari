import React, { useEffect, useRef, useState } from 'react';
import banner1 from '../../../Slider Images/1.jpg';
import banner2 from '../../../Slider Images/2.jpg';
import banner3 from '../../../Slider Images/3.jpg';
import banner4 from '../../../Slider Images/4.jpg';
import banner5 from '../../../Slider Images/5.jpg';
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from 'react-icons/ai';
import './Carousel.css';

const bannerImages = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
];

let count = 0;
let slideInterval;

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
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
        slideRef.current.classList.add('fade-anim');
    };

    const handleOnPrevClick = () => {
        const bannersLength = bannerImages.length;
        count = (currentIndex + bannersLength - 1) % bannersLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    };

    return (
        <div ref={slideRef} className='w-full select-none relative'>
            <div className='aspect-w-16 aspect-h-9'>
                <img className='w-full h-[455px] object-cover' src={bannerImages[currentIndex]} alt="" />
            </div>

            <div className='absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center'>
                <button className='bg-black text-white p-1 rounded-full bg-oppacity-50 cursor-pointer hover:bg-oppacity-100 transition' onClick={handleOnPrevClick}><AiOutlineVerticalRight size={30}></AiOutlineVerticalRight></button>
                <button className='bg-black text-white p-1 rounded-full bg-oppacity-50 cursor-pointer hover:bg-oppacity-100 transition' onClick={handleOnNextClick}><AiOutlineVerticalLeft size={30}></AiOutlineVerticalLeft></button>
            </div>

            <div className='absolute w-full '>
                <div className="xl:text-5xl text-xl font-bold uppercase text-green-600 mt-10">
                    <AutoTyping
                        active // <boolean>
                        textRef="find your dream car here" // <string>
                        writeSpeed={100} // <number>
                        deleteSpeed={40} // <number>
                        delayToWrite={500} // <number>
                        delayToDelete={3000} // <number>
                    />
                    <BlinkCursor
                        active // <boolean>
                        blinkSpeed={500} // <number>
                    />
                </div>
            </div>

        </div>

    );
};

export default Carousel;