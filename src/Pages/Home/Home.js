import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Contact from './Contact/Contact';
import GoWithMobileApp from './GoWithMobileApp/GoWithMobileApp';
import Reviews from './Reviews/Reviews';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <GoWithMobileApp></GoWithMobileApp>
            <Contact></Contact>
        </div>
    );
};

export default Home;