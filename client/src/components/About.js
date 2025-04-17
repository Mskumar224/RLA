import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom>
        About Us
      </Typography>
      <Typography paragraph>
        Ravi Legal Associates, founded by Deeravath Ravi Naik (BSc, MA, LLB, Dip. in Psy. Guidance & Counselling), is a leading law firm in Miryalaguda, Telangana. With a team of dedicated advocates, we provide expert legal services across India, specializing in Constitutional, Criminal, Civil, Family, and Corporate Law.
      </Typography>
      <Typography paragraph>
        Our mission is to deliver justice with integrity, ensuring every client receives personalized and effective legal solutions. We are committed to upholding Indian laws and serving clients with professionalism and compassion.
      </Typography>
    </Container>
  );
};

export default About;