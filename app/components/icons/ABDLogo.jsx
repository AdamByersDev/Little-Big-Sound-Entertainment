/* 'use client'; */
import React/* , { useEffect, useState } */ from 'react';
/* import { DotLottieReact } from "@lottiefiles/dotlottie-react"; */
import { Box } from '@mui/material';
import Image from 'next/image';

export default function ABDLogo() {
  /* const [logoRef, setLogoRef] = useState(null);

  // Handle hover to play the animation
  const handleMouseEnter = () => {
    if (logoRef) {
      logoRef.play();
    }
  };

  // Handle mouse leave to pause (or reverse) the animation
  const handleMouseLeave = () => {
    if (logoRef) {
      logoRef.stop();
      logoRef.setFrame(0);
    }
  };
 */
  return (
    <>{/* 
      <Box
        component={DotLottieReact}
        src='/ABD.lottie'
        loop={false}
        autoplay={false}
        dotLottieRefCallback={setLogoRef}
        speed={1.5}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        height={'100%'}
        role='img'
        aria-label='ABD logo'
        sx={{
          display: { xs: 'none', md: 'flex' },
          height: { xs: 0, md: '100%'}
        }}
      /> */}
      <Box
        sx={{ display: { xs: 'flex' } }}
      >
        <Image
          src={'/abd-name.svg'}
          width={128}
          height={64}
          alt='ABD logo'
        />
      </Box>
    </>
  )
}