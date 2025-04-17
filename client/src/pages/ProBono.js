import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import BackButton from '../components/BackButton';

const ProBono = () => {
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle pro bono request submission
    console.log('Pro bono request:', formData);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Pro Bono Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          At Ravi Legal Associates, we believe in making justice accessible. Our pro bono initiatives include free legal advice and community outreach.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Free Legal Advice
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join us every 3rd Saturday of the month for free legal advice sessions. Call 9177204555 to schedule your consultation.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Community Outreach
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We support underprivileged communities through legal aid camps and pro bono cases, addressing issues like land disputes and family matters.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Request Pro Bono Assistance
        </Typography>
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
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
              label="Request Details"
              name="request"
              value={formData.request}
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
              Submit Request
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default ProBono;