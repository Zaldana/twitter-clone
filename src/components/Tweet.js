import React from 'react'
import { useSelector } from 'react-redux';

import {
    Box,
    Card,
    TextField,
    CardContent,
    CardActions,
    Button,
    Typography,
} from '@mui/material';

function Tweet(props) {

    const userState = useSelector(state => state.user);

    const {
        newTweet: {
            tweet
        }
    } = props
  
    return (
    <div>
            
            <Box
                sx={{
                    mx: 'auto',
                    minWidth: 300,
                    p: 5,
                    m: 'auto',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',

                }}>
                <Card sx={{ minWidth: 200 }}>
                    <CardContent >
                        <Typography>{tweet}</Typography>
                        <Typography>-{userState.firstName}</Typography>
                    </CardContent>
                    
                </Card>
            </Box>
    </div>
    )
}

export default Tweet