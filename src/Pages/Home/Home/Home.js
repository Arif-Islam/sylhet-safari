import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import Description from '../Description/Description';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Description></Description>
            <Services></Services>
        </div>
    );
};

export default Home;