import React from 'react'
import Navbar from '../components/Navigation/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';

const Layout = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            {/* content */}
            <Outlet />
            {/* footer */}
            <Footer />


        </div>
    )
}

export default Layout