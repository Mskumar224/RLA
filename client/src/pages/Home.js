import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const practiceAreas = [
    {
      title: 'Constitutional Law',
      description: 'Expert representation in writ petitions and public interest litigation.',
      link: '/practice-areas#constitutional',
    },
    {
      title: 'Criminal Law',
      description: 'Robust defense in bail applications and criminal trials.',
      link: '/practice-areas#criminal',
    },
    {
      title: 'Civil Law',
      description: 'Comprehensive solutions for property and contract disputes.',
      link: '/practice-areas#civil',
    },
    {
      title: 'Family Law',
      description: 'Compassionate support for divorce and custody matters.',
      link: '/practice-areas#family',
    },
    {
      title: 'Corporate Law',
      description: 'Strategic advice for business formation and compliance.',
      link: '/practice-areas#corporate',
    },
    {
      title: 'Intellectual Property Law',
      description: 'Protecting your innovations with expert IP services.',
      link: '/practice-areas#ip',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#F5F6F5' }}>
      <HeroSlider />
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: '#003087' }}>
          Welcome to Ravi Legal Associates
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#333' }}>
          With over 20 years of experience, Ravi Legal Associates is a trusted name in Indian law, providing expert legal services across Constitutional, Criminal, Civil, Family, and Corporate domains. Our client-centric approach ensures justice resonates in every case we undertake.
        </Typography>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#003087' }}>
          Our Practice Areas
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {practiceAreas.map((area, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: '#FFFFFF',
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Typography variant="h6" sx={{ color: '#003087', mb: 1 }}>
                  {area.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', mb: 2 }}>
                  {area.description}
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ color: '#D4A017', borderColor: '#D4A017', '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' } }}
                  component={Link}
                  to={area.link}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
        <TestimonialCarousel />
      </Container>
      <Box
        sx={{
          py: 10,
          textAlign: 'center',
          bgcolor: '#003087',
          color: '#FFFFFF',
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Ready to Resolve Your Legal Challenges?
          </Typography>
          <Button
            variant="contained"
            sx={{ bgcolor: '#D4A017', '&:hover': { bgcolor: '#B8860B' } }}
            component={Link}
            to="/contact"
          >
            Book a Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;