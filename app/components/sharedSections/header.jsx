'use client';

import { AppBar, Box, Button, Container, Menu, Toolbar, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header({active}) {
  const showHeaderBG = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: showHeaderBG? 'background.paper' : '#00000000',
        transition: 'background-color .2s'
      }}
    >
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
              gap: 1
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
              Plans
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}