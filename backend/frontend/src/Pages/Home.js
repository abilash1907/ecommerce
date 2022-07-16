import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Navbars from '../components/Navbars';

const Home = () => {
    return (
        <div>
            <Navbars/>
            <Banner/>
            <Cards/>
        </div>
    );
}

export default Home;
