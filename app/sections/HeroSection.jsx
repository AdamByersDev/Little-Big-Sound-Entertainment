import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box>
      <Container
        sx={{
          backgroundColor: 'secondary.dark',
          height: 'auto',
          display: 'flex',
          alignItems: 'end',
          maxHeight: {xs: 'auto', md: '864px'},
          paddingTop: '72px',
          position: 'relative',
          maxWidth: '2560px',
          marginX: 'auto',
        }}
        maxWidth='auto'
        component='section'
        id="hero"
      >
        <Box sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          marginX: 'auto',
          backgroundImage: 'url("/hero.webp")',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          zIndex: '0',
          opacity: '0.75',
          filter: 'grayscale(100%) brightness(30%)',
        }} />
        <Container
          maxWidth='lg'
          sx={{
            display: {xs: 'flex', md: 'grid'},
            height: {xs: '100%', md: 'auto'},
            gridTemplateColumns: '3fr 2fr',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            paddingBottom: {xs: '12vh', md: '100px'},
            paddingTop: '64px',
            gap: '8px',
            zIndex: '1',
            paddingX: { xs: 0, sm: 4 }
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            height: {md: '100%'},
            paddingBottom: {md: '20%'},
            position: 'relative',
          }}>
            <Image
              src='/logo-no-text.svg'
              width={0}
              height={0}
              alt=""
              style={{
                height: 'auto',
                width: '75%',
                maxWidth: '800px',
                aspectRatio: '808/561'
              }}
            />
            <Image
              src='/logo-text-only.svg'
              width={0}
              height={0}
              alt=""
              style={{
                height: 'auto',
                width: '100%',
                maxWidth: '800px',
                aspectRatio: '159/20'
              }}
            />
            <Typography
              component='h1'
              sx={{
                position: 'absolute',
                bottom: {xs: '0', md: 'calc(20% + 75px)'},
                textAlign: 'center',
                width: '100%',
                fontSize: '200%',
                color: '#ffffff00',
                clip: 'rect(0 0 0 0)',
              }}
            >
              Little Big Sound<br />
              Entertainment
            </Typography>
          </Box>
          <Box sx={{
            textAlign: {xs: 'center', md: 'left'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: {xs: 'center',md: 'start'},
            height: {md: '100%'},
            gap: '8px'
          }}>
            <Typography
              variant="h6"
              component="h2"
              fontSize="1.15rem"
            >
              Expert DJ entertainment for unforgettable events.
              <br />
              Mixing beats, creating moments!
            </Typography>
            <Button color='primary' variant='contained' href="#packages">
              Let's Get Started
            </Button>
          </Box>
        </Container>
      </Container>
    </Box>
  );
}
