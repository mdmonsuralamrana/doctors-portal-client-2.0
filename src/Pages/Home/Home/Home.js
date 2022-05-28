import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ExceptionalCare from '../ExceptionalCare/ExceptionalCare';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import OpeningHoursMain from '../OpeningHours/OpeningHoursMain';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <OpeningHoursMain />
            <Services />
            <ExceptionalCare />
            <AppointmentBanner />
        </div>
    );
};

export default Home;