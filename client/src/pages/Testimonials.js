import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import TestimonialCarousel from '../components/TestimonialCarousel';
import BackButton from '../components/BackButton';

const Testimonials = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Client Testimonials
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Hear from our clients about their experiences with Ravi Legal Associates’ expert legal services.
        </Typography>
        <TestimonialCarousel />
      </Container>
    </Box>
  );
};

export default Testimonials;