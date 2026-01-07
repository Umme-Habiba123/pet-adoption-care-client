import React from 'react';
import Navbar from './navbar/Navbar';
import Hero from './HeroSection/Hero';
import Services from './Services/Services';
import About from './about/About';
import AdoptionInfo from './AdoptionInfo/AdoptionInfo';
import FAQSection from '../FAQ/FAQSection/FaqSection';
import Footer from './Footer/Footer';
import RescueFamily from './RescueFamily/RescueFamily';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <About></About>
            <AdoptionInfo></AdoptionInfo>
            <FAQSection></FAQSection>
            <RescueFamily></RescueFamily>
            <Footer></Footer>
        </div>
    );
};

export default Home;