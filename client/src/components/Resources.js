import React from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Typography variant="h4">Resources</Typography>
      <Typography variant="body1">This is the Resources page.</Typography>
    </div>
  );
};

export default Resources;