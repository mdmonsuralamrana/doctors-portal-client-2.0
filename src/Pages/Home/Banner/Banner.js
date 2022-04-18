import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    marginTop: '15px'
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400,
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sx={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography sx={{ color: 'gray', fontWeight: 'bold', my: 4}} variant="h6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque aspernatur veritatis? Quis recusandae, beatae nihil quae cum nisi voluptate.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED', }} >Get Appointment Now</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '420px', margin: 'auto' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;