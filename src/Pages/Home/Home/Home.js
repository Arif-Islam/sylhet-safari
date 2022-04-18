import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import Description from '../Description/Description';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Description></Description>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;