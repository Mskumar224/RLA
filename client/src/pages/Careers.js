import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import BackButton from '../components/BackButton';

const Careers = () => {
  const [formData, setFormData] = useState({ name: '', email: '', resume: '', coverLetter: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email)
    console.log('Career application:', formData);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Careers at Ravi Legal Associates
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Join our team of passionate legal professionals dedicated to delivering justice. We offer mentorship, diversity, and opportunities for growth.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Open Positions
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          - **Associate Lawyer**: 3+ years of experience in Criminal or Corporate Law.<br />
          - **Paralegal**: Strong research and organizational skills.<br />
          - **Legal Intern**: Current law students with a passion for Indian law.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Apply Now
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
              label="Resume (URL or Text)"
              name="resume"
              value={formData.resume}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Cover Letter"
              name="coverLetter"
              value={formData.coverLetter}
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
              Submit Application
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Careers;