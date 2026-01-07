import React from 'react';
import Home from '../pages/Home/Home';
import Navbar from '../pages/Home/navbar/Navbar';
import Footer from '../pages/Home/Footer/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;