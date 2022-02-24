import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {

    const userState = useSelector(state => state.user);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/">
                        <Button edge="start" variant="h6" sx={{ mr: 2, color: 'white' }}>Chirp</Button>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
                    {
                        userState.firstName ? (

                            <h5 color="inherit">Hi, {userState.firstName}</h5>

                        ) : (
                            <Link to="/sign-in">
                                <Button sx={{ color: 'white' }}>LogIn</Button>
                            </Link >
                        )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}