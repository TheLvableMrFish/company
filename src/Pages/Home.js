import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer';

import Logo from '../components/Logo';
import About from '../components/About';
import Gallery from '../components/Gallery';

const Home =()=>{
    return(
        <>
            <Header />
            <Logo />
            <About />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home