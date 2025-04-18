import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#003087' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: 'bold',
              cursor: 'default',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>RLA</span> Legal Associates
          </Typography>
          <div>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: '#D4A017',
                mx: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
                cursor: 'pointer',
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
                mx: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
                cursor: 'pointer',
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
                mx: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
                cursor: 'pointer',
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
                mx: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
                cursor: 'pointer',
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
                mx: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
                cursor: 'pointer',
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
                mx: 1,
                '&:hover': { bgcolor: '#D4A017', color: '#FFFFFF' },
                cursor: 'pointer',
              }}
            >
              Contact
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;