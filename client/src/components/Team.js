import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const Team = () => {
  const team = [
    { name: 'Deeravath Ravi Naik', qualifications: 'BSc, MA, LLB, Dip. in Psy. Guidance & Counselling', role: 'Founder & Senior Advocate' },
    { name: 'Manda Ranjith Rao', qualifications: 'MSc, BEd, LLB', role: 'Advocate' },
    { name: 'Kodooru Sateesh', qualifications: 'MA, BEd, LLM', role: 'Advocate' },
    { name: 'Bhukya Nagaraju Naik', qualifications: 'MSc, LLM', role: 'Advocate' },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Our Team
      </Typography>
      <Grid container spacing={4}>
        {team.map((member) => (
          <Grid item xs={12} md={6} key={member.name}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
              <Typography variant="h5">{member.name}</Typography>
              <Typography>{member.qualifications}</Typography>
              <Typography color="secondary">{member.role}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Team;