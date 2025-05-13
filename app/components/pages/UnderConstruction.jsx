import { Container, Typography, Box, Button } from "@mui/material";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import Image from "next/image";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '90vh',
        textAlign: 'center',
        gap: '8px'
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
          maxWidth: '500px'
        }}
      />
      <Typography variant="body1">
        Sorry, our website is currently under construction. Come back soon!
      </Typography>
      <Box sx={{
        gap: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {xs: 'column', sm: 'row'}
      }}>
        <Button color="primary" variant="contained" component={Link} href="https://www.facebook.com/people/Little-Big-Sound-Entertainment/100067206510756/" sx={{gap: '4px'}}>
          <FacebookIcon />
          <Typography variant="button">Visit our Facebook</Typography>
        </Button>
        <Typography variant="button">OR</Typography>
        <Button color="secondary" variant="contained" component={Link} href="https://www.instagram.com/littlebigsoundentertainment/" sx={{gap: '4px'}}>
          <InstagramIcon />
          <Typography variant="button">Visit our Instagram</Typography>
        </Button>
      </Box>
    </Container>
  );
}
