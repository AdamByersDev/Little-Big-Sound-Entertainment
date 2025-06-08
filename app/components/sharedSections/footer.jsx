import { Container, Box, IconButton, Stack, Link, Typography, Divider } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import { BorderColor } from "@mui/icons-material";

export default function Footer() {
  return (
    <Container
      component='footer'
      id="plans"
      maxWidth='xl'
      sx={{
        backgroundColor: 'black',
        position: 'relative',
      }}
    >
      <Container
        maxWidth='lg'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingY: 4,
          gap: '8px',
        }}
      >
        <Box
          maxWidth='md'
          display='flex'
          gap='4px'
          flexDirection={{xs: 'column', sm: 'row'}}
          width='100%'
          alignItems={{xs: 'center', sm: 'flex-start'}}
          justifyContent={{xs: 'center', sm: 'space-between'}}
        >
          <Image
            src='/logo.svg'
            width={0}
            height={0}
            alt=""
            style={{
              height: 'auto',
              width: '100%',
              maxWidth: '450px',
              aspectRatio: '2385/1448',
            }}
          />
          <Box
            display='flex'
            gap='4px'
            flexDirection='column'
            width={{xs: '100%', sm: 'auto'}}
            alignItems={{xs: 'center', sm: 'flex-end'}}
            justifyContent='center'
            flexShrink='0'
          >
            <Box>
              <IconButton aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Facebook">
                <InstagramIcon />
              </IconButton>
            </Box>
            <Divider orientation='horizontal' flexItem sx={{ borderColor: 'text.secondary'}}/>
            <Stack spacing={.25} textAlign={{xs: 'center', sm: 'right'}} >
              <Link
                component={NextLink}
                href='/'
                underline='none'
                color='textSecondary'
              >
                Home
              </Link>
              <Link
                component={NextLink}
                href='/plans'
                underline='none'
                color='textSecondary'
              >
                Plans
              </Link>
              <Link
                component={NextLink}
                href='/admin'
                underline='none'
                color='textSecondary'
              >
                Admin
              </Link>
            </Stack>

          </Box>
        </Box>
        <Divider orientation='horizontal' flexItem sx={{ borderColor: 'text.secondary'}}/>
        <Typography textAlign={'center'} variant="body2">
          &copy; 2025 Little Big Sound Entertainment<br />
          All Rights Reserved
        </Typography>
        <Typography textAlign={'center'} variant="body2">
          Developed by ABD - Adam Byers Development
        </Typography>
      </Container>
    </Container>
  )
}