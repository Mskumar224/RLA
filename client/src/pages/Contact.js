import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import axios from 'axios';
import BackButton from '../components/BackButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    caseDetails: '',
  });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, isCaseReview = false) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/email`, {
        name: formData.name,
        email: formData.email,
        message: isCaseReview ? formData.caseDetails : formData.message,
      });
      setSuccess(response.data.message);
      setFormData({ name: '', email: '', message: '', caseDetails: '' });
    } catch (err) {
      setError('Failed to send message. Please check your internet connection or try again later.');
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
          Reach out to Ravi Legal Associates for expert legal advice or to schedule a consultation. We’re here to assist you with your legal needs.
        </Typography>
        {success && <Alert severity="success" sx={{ mb: 4 }}>{success}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>Contact Form</Typography>
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
                type="email"
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
              <Button type="submit" variant="contained" className="cta-button" sx={{ mt: 2 }}>
                Send Message
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>Case Review</Typography>
            <form onSubmit={(e) => handleSubmit(e, true)}>
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
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Case Details"
                name="caseDetails"
                value={formData.caseDetails}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" className="cta-button" sx={{ mt: 2 }}>
                Submit Case
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;