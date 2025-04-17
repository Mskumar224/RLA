import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material'; // Added Button import
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import PracticeAreaCard from '../components/PracticeAreaCard';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
  const practiceAreas = [
    {
      title: 'Constitutional Law',
      description: 'Expert representation in writ petitions and public interest litigation.',
      image: '/assets/images/constitutional.jpg',
      link: '/practice-areas#constitutional',
    },
    {
      title: 'Criminal Law',
      description: 'Robust defense in bail applications and criminal trials.',
      image: '/assets/images/criminal.jpg',
      link: '/practice-areas#criminal',
    },
    {
      title: 'Civil Law',
      description: 'Comprehensive solutions for property and contract disputes.',
      image: '/assets/images/civil.jpg',
      link: '/practice-areas#civil',
    },
    {
      title: 'Family Law',
      description: 'Compassionate support for divorce and custody matters.',
      image: '/assets/images/family.jpg',
      link: '/practice-areas#family',
    },
    {
      title: 'Corporate Law',
      description: 'Strategic advice for business formation and compliance.',
      image: '/assets/images/corporate.jpg',
      link: '/practice-areas#corporate',
    },
    {
      title: 'Intellectual Property Law',
      description: 'Protecting your innovations with expert IP services.',
      image: '/assets/images/ip.jpg',
      link: '/practice-areas#ip',
    },
  ];

  return (
    <Box>
      <HeroSlider />
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Ravi Legal Associates
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          With over 20 years of experience, Ravi Legal Associates is a trusted name in Indian law, providing expert legal services across Constitutional, Criminal, Civil, Family, and Corporate domains. Our client-centric approach ensures justice resonates in every case we undertake.
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
          Our Practice Areas
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {practiceAreas.map((area, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PracticeAreaCard {...area} />
            </Grid>
          ))}
        </Grid>
        <TestimonialCarousel />
      </Container>
      <Box
        className="parallax"
        sx={{
          backgroundImage: 'url(/assets/images/office.jpg)',
          py: 10,
          textAlign: 'center',
          color: '#FFFFFF',
          bgcolor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Container>
          <Typography variant="h3" gutterBottom>
            Ready to Resolve Your Legal Challenges?
          </Typography>
          <Button
            variant="contained"
            className="cta-button"
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