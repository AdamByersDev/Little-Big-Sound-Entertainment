'use client';

import { useRef } from 'react';
import { TextField } from '@mui/material';
import { useMask } from '@react-input/mask';

export default function PhoneInput({ name = 'phone', label = 'Phone Number' }) {
  const inputRef = useMask({
      mask: '+1 (___) ___-____',
      replacement: { _: /\d/ },
  });

  return (
    <TextField
      inputRef={inputRef}
      name={name}
      label={label}
      variant="outlined"
    />
  );
}
