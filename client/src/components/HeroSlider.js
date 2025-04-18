import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <Box
      sx={{
        bgcolor: '#003087',
        color: '#FFFFFF',
        py: 10,
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Expert Legal Solutions
      </Typography>
      <Typography variant="h5" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
        Ravi Legal Associates delivers justice with integrity across Constitutional, Criminal, Civil, Family, and Corporate law.
      </Typography>
      <Button
        variant="contained"
        sx={{ bgcolor: '#D4A017', '&:hover': { bgcolor: '#B8860B' } }}
        component={Link}
        to="/contact"
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default HeroSlider;