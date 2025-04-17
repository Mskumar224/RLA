import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const PracticeAreas = () => {
  const areas = [
    {
      title: 'Constitutional Law',
      description: 'Our team provides expert representation in writ petitions, public interest litigation, and constitutional disputes, ensuring your fundamental rights are upheld with precision and dedication.',
      image: '/assets/images/constitutional.jpg',
      link: '#constitutional',
    },
    {
      title: 'Criminal Law',
      description: 'We offer robust defense strategies for bail applications, criminal trials, and appeals, safeguarding your rights with meticulous legal expertise and unwavering commitment.',
      image: '/assets/images/criminal.jpg',
      link: '#criminal',
    },
    {
      title: 'Civil Law',
      description: 'From property disputes to contract litigation, our advocates deliver comprehensive solutions tailored to resolve complex civil matters efficiently and effectively.',
      image: '/assets/images/civil.jpg',
      link: '#civil',
    },
    {
      title: 'Family Law',
      description: 'With compassion and expertise, we handle divorce, custody, and maintenance cases, prioritizing amicable resolutions and your family’s well-being.',
      image: '/assets/images/family.jpg',
      link: '#family',
    },
    {
      title: 'Corporate Law',
      description: 'Our strategic counsel supports businesses with formation, compliance, mergers, and dispute resolution, fostering growth and legal security in a dynamic market.',
      image: '/assets/images/corporate.jpg',
      link: '#corporate',
    },
    {
      title: 'Intellectual Property Law',
      description: 'Protect your innovations with our specialized services in trademark, copyright, and patent law, ensuring your intellectual assets are secure.',
      image: '/assets/images/ip.jpg',
      link: '#ip',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Our Practice Areas
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          At Ravi Legal Associates, we provide specialized legal services across diverse domains, delivering tailored solutions with professionalism and expertise to meet your unique needs.
        </Typography>
        <Grid container spacing={4}>
          {areas.map((area, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={area.image}
                  alt={area.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>{area.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {area.description}
                  </Typography>
                  <Button
                    variant="contained"
                    className="cta-button"
                    component={Link}
                    to={area.link}
                  >
                    Learn More
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

export default PracticeAreas;