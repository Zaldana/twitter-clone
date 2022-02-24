import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../layout/Layout';
import { newTweetActionCreator } from '../../reduxStore/TweetState';
import Tweet from '../Tweet';

import {
    Box,
    Card,
    TextField,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';


function ProtectedHomePage() {
    
    const dispatch = useDispatch();
    const tweetState = useSelector(state => state.tweet);
    const [ tweetText, setTweetText ] = useState("");
    
    function handleOnChange(e) {
        setTweetText(e.target.value);
    }

    function handleSubmit(e) {
        dispatch(newTweetActionCreator(tweetText));
        setTweetText("")
    }

    return (
    <Layout>
            <Box
                component="form"
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
                            <TextField
                                id="outlined-multiline-flexible"
                                multiline
                                maxRows={5}
                                value={tweetText}
                                onChange={handleOnChange} 
                            />
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to="/protected-homepage">
                            <Button onClick={handleSubmit} type="submit" variant='contained'>Tweet</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
            {tweetState.map((item, i) => (
                <Tweet
                    key={i}
                    newTweet={{
                        tweet: item.newTweet
                    }}
                />
            ))}
    </Layout>
  )
}

export default ProtectedHomePage