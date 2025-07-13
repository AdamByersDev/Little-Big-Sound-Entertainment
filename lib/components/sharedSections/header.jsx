'use client';

import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Header({active, home}) {
  const [showBetaText, setShowBetaText] = useState(false);
  const [enableTransition, setEnableTransition] = useState(false);

  const showHeaderBG = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  useEffect(() => {
    const stored = localStorage.getItem('showBetaText');
    if (stored !== null) {
      setShowBetaText(stored == 'true');
    } else {
      setShowBetaText(true);
      localStorage.setItem('showBetaText', true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('showBetaText', showBetaText);
  }, [showBetaText]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEnableTransition(true);
    }, 1000); // 1 second delay
  
    return () => clearTimeout(timeout); // clean up on unmount
  }, []);

  return (
    <AppBar
      position={home? 'fixed' : 'sticky'}
      elevation={0}
      sx={{
        backgroundColor: (showHeaderBG || !home)? 'background.paper' : '#00000000',
        boxShadow: (showHeaderBG || !home)? 'var(--mui-shadows-1)' : 'var(--mui-shadows-0)',
        transition: 'background-color .2s, box-shadow .2s',
      }}
    >
      <Box sx={{
        backgroundColor: 'primary.dark',
        maxHeight: showBetaText? '72px' : '0px',
        transition: enableTransition ? 'max-height .2s' : '',
        overflow: 'hidden'
      }}>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography>
            This website is still under construction. Some features may not be available yet.
          </Typography>
          <IconButton
            onClick={() => {setShowBetaText(false)}}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Toolbar disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            component={Link}
            href='/'
            aria-label="Little Big Sound Home"
            sx={{
              display: 'flex',
              gap: 1
            }}
          >
            <Image
              src='/logo-small-no-text.svg'
              width={0}
              height={32}
              alt="Little Big Sound Entertainment Logo"
              style={{
                width: 'auto',
                aspectRatio: '390/385'
              }}
            />
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                gap: 1
              }}
            >
              <Image
                src='logo-text-only-left.svg'
                width={0}
                height={32}
                alt="Little Big Sound Entertainment"
                style={{
                  width: 'auto',
                  aspectRatio: '2385/300'
                }}
              />
            </Box>
          </Box>
          <Box
            component='nav'
            sx={{
              display: 'flex',
              gap: { xs: 0, sm: 1 }
            }}
          >
            <Button
              component={Link}
              href="/"
              color={active?.toLowerCase() == 'home'? "secondary" : "primary"}
            >
              Home
            </Button>
            <Button
              component={Link}
              href="/plans"
              color={active?.toLowerCase() == 'plans'? "secondary" : "primary"}
            >
              Packages
            </Button>
            <Button
              component={Link}
              href="/gallery"
              color={active?.toLowerCase() == 'gallery'? "secondary" : "primary"}
            >
              Gallery
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}