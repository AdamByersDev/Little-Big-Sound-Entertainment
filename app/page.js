import { Container, Typography, Box, Button } from "@mui/material";
import FacebookIcon from "./components/icons/FacebookIcon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Typography variant="body1">
          Sorry, our website is currently under construction. Come back soon!
        </Typography>
      </Box>
      <Button variant="contained" component={Link} href="https://www.facebook.com/people/Little-Big-Sound-Entertainment/100067206510756/" sx={{gap: '4px'}}>
        <FacebookIcon />
        <Typography variant="button">Visit our facebook</Typography>
      </Button>
    </Container>
  );
}
