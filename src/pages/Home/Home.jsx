import React from 'react';
import Navbar from './navbar/Navbar';
import Hero from './HeroSection/Hero';
import Services from './Services/Services';
import About from './about/About';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;