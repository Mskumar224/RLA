import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            RLA
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
            Justice Resonates
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/practice-areas">Practice Areas</Button>
        <Button color="inherit" component={Link} to="/insights">Insights</Button>
        <Button color="inherit" component={Link} to="/careers">Careers</Button>
        <Button color="inherit" component={Link} to="/team">Team</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;