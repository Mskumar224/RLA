import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Ravi Legal Associates</Typography>
            <Typography variant="body2">
              Providing expert legal solutions across India with integrity and compassion.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link>
              <Link component={RouterLink} to="/about" color="inherit" underline="hover">About</Link>
              <Link component={RouterLink} to="/practice-areas" color="inherit" underline="hover">Practice Areas</Link>
              <Link component={RouterLink} to="/contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>Contact Us</Typography>
            <Typography variant="body2">Miryalaguda, Nalgonda District, Hyderabad, Telangana - 508207</Typography>
            <Typography variant="body2">Phone: +91-9177204555</Typography>
            <Typography variant="body2">Email: info@ravilegal.com</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Newsletter</Typography>
              <TextField
                label="Enter your email"
                variant="outlined"
                size="small"
                sx={{ bgcolor: 'white', borderRadius: 1 }}
              />
              <Button variant="contained" sx={{ mt: 1 }}>Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Ravi Legal Associates. All rights reserved.
          </Typography>
        </Box>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>Visit Us</Typography>
          <Box sx={{ height: 300, maxWidth: 600, mx: 'auto' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.654305462648!2d79.56236331488447!3d16.872227988392785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbef0c3d6b2d7b%3A0x6b7f8a3e3c7a6b2d!2sMiryalaguda%2C%20Telangana%20508207!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;