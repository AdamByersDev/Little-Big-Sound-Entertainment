import Footer from "./components/sharedSections/footer";
import Header from "./components/sharedSections/header";
import { Container, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { headers } from 'next/headers'


export const metadata = {
  title: "Not Found",
};

export default async function NotFound() {
  return (
    <>
      <Header active='not-found' />
      <main>
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '90vh',
            textAlign: 'center',
            gap: '8px',
            backgroundColor: 'background.paper'
          }}
        >
          <Image
            src='/headphones.svg'
            width={300}
            height={0}
            alt="Little Big Sound Entertainment"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '200px',
              aspectRatio: '390/330'
            }}
          />
          <Typography variant="h3" component='h1'>Error 404</Typography>
          <Typography variant="body1" component='p'>
            This page doesn't exist!
          </Typography>
          <Box sx={{
            gap: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', sm: 'row'}
          }}>
            <Button
              color="primary"
              variant="contained" 
              component={Link} 
              href="/" 
              sx={{gap: '4px'}}
            >
              <Typography variant="button">Return to the home page</Typography>
            </Button>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
