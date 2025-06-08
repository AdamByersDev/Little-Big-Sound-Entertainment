import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Container
      sx={{
        background: 'linear-gradient(145deg,rgba(78, 29, 89, 1) 0%, rgba(39, 15, 45, 1) 100%)',
        aspectRatio: {md: '16/9'},
        height: 'auto',
        display: 'flex',
        alignItems: 'end',
        paddingTop: {xs: '72px', md: '8px'},
        position: 'relative',
      }}
      component='section'
      id="hero"
      maxWidth='xl'
    >
      <Box sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: 'url("/hero.webp")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: '0',
        opacity: '0.5',
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
          paddingBottom: {xs: '12vh', md: '10%'},
          gap: '8px',
          zIndex: '1',
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
          <Button color='primary' variant='contained' href="#plans">
            Let's Get Started
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
