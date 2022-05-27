import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleModalOpen = () => setOpenModal(true);
    const handleModalClose = () => setOpenModal(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 3 }} >
                    <Typography sx={{ color: 'info.light', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom >
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleModalOpen} variant="contained"> BOOK APPOINTMENT </Button>
                </Paper>
            </Grid>
            <BookingModal date={date} booking={booking} openModal={openModal} handleModalClose={handleModalClose} />
        </>
    );
};

export default Booking;

