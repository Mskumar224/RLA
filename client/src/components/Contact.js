import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';

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
      await axios.post('https://your-render-backend-url/api/contact', formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to submit. Please try again.');
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
        {success && <Alert severity="success">Message sent successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Address</Typography>
        <Typography>Miryalaguda, Nalgonda, Hyderabad, Telangana 508207</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Phone</Typography>
        <Typography>9177204555</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Free Legal Advice</Typography>
        <Typography>Every 3rd Saturday of the Month</Typography>
      </Box>
    </Container>
  );
};

export default Contact;