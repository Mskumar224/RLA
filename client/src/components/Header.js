import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#001F5B' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap', py: { xs: 1, md: 0 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                color: '#FFFFFF',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.25rem' },
                p: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              RLA
            </Button>
            <Typography
              variant="h6"
              sx={{
                color: '#D4A017',
                fontWeight: 'normal',
                cursor: 'default',
                fontSize: { xs: '0.9rem', md: '1.25rem' },
              }}
            >
              Legal Associates
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', mt: { xs: 1, md: 0 } }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: '#D4A017',
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/services"
              sx={{
                color: '#D4A017',
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              Services
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/practice-areas"
              sx={{
                color: '#D4A017',
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              Practice Areas
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/team"
              sx={{
                color: '#D4A017',
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              Team
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/careers"
              sx={{
                color: '#D4A017',
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              Careers
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                color: '#D4A017',
                mx: { xs: 0.5, md: 1 },
                fontSize: { xs: '0.8rem', md: '1rem' },
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;