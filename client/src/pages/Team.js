import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import BackButton from '../components/BackButton';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ravi Naik',
      role: 'Senior Advocate',
      image: '/assets/images/ravi-naik.jpg', // Add to client/public/assets/images/
      bio: 'With over 20 years of experience, Ravi Naik leads the firm with expertise in Constitutional and Criminal Law.',
    },
    {
      name: 'Nagaraju Naik',
      role: 'Advocate',
      image: '/assets/images/nagaraju-naik.jpg', // Add to client/public/assets/images/
      bio: 'Specializing in Civil and Family Law, Nagaraju brings a compassionate approach to complex cases.',
    },
    {
      name: 'Ranjith Rao',
      role: 'Corporate Lawyer',
      image: '/assets/images/ranjith-rao.jpg', // Add to client/public/assets/images/
      bio: 'Ranjith provides strategic counsel in corporate law, ensuring business success and compliance.',
    },
    {
      name: 'Sateesh Kumar',
      role: 'Associate Lawyer',
      image: '/assets/images/sateesh.jpg', // Add to client/public/assets/images/
      bio: 'Sateesh excels in Intellectual Property Law, protecting client innovations with precision.',
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
          Meet the dedicated professionals at Ravi Legal Associates, committed to delivering justice with integrity and expertise.
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
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2">{member.bio}</Typography>
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