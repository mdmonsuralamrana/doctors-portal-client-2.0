import { Grid } from '@mui/material';
import React from 'react';

const Booking = ({booking}) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            {booking.name}
        </Grid>
    );
};

export default Booking;