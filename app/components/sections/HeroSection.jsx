import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Container
      sx={{
        backgroundColor: 'grey.A700',
        aspectRatio: {md: '16/9'},
        height: {xs: '80vh', md: 'auto'},
        display: 'flex',
        alignItems: 'end',
        backgroundImage: 'url("/hero.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      component='section'
      id="hero"
      maxWidth='xl'
    >
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
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          height: {md: '100%'},
          paddingBottom: {md: '20%'},
          position: 'relative'
        }}>
          <Image
            src='/logo.svg'
            width={500}
            height={0}
            alt="Little Big Sound Entertainment"
            style={{
              height: 'auto',
              width: '100%',
              maxWidth: '800px'
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
          <Button color='secondary' variant='contained'>
            View our plans
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
