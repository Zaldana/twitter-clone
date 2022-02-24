import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import { spacing } from '@mui/system';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions, 
    Button
} from '@mui/material';


function HomePage(props) {
    return (
      <Layout>
          <Box sx={{
                mx: 'auto',
                minWidth: 300,
                p: 2,
                m: 'auto',
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
            }}>
                <Card sx={{ minWidth: 200 }}>
                    <CardContent>
                       <Typography> Home Page</Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Link to="/sign-in">
                            <Button variant='contained'>Sign In</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Box>
        </Layout>
  )
}

export default HomePage