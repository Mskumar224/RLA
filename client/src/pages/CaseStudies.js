import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackButton from '../components/BackButton';

const CaseStudies = () => {
  const cases = [
    {
      title: 'Successful Defense in a Corporate Fraud Case',
      description: 'Our team defended a major corporation against allegations of financial fraud, securing a full acquittal through meticulous evidence analysis.',
      outcome: 'Client acquitted, reputation restored.',
    },
    {
      title: 'Landmark PIL Victory',
      description: 'We filed a Public Interest Litigation to protect environmental rights, resulting in a Supreme Court directive for sustainable development.',
      outcome: 'Court-mandated policy changes benefiting communities.',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Case Studies
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Explore our notable cases and the impactful results we’ve achieved for our clients.
        </Typography>
        {cases.map((caseStudy, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">{caseStudy.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ mb: 2 }}>{caseStudy.description}</Typography>
              <Typography variant="h6">Outcome:</Typography>
              <Typography variant="body1">{caseStudy.outcome}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default CaseStudies;