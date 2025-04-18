import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import axios from 'axios';
import BackButton from '../components/BackButton';

const Careers = () => {
  const [formData, setFormData] = useState({ name: '', email: '', resume: '' });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Career application:', formData);
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/careers`, formData);
      setSuccess(response.data.message);
      setFormData({ name: '', email: '', resume: '' });
    } catch (err) {
      setError('Failed to submit application. Please try again later or contact us at info@ravilegal.com.');
    }
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#F5F6F5' }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#003087' }}>
          Careers
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto', color: '#333' }}>
          Join the team at Ravi Legal Associates and contribute to delivering justice with integrity and excellence. We seek passionate legal professionals dedicated to making a difference.
        </Typography>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#003087' }}>
          Open Positions
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto', color: '#333' }}>
          <ul>
            <li>
              <strong>Associate Lawyer</strong>: Candidates with over three years of experience in Criminal or Corporate Law, demonstrating strong advocacy and analytical skills.
            </li>
            <li>
              <strong>Paralegal</strong>: Individuals with exceptional research and organizational abilities, ready to support our legal team with precision and efficiency.
            </li>
            <li>
              <strong>Legal Intern</strong>: Current law students with a keen interest in Indian law, eager to gain hands-on experience in a dynamic legal environment.
            </li>
          </ul>
        </Typography>
        {success && <Alert severity="success" sx={{ mb: 4 }}>{success}</Alert>}
        {error && <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ color: '#003087' }}>
              Apply Now
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
                label="Resume Link or Details"
                name="resume"
                value={formData.resume}
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
                Submit Application
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Careers;