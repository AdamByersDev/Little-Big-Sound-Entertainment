import { Container, Box, IconButton, Stack, Link, Typography, Divider } from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";
import ABDLogo from "../icons/ABDLogo";

export default function Footer() {
  return (
    <Box
      component='footer'
      id="packages"
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
          paddingTop: 4,
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
          sx={{
            paddingX: { xs: 0, sm: 4 }
          }}
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
              <IconButton
                aria-label="Go to our Facebook"
                component={NextLink}
                href="https://www.facebook.com/people/Little-Big-Sound-Entertainment/100067206510756/"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Go to our Instagram"
                component={NextLink}
                href="https://www.instagram.com/littlebigsoundentertainment/"
              >
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
                href='/packages'
                underline='none'
                color='textSecondary'
              >
                Packages
              </Link>
              <Link
                component={NextLink}
                href='/gallery'
                underline='none'
                color='textSecondary'
              >
                Gallery
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: { xs: 'column', sm: 'row' }
          }}
          maxWidth='md'
        >
          <Typography textAlign={'center'} variant="body2">
            &copy; 2025 Little Big Sound Entertainment<br />
            All Rights Reserved
          </Typography>
          <Link
            component={NextLink}
            href='https://www.abyers.ca'
            underline='none'
            color='textSecondary'
            height={64}
            aria-label="Go to ABD's Website"
          >
            <ABDLogo />
          </Link>
        </Box>
      </Container>
    </Box>
  )
}