import { Container, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
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
      <Typography variant="h1" sx={{display: 'none'}}>Little Big Sound Entertainment</Typography>
      <Image
        src='/logo.svg'
        width={500}
        height={0}
        alt="Little Big Sound Entertainment"
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '500px',
          aspectRatio: '2385/1448'
        }}
      />
      <Typography variant="body1">
        Sorry, this part of our website is currently under construction. Come back soon!
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
  );
}
