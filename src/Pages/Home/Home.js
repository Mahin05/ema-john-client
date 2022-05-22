import React from 'react';
import Banner from './Banner';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <Banner></Banner>
            <Tools></Tools>
        </div>
    );
};

export default Home;