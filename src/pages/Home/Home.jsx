import React from 'react';
import Hero from './HeroSection/Hero';
import Services from './Services/Services';
import About from './about/About';
import AdoptionInfo from './AdoptionInfo/AdoptionInfo';
import FAQSection from '../FAQ/FAQSection/FaqSection';
import RescueFamily from './RescueFamily/RescueFamily';


const Home = () => {
    return (
        <div>
          
            <Hero></Hero>
            <Services></Services>
            <About></About>
            <AdoptionInfo></AdoptionInfo>
            <FAQSection></FAQSection>
            <RescueFamily></RescueFamily>
           
        </div>
    );
};

export default Home;