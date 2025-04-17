import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Corrected import to Search
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Insights = () => {
  const articles = [
    {
      title: 'Understanding Bail under CrPC',
      excerpt: 'A comprehensive guide to bail provisions in the Code of Criminal Procedure, 1973.',
      image: '/assets/images/bail.jpg',
      link: '/insights/bail',
    },
    {
      title: 'Recent Amendments to Companies Act',
      excerpt: 'Key changes in the Companies Act, 2013, and their impact on businesses.',
      image: '/assets/images/corporate-law.jpg',
      link: '/insights/companies-act',
    },
    {
      title: 'Landmark Supreme Court Rulings in 2025',
      excerpt: 'Analysis of recent Supreme Court judgments shaping Indian law.',
      image: '/assets/images/supreme-court.jpg',
      link: '/insights/supreme-court',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Insights
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Stay informed with our latest articles, legal updates, and analysis on Indian laws and regulations.
        </Typography>
        <Box sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
          <TextField
            label="Search Articles"
            variant="outlined"
            fullWidth
            InputProps={{ endAdornment: <SearchIcon /> }}
          />
        </Box>
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{article.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{article.excerpt}</Typography>
                  <Button
                    variant="contained"
                    className="cta-button"
                    component={Link}
                    to={article.link}
                    sx={{ mt: 2 }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Insights;