import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const PracticeAreas = () => {
  const areas = [
    { title: 'Constitutional Law', desc: 'Expert representation in matters involving fundamental rights and constitutional disputes.' },
    { title: 'Criminal Law', desc: 'Defending clients in criminal cases, including bail, trials, and appeals.' },
    { title: 'Civil Law', desc: 'Handling property disputes, contracts, and other civil matters.' },
    { title: 'Family Law', desc: 'Resolving divorce, custody, and inheritance issues with sensitivity.' },
    { title: 'Corporate Law', desc: 'Advising businesses on compliance, contracts, and disputes.' },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Practice Areas
      </Typography>
      <Grid container spacing={4}>
        {areas.map((area) => (
          <Grid item xs={12} md={6} key={area.title}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
              <Typography variant="h5">{area.title}</Typography>
              <Typography>{area.desc}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PracticeAreas;