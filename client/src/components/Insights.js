import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from './BackButton'; // Correct import

const Insights = () => {
  const articles = [
    {
      title: 'Understanding Bail under Indian Law',
      excerpt: 'A comprehensive guide to the bail process under the Criminal Procedure Code (CrPC).',
      link: '/insights/bail-guide',
    },
    {
      title: 'Key Changes in the 2023 Bharatiya Nyaya Sanhita',
      excerpt: 'An overview of the new criminal law replacing the Indian Penal Code (IPC).',
      link: '/insights/bharatiya-nyaya-sanhita',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <BackButton />
      <Typography variant="h1" gutterBottom>
        Legal Insights
      </Typography>
      <Typography paragraph>
        Stay informed with the latest legal updates, case analyses, and insights from Ravi Legal Associates. Our articles are designed to help you navigate the complexities of Indian law.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {articles.map((article) => (
          <Grid item xs={12} md={6} key={article.title}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2 }}>
              <Typography variant="h5">{article.title}</Typography>
              <Typography paragraph>{article.excerpt}</Typography>
              <Button variant="outlined" color="secondary" component={Link} to={article.link}>
                Read More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Insights;