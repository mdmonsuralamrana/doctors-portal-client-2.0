import { Container, Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonix',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '08.30 AM - 09.30 AM',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '09.30 AM - 10.00 AM',
        space: 5,
    },
    {
        id: 4,
        name: 'Teeth Orthodonix',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Cosmetic Dentistry',
        time: '08.30 AM - 09.30 AM',
        space: 8,
    },
    {
        id: 6,
        name: 'Teeth Cleaning',
        time: '09.30 AM - 10.00 AM',
        space: 5,
    },
    {
        id: 7,
        name: 'Teeth Orthodonix',
        time: '08.00 AM - 09.00 AM',
        space: 10,
    },
    {
        id: 8,
        name: 'Cosmetic Dentistry',
        time: '08.30 AM - 09.30 AM',
        space: 8,
    },
    {
        id: 9,
        name: 'Teeth Cleaning',
        time: '09.30 AM - 10.00 AM',
        space: 5,
    },

]

const AvailableAppointments = ({ date }) => {
    return (
        <Container>
            <h2>availableAppointments on {date.toDateString()} </h2>

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking}/>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;