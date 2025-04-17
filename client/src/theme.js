import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1B263B' }, // Navy Blue
    secondary: { main: '#D4A017' }, // Gold
    background: { default: '#F5F5F5' }, // Light Gray
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontWeight: 700, color: '#1B263B' },
    h6: { fontStyle: 'italic', color: '#D4A017' },
  },
});

export default theme;