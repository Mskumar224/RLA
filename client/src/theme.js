import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1A2A44' }, // Deep navy blue
    secondary: { main: '#D4A017' }, // Muted gold
    background: { default: '#FFFFFF', paper: '#E8ECEF' }, // White and soft gray
    text: { primary: '#1A2A44', secondary: '#4A5568' },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: { fontFamily: '"Merriweather", serif', fontWeight: 700 },
    h2: { fontFamily: '"Merriweather", serif', fontWeight: 700 },
    h3: { fontFamily: '"Merriweather", serif', fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          '&:hover': { transform: 'scale(1.05)' },
        },
      },
    },
  },
});

export default theme;