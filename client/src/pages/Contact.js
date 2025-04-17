import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import axios from 'axios';
import CaseReviewForm from '../components/CaseReviewForm';
import BackButton from '../components/BackButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData);
      setSuccess(true);
      setError('');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Reach out to Ravi Legal Associates for expert legal advice or to schedule a consultation. We’re here to help.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                type="submit"
                variant="contained"
                className="cta-button"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
              {success && <Typography color="success.main" sx={{ mt: 2 }}>Message sent successfully!</Typography>}
              {error && <Typography color="error.main" sx={{ mt: 2 }}>{error}</Typography>}
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Case Review
            </Typography>
            <CaseReviewForm />
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom>
            Visit Us
          </Typography>
          <Typography variant="body1">
            123 Legal Avenue, Hyderabad, Telangana, India<br />
            Phone: 9177204555<br />
            Email: info@ravilegal.com
          </Typography>
          <Box sx={{ mt: 4, height: 300 }}>
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.456789!3d17.456123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzIxLjciTiA3OMKwMjcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1634567891234"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;