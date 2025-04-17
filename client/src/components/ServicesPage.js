import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import BackButton from '../components/BackButton';

const services = [
  {
    title: 'Corporate Law',
    description: 'Comprehensive legal support for mergers, acquisitions, compliance, and corporate governance.',
  },
  {
    title: 'Litigation',
    description: 'Expert representation in civil, commercial, and criminal disputes.',
  },
  {
    title: 'Intellectual Property',
    description: 'Protecting your innovations with patents, trademarks, and copyrights.',
  },
  {
    title: 'Tax Law',
    description: 'Strategic tax planning and dispute resolution for businesses and individuals.',
  },
  {
    title: 'Employment Law',
    description: 'Advising on labor regulations, contracts, and workplace disputes.',
  },
  {
    title: 'International Trade',
    description: 'Navigating complex global trade regulations and agreements.',
  },
];

const ServicesPage = () => {
  return (
    <Box className="container">
      <BackButton />
      <Typography variant="h1" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        At Ravi Legal Associates, we offer a wide range of legal services to meet the needs of our diverse clientele. Our team of experts is committed to delivering results-driven solutions.
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body2">{service.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;