import { Quantico, Noto_Sans_NKo_Unjoined } from "next/font/google";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { SpeedInsights } from "@vercel/speed-insights/next"
import theme from "./theme";

export const metadata = {
  title: "Little Big Sound Entertainment",
  description: "Expert DJ entertainment for unforgettable events. Mixing beats, creating moments!",
};

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'italic',
  display: 'swap',
  variable: '--font-quantico', 
});

const noto = Noto_Sans_NKo_Unjoined({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[quantico.variable, noto.variable].join(' ')}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
