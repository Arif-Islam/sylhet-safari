import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
        </div>
    );
};

export default Home;