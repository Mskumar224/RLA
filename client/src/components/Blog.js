import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      title: 'Navigating FDI in India: Key Legal Considerations',
      excerpt: 'Understand the regulatory framework for foreign direct investment in India, including sectoral caps and approval routes.',
      date: 'April 10, 2025',
    },
    {
      title: 'GST Compliance for Businesses: A Practical Guide',
      excerpt: 'Learn how to stay compliant with India’s GST regime, including filing returns and claiming input tax credits.',
      date: 'March 15, 2025',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Stay informed with the latest legal insights and updates from Ravi Legal Associates. Our blog covers topics ranging from corporate law to dispute resolution.
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {post.excerpt}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Published on {post.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/contact"
          sx={{ px: 4 }}
        >
          Contact Us for More Insights
        </Button>
      </Box>
    </Container>
  );
}

export default Blog;