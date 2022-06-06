import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Description from '../Description/Description';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Description></Description>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;