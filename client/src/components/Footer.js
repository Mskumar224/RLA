import React from 'react';
import { Box, Typography, Link, Grid, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box className="footer">
      <Grid container spacing={4} sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>Ravi Legal Associates</Typography>
          <Typography variant="body2">
            Expert legal services in Constitutional, Criminal, Civil, Family, and Corporate Law. Trusted in Telangana and beyond since 2005.
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom>Quick Links</Typography>
          <Link component={RouterLink} to="/" color="inherit" underline="hover">Home</Link><br />
          <Link component={RouterLink} to="/about" color="inherit" underline="hover">About</Link><br />
          <Link component={RouterLink} to="/practice-areas" color="inherit" underline="hover">Practice Areas</Link><br />
          <Link component={RouterLink} to="/contact" color="inherit" underline="hover">Contact</Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Contact Us</Typography>
          <Typography variant="body2">
            123 Legal Avenue, Hyderabad, Telangana, India<br />
            Phone: 9177204555<br />
            Email: info@ravilegal.com
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Newsletter</Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter your email"
            fullWidth
            sx={{ mb: 2, bgcolor: 'white' }}
          />
          <Button variant="contained" className="cta-button">Subscribe</Button>
          <Box sx={{ mt: 2 }}>
            <Link href="https://facebook.com" target="_blank" color="inherit"><FacebookIcon /></Link>
            <Link href="https://twitter.com" target="_blank" color="inherit" sx={{ mx: 1 }}><TwitterIcon /></Link>
            <Link href="https://linkedin.com" target="_blank" color="inherit"><LinkedInIcon /></Link>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ pt: 2 }}>
        © 2025 Ravi Legal Associates. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;