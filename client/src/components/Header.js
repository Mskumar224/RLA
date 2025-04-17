import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'; // Corrected import to Search

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const practiceAreas = [
    { name: 'Constitutional Law', path: '/practice-areas#constitutional' },
    { name: 'Criminal Law', path: '/practice-areas#criminal' },
    { name: 'Civil Law', path: '/practice-areas#civil' },
    { name: 'Family Law', path: '/practice-areas#family' },
    { name: 'Corporate Law', path: '/practice-areas#corporate' },
    { name: 'Intellectual Property Law', path: '/practice-areas#ip' },
  ];

  const insights = [
    { name: 'Blog', path: '/insights#blog' },
    { name: 'Legal Updates', path: '/insights#updates' },
  ];

  const team = [
    { name: 'Partners', path: '/team#partners' },
    { name: 'Associates', path: '/team#associates' },
  ];

  const mobileMenu = (
    <Drawer anchor="right" open={mobileOpen} onClose={handleMobileMenuToggle}>
      <List sx={{ width: 250 }}>
        <ListItem button component={Link} to="/" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={handleMobileMenuToggle}>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button onClick={handleMenuOpen}>
          <ListItemText primary="Practice Areas" />
        </ListItem>
        <ListItem button component={Link} to="/insights" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem button component={Link} to="/careers" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Careers" />
        </ListItem>
        <ListItem button component={Link} to="/team" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Team" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/resources" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem button component={Link} to="/testimonials" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Testimonials" />
        </ListItem>
        <ListItem button component={Link} to="/case-studies" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Case Studies" />
        </ListItem>
        <ListItem button component={Link} to="/pro-bono" onClick={handleMobileMenuToggle}>
          <ListItemText primary="Pro Bono" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky" className="sticky-header">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            RLA
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
            Justice Resonates
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" onClick={handleMenuOpen}>Practice Areas</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className="dropdown-menu"
          >
            {practiceAreas.map((area) => (
              <MenuItem key={area.name} component={Link} to={area.path} onClick={handleMenuClose}>
                {area.name}
              </MenuItem>
            ))}
          </Menu>
          <Button color="inherit" component={Link} to="/insights">Insights</Button>
          <Button color="inherit" component={Link} to="/careers">Careers</Button>
          <Button color="inherit" component={Link} to="/team">Team</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/resources">Resources</Button>
          <Button color="inherit" component={Link} to="/testimonials">Testimonials</Button>
          <Button color="inherit" component={Link} to="/case-studies">Case Studies</Button>
          <Button color="inherit" component={Link} to="/pro-bono">Pro Bono</Button>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Button variant="contained" className="cta-button" component={Link} to="/contact">
            Book a Consultation
          </Button>
        </Box>
        <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleMobileMenuToggle}>
          <MenuIcon />
        </IconButton>
        {mobileMenu}
      </Toolbar>
    </AppBar>
  );
};

export default Header;