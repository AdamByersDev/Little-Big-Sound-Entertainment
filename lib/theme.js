'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#5271ff',
      contrastText: '#000',
    },
    secondary: {
      main: '#df52ff',
      extraDark: '#530066',
      contrastText: '#000',
    },
    background: {
      default: '#0e0e0e'
    }
  },
  typography: {
    fontFamily: 'var(--font-noto), sans-serif',
    h1: {
      fontFamily: 'var(--font-quantico), sans-serif',
      fontWeight: '700',
    },
    h2: {
      fontFamily: 'var(--font-quantico), sans-serif',
      fontWeight: '700',
    },
    h3: {
      fontFamily: 'var(--font-quantico), sans-serif',
      fontWeight: '700',
    },
    h4: {
      fontFamily: 'var(--font-quantico), sans-serif',
      fontWeight: '700',
    },
    h5: {
      fontFamily: 'var(--font-quantico), sans-serif',
      fontWeight: '700',
    },
    h6: {
      fontFamily: 'var(--font-quantico), sans-serif',
      fontWeight: '700',
    },
  }
});

export default theme;
