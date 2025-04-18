import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import BackButton from '../components/BackButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const caseTypes = [
    'Constitutional Law',
    'Criminal Law',
    'Civil Law',
    'Family Law',
    'Corporate Law',
    'Intellectual Property Law',
    'Supreme Court Litigation',
    'Corporate Law Compliance',
    'Bail Applications',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'success', message: 'We will be reaching out to you on your given number.' });
    setFormData({ name: '', email: '', phone: '', caseType: '', message: '' });
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#F5F6F5' }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#003087', fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#333', fontSize: { xs: '0.9rem', md: '1rem' } }}>
          Reach out to Ravi Legal Associates for expert legal assistance. Fill out the form below, and our team will get back to you promptly.
        </Typography>
        {status && (
          <Alert severity={status.type} sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            {status.message}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
          />
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            sx={{ mb: 3 }}
          />
          <FormControl fullWidth required sx={{ mb: 3 }}>
            <InputLabel id="case-type-label">Case Type</InputLabel>
            <Select
              labelId="case-type-label"
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              label="Case Type"
            >
              {caseTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            sx={{ mb: 3 }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: '#D4A017', color: '#FFFFFF', '&:hover': { bgcolor: '#b38b15' }, fontSize: { xs: '0.8rem', md: '1rem' } }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;