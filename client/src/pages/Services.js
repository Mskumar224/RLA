import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Services = () => {
  const services = [
    {
      title: 'Constitutional Law',
      description: 'Our seasoned advocates provide expert representation in constitutional disputes, including writ petitions and public interest litigation, ensuring your fundamental rights are protected with unparalleled legal acumen.',
      link: '/practice-areas#constitutional',
    },
    {
      title: 'Criminal Law',
      description: 'We deliver robust defense strategies for bail applications, criminal trials, and appeals, combining meticulous preparation with aggressive advocacy to safeguard your rights and secure favorable outcomes.',
      link: '/practice-areas#criminal',
    },
    {
      title: 'Civil Law',
      description: 'From property disputes to contract litigation, our team offers tailored solutions to resolve complex civil matters, leveraging deep legal expertise to achieve efficient and effective resolutions.',
      link: '/practice-areas#civil',
    },
    {
      title: 'Family Law',
      description: 'With empathy and expertise, we handle sensitive family matters such as divorce, custody, and maintenance, prioritizing amicable resolutions to support your family’s well-being.',
      link: '/practice-areas#family',
    },
    {
      title: 'Corporate Law',
      description: 'Our strategic counsel empowers businesses with services in company formation, compliance, mergers, and dispute resolution, fostering growth and ensuring legal security in a competitive landscape.',
      link: '/practice-areas#corporate',
    },
    {
      title: 'Intellectual Property Law',
      description: 'Protect your innovations with our specialized services in trademark, copyright, and patent law, ensuring your intellectual assets are safeguarded against infringement.',
      link: '/practice-areas#ip',
    },
    {
      title: 'Free Legal Advice',
      description: 'We are committed to making justice accessible by offering free legal advice sessions every 3rd Saturday of the month (Call: 9177204555), providing expert guidance to those in need.',
      link: '/contact',
    },
    {
      title: 'Pro Bono Services',
      description: 'Our dedication to social responsibility drives us to undertake pro bono cases, supporting underserved communities and ensuring access to justice for all.',
      link: '/contact',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          At Ravi Legal Associates, we offer a comprehensive suite of legal services designed to meet the diverse needs of our clients. With a commitment to excellence and integrity, our team delivers tailored solutions to achieve justice and empower our clients.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{service.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    className="cta-button"
                    component={Link}
                    to={service.link}
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

export default Services;