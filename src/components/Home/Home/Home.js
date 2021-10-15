import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;