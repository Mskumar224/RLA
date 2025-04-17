import React from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h1" gutterBottom>
          Ravi Legal Associates
        </Typography>
        <Typography variant="h6" gutterBottom>
          Justice Resonates
        </Typography>
        <Typography variant="body1" paragraph>
          Premier law firm in India, delivering expert legal solutions across Constitutional, Criminal, Civil, Family, and Corporate Law.
        </Typography>
        <Button variant="contained" color="secondary" component={Link} to="/contact">
          Get in Touch
        </Button>
      </Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 4, textAlign: 'center' }}>
        <Typography variant="h5">
          Free Legal Advice: Every 3rd Saturday of the Month
        </Typography>
        <Typography>Contact us at 9177204555</Typography>
      </Box>
      <Grid container spacing={4} sx={{ py: 8 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Expertise</Typography>
          <Typography>Comprehensive legal services tailored to Indian laws.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Trust</Typography>
          <Typography>Client-focused approach with a proven track record.</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5">Accessibility</Typography>
          <Typography>Reach us across India for all your legal needs.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;