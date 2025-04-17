import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import BackButton from '../components/BackButton';

const Team = () => {
  const teamMembers = [
    {
      name: 'Deeravath Ravi Naik',
      role: 'Lead Advocate',
      qualifications: 'BSc, MA, LLB, Dip. in Psy. Guidance & Counselling',
      image: '/assets/images/ravi-naik.jpg',
    },
    {
      name: 'Manda Ranjith Rao',
      role: 'Advocate',
      qualifications: 'MSc, BEd, LLB',
      image: '/assets/images/ranjith-rao.jpg',
    },
    {
      name: 'Kodooru Sateesh',
      role: 'Advocate',
      qualifications: 'MA, BEd, LLM',
      image: '/assets/images/sateesh.jpg',
    },
    {
      name: 'Bhukya Nagaraju Naik',
      role: 'Advocate',
      qualifications: 'MSc, LLM',
      image: '/assets/images/nagaraju-naik.jpg',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Our Team
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Ravi Legal Associates is led by Deeravath Ravi Naik (BSc, MA, LLB, Dip. in Psy. Guidance & Counselling), supported by a dedicated team of advocates: Manda Ranjith Rao (MSc, BEd, LLB), Kodooru Sateesh (MA, BEd, LLM), and Bhukya Nagaraju Naik (MSc, LLM). Together, they bring unparalleled expertise and commitment to every case.
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.role}</Typography>
                  <Typography variant="body2" color="text.secondary">{member.qualifications}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;