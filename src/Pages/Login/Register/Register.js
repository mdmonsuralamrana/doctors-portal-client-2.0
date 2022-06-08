import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../images/login.png'


const Register = () => {
    const [loginData, setLogInData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLogInData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.retypePassword){
            alert("your password didn't match")
        }
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 18 }} item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div"> Register </Typography>

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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Retype Password"
                            type="password"
                            name="retypePassword"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 2 }} variant="contained" type="submit">Register</Button>
                    </form>
                    <NavLink style={{ textDecoration: 'none' }} to="/login">
                        <Button> Already Registered ? Please Login </Button>
                    </NavLink>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', }} src={loginImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;