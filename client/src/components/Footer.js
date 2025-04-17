import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4 }}>
      <Container>
        <Typography variant="body2" align="center">
          &copy; 2025 Ravi Legal Associates. All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Miryalaguda, Nalgonda, Hyderabad, Telangana 508207 | 9177204555
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;