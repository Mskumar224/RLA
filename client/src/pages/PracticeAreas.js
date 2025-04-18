// client/src/pages/PracticeAreas.js (if exists)
import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const PracticeAreas = () => {
  const areas = [
    { title: 'Constitutional Law', description: 'Expert representation in writ petitions.', id: 'constitutional' },
    // Add other areas
  ];

  return (
    <Box sx={{ py: 8, bgcolor: '#F5F6F5' }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#003087' }}>
          Practice Areas
        </Typography>
        <Grid container spacing={4}>
          {areas.map((area) => (
            <Grid item xs={12} sm={6} md={4} key={area.id}>
              <Box sx={{ p: 3, bgcolor: '#FFFFFF', borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Typography variant="h6" sx={{ color: '#003087' }}>{area.title}</Typography>
                <Typography variant="body2" sx={{ color: '#333' }}>{area.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default PracticeAreas;