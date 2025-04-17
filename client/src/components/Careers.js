import React from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const Careers = () => {
  const openings = [
    {
      title: 'Junior Advocate',
      description: 'Join our team to handle diverse legal cases under senior guidance. LLB required.',
    },
    {
      title: 'Legal Researcher',
      description: 'Support our firm with in-depth legal research and case preparation. LLM preferred.',
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom>
        Careers
      </Typography>
      <Typography paragraph>
        At Ravi Legal Associates, we are always looking for talented and passionate individuals to join our mission of delivering justice. Explore our current openings and become part of a dynamic law firm serving clients across India.
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {openings.map((opening) => (
          <Grid item xs={12} md={6} key={opening.title}>
            <Box sx={{ p: 2, bgcolor: 'background.default', borderRadius: 2, display: 'flex', alignItems: 'center' }}>
              <WorkIcon sx={{ mr: 2, color: 'secondary.main' }} />
              <Box>
                <Typography variant="h5">{opening.title}</Typography>
                <Typography>{opening.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Interested in Joining Us?
        </Typography>
        <Typography paragraph>
          Send your resume and cover letter to <a href="mailto:careers@ravilegalassociates.com">careers@ravilegalassociates.com</a>.
        </Typography>
        <Button variant="contained" color="secondary" href="mailto:careers@ravilegalassociates.com">
          Apply Now
        </Button>
      </Box>
    </Container>
  );
};

export default Careers;