import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import exceptionalCareImg from '../../../images/treatment.png'

const ExceptionalCare = () => {
    return (
        <Box style={{marginTop:'100px'}} sx={{ flexGrow: '1' }} mt={4}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={5}>
                    <img
                        style={{ width: 370, borderRadius: '5px' }}
                        src={exceptionalCareImg} alt="" />
                </Grid>
                <Grid sx={{ width:370, textAlign: 'left', }} px={5} mt={4} item xs={12} sm={12} md={7}>
                    <Typography variant="h3">Exceptional Dental <br /> Care, On Your Terms </Typography>
                    <Typography variant="subtitle1" mt={3}> It is a long established fact that a reader will be distracted by the readable content of a page when looking its page layout. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam minima ullam ducimus, beatae unde aperiam saepe dolores consectetur. Quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eligendi nisi nam, totam quos, tenetur natus eos laboriosam repellendus adipisci officia, nihil architecto sit quis? Adipisci, ipsa autem. Tempore impedit reprehenderit rem quos, minima maiores inventore doloribus, praesentium natus ea suscipit neque, architecto esse?</Typography>
                    <Grid mt={2}>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ExceptionalCare; 