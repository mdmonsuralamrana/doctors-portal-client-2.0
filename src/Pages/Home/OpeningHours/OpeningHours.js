import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const OpeningHours = ({ icons, data }) => {
    const { name, description } = data;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{ border: '1px solid gray', width:'90%', borderRadius:'5px', px: 1 }} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                    image={icons.AccessTimeIcon}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default OpeningHours;