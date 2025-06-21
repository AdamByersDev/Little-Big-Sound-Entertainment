import { Quantico, Noto_Sans_NKo_Unjoined } from "next/font/google";
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from "./theme";

export const metadata = {
  metadataBase: new URL('https://littlebigsoundentertainment.ca/'),
  title: {
    default: 'Little Big Sound Entertainment',
    template: '%s - Little Big Sound Entertainment',
  },
  description: 'Expert DJ entertainment for unforgettable events. Mixing beats, creating moments!',
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Little Big Sound Entertainment",
      "url": "https://littlebigsoundentertainment.ca",
      "logo": "https://littlebigsoundentertainment.ca/apple-icon.png",
      "sameAs": [
        "https://www.facebook.com/people/Little-Big-Sound-Entertainment/100067206510756/",
        "https://www.instagram.com/littlebigsoundentertainment/"
      ]
    }),
  },
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
            <GlobalStyles
              styles={{
                html: {
                  scrollBehavior: 'smooth'
                }
              }}
            />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
