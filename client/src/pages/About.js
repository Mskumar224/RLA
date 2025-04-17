import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
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
        <Typography variant="body1" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Founded in 2005 in Hyderabad, Telangana, Ravi Legal Associates has grown into one of India’s most trusted law firms, serving clients nationwide with a team of over 50 dedicated lawyers. Our mission is to deliver justice through expertise, integrity, and compassion, rooted in the principles of Indian law.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - **Integrity**: Upholding the highest ethical standards in all our dealings.<br />
          - **Excellence**: Striving for perfection in legal representation and client service.<br />
          - **Client-Centricity**: Prioritizing our clients’ needs and goals.<br />
          - **Social Responsibility**: Giving back through pro bono work and community outreach.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Our Commitment
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We offer free legal advice every 3rd Saturday of the month (Call: 9177204555) and undertake pro bono cases to support underprivileged communities. Our team is dedicated to making legal services accessible and impactful.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            className="cta-button"
            component={Link}
            to="/team"
          >
            Meet Our Team
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;