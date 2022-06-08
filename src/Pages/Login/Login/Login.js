import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.png'

const Login = () => {
    const [loginData, setLogInData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLogInData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert('submit')
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 18 }} item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div"> Login </Typography>

                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 2 }} variant="contained" type="submit">Login</Button>
                    </form>
                    <NavLink style={{textDecoration: 'none'}} to="/register">
                        <Button> new user? Please Register </Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;