import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import BackButton from '../components/BackButton';

const Team = () => {
  const teamMembers = [
    {
      name: 'Deeravath Ravi Naik',
      qualifications: 'BSc, MA, LLB, Dip. in Psy. Guidance & Counselling',
      role: 'Senior Advocate & Founder',
      bio: 'With over 20 years of experience, Ravi Naik leads the firm with expertise in Constitutional and Criminal Law.',
    },
    {
      name: 'Manda Ranjith Rao',
      qualifications: 'MSc, BEd, LLB',
      role: 'Advocate',
      bio: 'Specializing in Corporate Law, Ranjith provides strategic counsel to ensure business success and compliance.',
    },
    {
      name: 'Kodooru Sateesh',
      qualifications: 'MA, BEd, LLM',
      role: 'Advocate',
      bio: 'Sateesh excels in Intellectual Property Law, protecting client innovations with precision.',
    },
    {
      name: 'Bhukya Nagaraju Naik',
      qualifications: 'MSc, LLM',
      role: 'Advocate',
      bio: 'Specializing in Civil and Family Law, Nagaraju brings a compassionate approach to complex cases.',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: '#F5F6F5' }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#003087' }}>
          Our Team
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#333' }}>
          Ravi Legal Associates is led by Deeravath Ravi Naik (BSc, MA, LLB, Dip. in Psy. Guidance & Counselling), supported by a dedicated team of advocates: Manda Ranjith Rao (MSc, BEd, LLB), Kodooru Sateesh (MA, BEd, LLM), and Bhukya Nagaraju Naik (MSc, LLM). Together, they deliver justice with integrity and expertise.
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
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
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#D4A017', mb: 1 }}>
                  {member.qualifications}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                  {member.role}
                </Typography>
                <Typography variant="body2" sx={{ color: '#333' }}>
                  {member.bio}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Team;