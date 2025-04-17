import React, { useState } from 'react';
import { Box, TextField, Button, Typography, MenuItem } from '@mui/material';
import axios from 'axios';

const CaseReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    caseType: '',
    description: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const caseTypes = [
    'Constitutional Law',
    'Criminal Law',
    'Civil Law',
    'Family Law',
    'Corporate Law',
    'Intellectual Property Law',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/contact`, formData);
      setSuccess(true);
      setError('');
      setFormData({ name: '', contact: '', caseType: '', description: '' });
    } catch (err) {
      setError('Failed to submit. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 4, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>Request a Case Review</Typography>
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
          label="Contact Number or Email"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select
          label="Case Type"
          name="caseType"
          value={formData.caseType}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          {caseTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Case Description"
          name="description"
          value={formData.description}
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
          Submit
        </Button>
        {success && <Typography color="success.main" sx={{ mt: 2 }}>Case review request submitted successfully!</Typography>}
        {error && <Typography color="error.main" sx={{ mt: 2 }}>{error}</Typography>}
      </form>
    </Box>
  );
};

export default CaseReviewForm;