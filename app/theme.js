'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#5271ff',
    },
    secondary: {
      main: '#df52ff',
    }
  },
  typography: {
    fontFamily: 'var(--font-noto), sans-serif',
    h1: {
      fontFamily: 'var(--font-quantico), sans-serif',
    },
    h2: {
      fontFamily: 'var(--font-quantico), sans-serif',
    },
    h3: {
      fontFamily: 'var(--font-quantico), sans-serif',
    },
    h4: {
      fontFamily: 'var(--font-quantico), sans-serif',
    },
    h5: {
      fontFamily: 'var(--font-quantico), sans-serif',
    },
    h6: {
      fontFamily: 'var(--font-quantico), sans-serif',
    },
  }
});

export default theme;
