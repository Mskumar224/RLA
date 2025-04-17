import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const About = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          About Ravi Legal Associates
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Ravi Legal Associates, based in Miryalaguda, Nalgonda District, is a premier law firm dedicated to delivering justice across India. With a team of highly skilled advocates, we provide unparalleled legal expertise, integrity, and client-focused solutions rooted in the principles of Indian law.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>Our Mission</Typography>
            <Typography variant="body1">
              To empower our clients with exceptional legal representation, ensuring their rights are protected through strategic counsel and compassionate advocacy.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>Our Values</Typography>
            <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
              <li><strong>Integrity</strong>: Maintaining the highest ethical standards in every case.</li>
              <li><strong>Excellence</strong>: Pursuing perfection in legal strategy and client service.</li>
              <li><strong>Client-Centricity</strong>: Tailoring solutions to meet each client’s unique needs.</li>
              <li><strong>Social Responsibility</strong>: Serving the community through pro bono initiatives.</li>
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>Our Commitment</Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            We offer free legal advice sessions every 3rd Saturday of the month (Call: 9177204555) and undertake pro bono cases to support underserved communities, ensuring access to justice for all.
          </Typography>
          <Button
            variant="contained"
            className="cta-button"
            component={Link}
            to="/contact"
          >
            Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;