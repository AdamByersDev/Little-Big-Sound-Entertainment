'use client';

import { Checkbox, Box, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography, Button, CircularProgress } from "@mui/material";
import Form from 'next/form';
import PhoneInput from "@/lib/components/PhoneInput";
import FormButton from "@/lib/components/FormButton";
import { useCallback, useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function ContactSection({ packages, searchParams }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pack, setPack] = useState((
    packages.find(
      (pack) => (pack.id == searchParams.consult)
    )?.name) ?? ''
  );
  const [info, setInfo] = useState('');
  const [toSender, setToSender] = useState(true);

  const [pending, setPending] = useState(false);
  const defaultStatus = { type: '', message: '' }
  const [status, setStatus] = useState(defaultStatus);

  const defaultSpinnerProgress = 60;
  const [spinnerProgress, setSpinnerProgress] = useState(defaultSpinnerProgress);

  useEffect(() => {
    if (status.type === 'pending') {
      setSpinnerProgress(defaultSpinnerProgress);
    } else {
      setSpinnerProgress(100);
    }
  }, [status.type])

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    // Validate that name and email are provided
    if (!name.trim() || !email.trim()) {
      setStatus({ type: 'error', message: 'Both name and email are required.' });
      return;
    }

    // Validate email validity
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim())) {
      setStatus({ type: 'error', message: 'The provided email is invalid.' });
      return;
    }

    // Set status to pending
    setPending(true);
    setStatus({ type: 'pending', message: 'Sending your email.'});
    
    // Abort after 20s
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 20000);
    
    try {
      // Send post request with data
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          pack: pack.trim(),
          info: info.trim(),
          'to-sender': toSender,
        }),
        signal: ctrl.signal
      });

      let data = null;
      try { data = await response.json(); } catch {}

      // Check if response was an error
      if (!response.ok || data?.ok === false) {
        const message = data?.error || `Failed to send message. (${response.status})`;
        throw new Error(message);
      }

      setStatus({type: 'success', message: 'Thanks! Your message was sent!'})
    } catch (error) {
      setStatus({
        type: 'error',
        message: error?.name === 'AbortError'
          ? 'Timed out. Please try again'
          : (error?.message || 'Failed to send message. Please try again later.')
      });
    } finally {
      clearTimeout(t);
      setPending(false);
    }

  });

  useEffect(() => {
    console.log(status);
  }, [status.type])

  return (
    <Box
      component='section'
      id="contact"
      sx={{
        backgroundColor: 'grey.900',
        position: 'relative',
        paddingX: 2,
        paddingBottom: 4
      }}
    >
      <Box
        maxWidth='lg'
        sx={{
          marginX: 'auto',
          paddingTop: 4,
          paddingX: { xs: 0, sm: 4 }
        }}
      >
        <Typography variant="h4" component='h2'>
          Contact Us
        </Typography>
      </Box>
      <Box
        maxWidth='lg'
        sx={{
          marginX: 'auto',
          paddingTop: 4,
          paddingX: { xs: 0, sm: 4 },
          position: 'relative'
        }}
      >
        <Grid
          inert={status.type != ''}
          aria-hidden={status.type != ''}
          container
          component={Form}
          onSubmit={sendEmail}
          spacing={4}
          sx={{
            visibility: status.type != '' && 'hidden'
          }}
        >
          <Grid size={{xs: 12, md: 6}}>
            <Stack spacing={4}>
              <TextField
                required
                name="name"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <TextField
                required
                name="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <PhoneInput
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
              <FormControl>
                <InputLabel id="package-label">Package</InputLabel>
                <Select
                  labelId="package-label"
                  name='package'
                  label='Package'
                  variant='outlined'
                  value={pack}
                  onChange={(event) => {
                    setPack(event.target.value);
                  }}
                >
                  <MenuItem value=''>
                    <em>Other</em>
                  </MenuItem>
                  {packages.map(((pack, index) => (
                    <MenuItem
                      key={index} value={pack.name}
                    >
                      {pack.name}
                    </MenuItem>
                  )))}
                </Select>
              </FormControl>
            </Stack>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <TextField
              required
              name='info'
              label='Info'
              variant='outlined'
              value={info}
              onChange={(event) => {
                setInfo(event.target.value);
              }}
              multiline
              fullWidth
              rows={6}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              slotProps={{
                input: {
                  sx: {
                    height: '100%',
                    alignItems: 'stretch',
                    textarea: {
                      height: '100% !important',
                      boxSizing: 'border-box',
                      overflow: 'auto',
                    },
                  },  
                }
              }}
            />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <FormControlLabel control={
              <Checkbox
                name="to-sender"
                checked={toSender}
                onChange={(event) => {setToSender(event.target.checked)}}
              />
            } label='Send a copy to yourself' />
          </Grid>
          <Grid size={{xs: 12, sm: 6}}>
            <FormButton
              variant="contained"
              fullWidth
              type='submit'
            >
              Send your email
            </FormButton>
          </Grid>
        </Grid>
        {(status.type) && (
          <Stack
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              backgroundColor: 'background.paper',
              paddingX: { xs: 0, sm: 4 },
              paddingY: { xs: 0, sm: 4 },
              borderRadius: 4,
              marginTop: 2,
              marginX: { sm: 4},
              alignItems: 'center',
              justifyContent: 'center'
            }}
            spacing={2}
            aria-live='polite'
          >
            <Box
              fontSize={'48px'}
              lineHeight={'0'}
              sx={{
                position: 'relative',
              }}
            >
              <CircularProgress 
                color={
                  {
                    'pending':'secondary',
                    'error': 'error',
                    'success': 'primary'
                  }[status.type]
                }
                variant='determinate'
                value={spinnerProgress}
                size={'48px'}
                sx={{
                  transitionTimingFunction: 'ease-in-out',
                  transitionDuration: '0.5s',
                  animation: "mui-circular-rotate 1.4s linear infinite",
                  "@keyframes mui-circular-rotate": {
                    "0%":   { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" }
                  }
                }}
                thickness={4}
              />
              <Box
                sx={{
                  fontSize: '40px',
                  lineHeight: '0',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'opacity ease-in-out, rotate ease-out',
                  transitionDuration: '0.5s',
                  opacity: status.type === 'pending'? 0 : 100,
                  rotate: status.type === 'pending'? '-128deg' : '0deg'
                }}
              >
                {
                  {
                    'error': <CloseIcon fontSize='inherit' color="error" />,
                    'success': <CheckIcon fontSize='inherit' color="primary" />
                  }[status.type]
                }
              </Box>
            </Box>
            <Typography
              variant='h4'
              component='h3'
            >
              {
                {
                  'pending': 'Sending...',
                  'error': 'Error!',
                  'success': 'Success!'
                }[status.type]
              }
            </Typography>
            <Typography
              variant='subtitle1'
              component='p'
            >
              {status.message}
            </Typography>
            {status.type === 'error' && 
              <Button
                variant="contained"
                onClick={() => {
                  setStatus(defaultStatus);
                  setSpinnerProgress(defaultSpinnerProgress);
                }}
              >
                Okay
              </Button>
            }
          </Stack>
        )}
      </Box>

    </Box>
  )
}