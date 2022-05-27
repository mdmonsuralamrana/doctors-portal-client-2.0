import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BookingModal = ({ handleModalClose, openModal, booking, date }) => {
    const { name, time } = booking;

    const handleSubmitBookingForm = e => {
        alert('submitBookingForm')

        handleModalClose();
        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleSubmitBookingForm}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1, }}
                            id="outlined-basic"
                            label={time}
                            variant="outlined"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1, }}
                            id="outlined-basic"
                            label="Your Name"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1, }}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1, }}
                            id="outlined-basic"
                            label="Phone Number"
                            variant="outlined"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1, }}
                            id="outlined-basic"
                            label={date.toDateString()}
                            variant="outlined"
                        />
                        <Button type="submit" variant="contained">SUBMIT</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;