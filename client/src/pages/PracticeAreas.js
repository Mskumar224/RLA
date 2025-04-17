import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const PracticeAreas = () => {
  const areas = [
    {
      id: 'constitutional',
      title: 'Constitutional Law',
      description: 'Constitutional Law governs the framework of the Indian Constitution, ensuring the protection of fundamental rights, directive principles, and judicial review. Landmark cases like *Kesavananda Bharati v. State of Kerala* (1973) established the basic structure doctrine, preserving the Constitution’s core principles.',
      services: [
        'Writ petitions (habeas corpus, mandamus, certiorari)',
        'Public Interest Litigation (PIL)',
        'Constitutional disputes and advisory services',
      ],
    },
    {
      id: 'criminal',
      title: 'Criminal Law',
      description: 'Criminal Law addresses offenses under the Indian Penal Code (IPC), 1860, and the Code of Criminal Procedure (CrPC), 1973. It covers crimes such as theft, murder, fraud, and cybercrime, ensuring justice for victims and fair trials for the accused.',
      services: [
        'Bail applications and anticipatory bail',
        'Defense in criminal trials and appeals',
        'Juvenile justice and cybercrime cases',
      ],
    },
    {
      id: 'civil',
      title: 'Civil Law',
      description: 'Civil Law governs disputes between individuals or entities under the Code of Civil Procedure (CPC), 1908. It includes property disputes, contract breaches, and torts, aiming to resolve conflicts through compensation or injunctions.',
      services: [
        'Property and land litigation',
        'Contract enforcement and breach disputes',
        'Injunctions and recovery suits',
      ],
    },
    {
      id: 'family',
      title: 'Family Law',
      description: 'Family Law encompasses personal laws such as the Hindu Marriage Act, 1955, Muslim Personal Law, and others, addressing marriage, divorce, custody, and inheritance. It ensures fair resolution of sensitive family matters.',
      services: [
        'Divorce and separation proceedings',
        'Child custody and maintenance',
        'Succession and estate planning',
      ],
    },
    {
      id: 'corporate',
      title: 'Corporate Law',
      description: 'Corporate Law, regulated by the Companies Act, 2013, and SEBI regulations, governs business formation, compliance, and transactions. It supports businesses in navigating legal complexities for growth and stability.',
      services: [
        'Contract drafting and review',
        'Mergers and acquisitions (M&A)',
        'Corporate governance and insolvency resolution',
      ],
    },
    {
      id: 'ip',
      title: 'Intellectual Property Law',
      description: 'Intellectual Property Law protects creations under the Patents Act, 1970, Trademarks Act, 1999, and Copyright Act, 1957. It safeguards innovations, brands, and artistic works from infringement.',
      services: [
        'Patent and trademark registration',
        'Copyright disputes and licensing',
        'IP enforcement and litigation',
      ],
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <BackButton />
        <Typography variant="h2" align="center" gutterBottom>
          Practice Areas
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
          Our expertise spans a wide range of Indian laws, providing comprehensive legal solutions tailored to your needs. Explore our practice areas below.
        </Typography>
        {areas.map((area) => (
          <Accordion key={area.id} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">{area.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ mb: 2 }}>{area.description}</Typography>
              <Typography variant="h6">Our Services:</Typography>
              <ul>
                {area.services.map((service, index) => (
                  <li key={index}><Typography variant="body2">{service}</Typography></li>
                ))}
              </ul>
              <Button
                variant="contained"
                className="cta-button"
                component={Link}
                to="/contact"
                sx={{ mt: 2 }}
              >
                Contact Us for Expert Advice
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default PracticeAreas;