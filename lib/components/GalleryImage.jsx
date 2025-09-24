"use client";

import { Box, ButtonBase, Modal, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export default function GalleryImage({ src, alt, imageWidth, imageHeight, ...props }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonBase
        onClick={() => setOpen(true)}
        sx={{
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          borderRadius: 4,
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6,
          },
          '&:focus': {
            transform: 'translateY(-4px)',
            boxShadow: 6,
          }
        }}
      >
        <Image
          src={src}
          alt={alt}
          {...props}
        />
      </ButtonBase>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onClick={() => setOpen(false)}
        aria-label="Fullscreen Image"
        aria-description={`${alt}`}
      >
        <Box
          sx={{
            margin: '32px',
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            userSelect: 'none'
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              position: 'relative'
            }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </Box>
          <Typography
            variant='body1'
            fontWeight='700'
          >
            Press anywhere to close
          </Typography>
        </Box>
      </Modal>
    </>
  );
}