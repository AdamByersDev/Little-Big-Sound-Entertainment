'use client';
import { Button } from '@mui/material';
import { useFormStatus } from 'react-dom';

export default function FormButton(props) {
  const { pending } = useFormStatus();
  return (
    <Button
      loading={pending}
      {...props}
    >
      {props.children}
    </Button>
  )
}