import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
// import OpeningHours from '../OpeningHours/OpeningHours';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            {/* <OpeningHours /> */}
            <Services />
            <AppointmentBanner />
        </div>
    );
};

export default Home;