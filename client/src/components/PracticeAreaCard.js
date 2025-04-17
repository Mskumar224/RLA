import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PracticeAreaCard = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
        <Button
          variant="contained"
          className="cta-button"
          component={Link}
          to={link}
          sx={{ mt: 2 }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PracticeAreaCard;