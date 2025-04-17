import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import BackButton from '../components/BackButton';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Ravi Sharma',
      role: 'Managing Partner',
      bio: 'LLM, 25+ years of experience in Constitutional and Criminal Law.',
      image: '/assets/images/ravi-sharma.jpg',
    },
    {
      name: 'Priya Menon',
      role: 'Senior Partner',
      bio: 'LLB, expert in Family and Corporate Law with 20 years of practice.',
      image: '/assets/images/priya-menon.jpg',
    },
    {
      name: 'Anil Gupta',
      role: 'Associate',
      bio: 'LLB, specializes in Civil Litigation and IP Law.',
      image: '/assets/images/anil-gupta.jpg',
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
          Meet the dedicated professionals at Ravi Legal Associates, bringing expertise and compassion to every case.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={member.image}
                  alt={member.name}
                />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">{member.role}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{member.bio}</Typography>
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