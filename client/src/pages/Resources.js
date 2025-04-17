import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Resources = () => {
  const guides = [
    { title: 'Guide to Filing a Writ Petition', file: '/assets/guides/writ-petition.pdf' },
    { title: 'Basics of Corporate Compliance', file: '/assets/guides/corporate-compliance.pdf' },
  ];

  const faqs = [
    {
      question: 'What is a Public Interest Litigation (PIL)?',
      answer: 'A PIL is a legal action initiated in a court for the enforcement of public interest, often addressing issues like environmental protection or human rights violations.',
    },
    {
      question: 'How to register a trademark in India?',
      answer: 'Trademark registration involves filing an application with the Trademark Registry under the Trademarks Act, 1999, followed by examination and publication.',
    },
  ];

  const glossary = [
    { term: 'Bail', definition: 'The temporary release of an accused person awaiting trial, often with conditions.' },
    { term: 'Injunction', definition: 'A court order directing a person to do or refrain from doing a specific act.' },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Legal Resources
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Access our comprehensive guides, FAQs, and glossary to better understand Indian laws and legal processes.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Guides
        </Typography>
        {guides.map((guide, index) => (
          <Button
            key={index}
            variant="outlined"
            href={guide.file}
            download
            sx={{ mb: 2, display: 'block' }}
          >
            Download {guide.title}
          </Button>
        ))}
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          FAQs
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          Glossary
        </Typography>
        {glossary.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="h6">{item.term}</Typography>
            <Typography variant="body1">{item.definition}</Typography>
          </Box>
        ))}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            className="cta-button"
            component={Link}
            to="/contact"
          >
            Need More Help? Contact Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Resources;