import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import axios from 'axios';
import BackButton from '../components/BackButton';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/email`, formData);
      setSuccess(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later or contact us at info@ravilegal.com.');
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#F5F6F5' }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#003087' }}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#333' }}>
          Reach out to Ravi Legal Associates for expert legal advice and support. Our team is here to assist you with your legal needs.
        </Typography>
        {success && <Alert severity="success" sx={{ mb: 4 }}>{success}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                sx={{ bgcolor: '#FFFFFF' }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                sx={{ bgcolor: '#FFFFFF' }}
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
                sx={{ bgcolor: '#FFFFFF' }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, bgcolor: '#D4A017', '&:hover': { bgcolor: '#B8860B' } }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;