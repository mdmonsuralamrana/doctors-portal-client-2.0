import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Container, Grid } from '@mui/material';
import OpeningHours from './OpeningHours';

const icons = {
    AccessTimeIcon,
    LocationOnIcon,
    WifiCalling3Icon
}

const data = [
    {
        name: 'Opening Hours',
        description: 'The dental service is open in 24/5. accept Friday & Saturday',
    },
    {
        name: 'Visit Our Location',
        description: 'Mohipal Bus Stand, Feni',
    },
    {
        name: 'For Contact',
        description: '+880 1843 899830',
    },
]

const OpeningHoursMain = () => {
    return (
        <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {data.map(data =>
                    <OpeningHours
                        icons={icons}
                        key={data.name}
                        data={data}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default OpeningHoursMain;