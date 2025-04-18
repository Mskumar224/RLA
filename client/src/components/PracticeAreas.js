import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const PracticeAreas = () => {
  const areas = [
    {
      title: 'Constitutional Law',
      description: 'Expert representation in writ petitions and public interest litigation.',
      id: 'constitutional',
    },
    {
      title: 'Criminal Law',
      description: 'Robust defense in bail applications and criminal trials.',
      id: 'criminal',
    },
    {
      title: 'Civil Law',
      description: 'Comprehensive solutions for property and contract disputes.',
      id: 'civil',
    },
    {
      title: 'Family Law',
      description: 'Compassionate support for divorce and custody matters.',
      id: 'family',
    },
    {
      title: 'Corporate Law',
      description: 'Strategic advice for business formation and compliance.',
      id: 'corporate',
    },
    {
      title: 'Intellectual Property Law',
      description: 'Protecting your innovations with expert IP services.',
      id: 'ip',
    },
    {
      title: 'Supreme Court Litigation',
      description: 'Specialized advocacy for cases before the Supreme Court of India.',
      id: 'supreme-court',
    },
    {
      title: 'Corporate Law Compliance',
      description: 'Ensuring businesses meet regulatory requirements with expert guidance.',
      id: 'corporate-law',
    },
    {
      title: 'Bail Applications',
      description: 'Aggressive representation for securing bail in criminal cases.',
      id: 'bail',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: '#F5F6F5' }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#003087' }}>
          Practice Areas
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#333' }}>
          Our team at Ravi Legal Associates specializes in a wide range of legal domains, delivering tailored solutions with integrity and expertise to meet your needs.
        </Typography>
        <Grid container spacing={4}>
          {areas.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.id}>
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
                  to={`/practice-areas#${area.id}`}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PracticeAreas;