'use server';

import { Checkbox, Box, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Form from 'next/form';
import PhoneInput from "@/lib/components/PhoneInput";
import nodemailer from 'nodemailer';
import FormButton from "@/lib/components/FormButton";

async function sendEmail(formData) {
  'use server';

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const pack = formData.get('package');
  const info = formData.get('info');
  const toSender = formData.get('to-sender');

  const transporter = nodemailer.createTransport({
    host: 'smtp.purelymail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailBody = `
    <h1>Contact Form Submission</h1>
    <h2>Sent by ${name}</h2>
    <p>
      Supplied contact info:<br />
      <ul>
        <li>Email: <a href='mailto:${email}'>${email}</a></li>
        <li>Phone: ${phone? `<a href='tel:${phone}'>${phone}</a>` : 'Not provided'}</li>
      </ul>
    </p>
    <p>Chosen package: ${pack}</p>
    ${info && (`
      <p>Additional info:<br />
      ${info}</p>
    `)}
  `;

  const adminMail = {
    from: `"No Reply" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `${name} - Contact Form`,
    html: mailBody
  };

  await transporter.sendMail(adminMail);

  if (toSender == 'on') {
    const userMail = {
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: 'info@littlebigsoundentertainment.ca',
      subject: `Contact Form Submission - Little Big Sound Entertainment`,
      html: mailBody
    };

    await transporter.sendMail(userMail);
  }


  console.log(`${name}, ${email}, ${phone}, ${pack}, ${info}, ${toSender}`);
}

export default async function ContactSection({ packages, searchParams }) {
  return (
    <Box
      component='section'
      id="contact"
      sx={{
        backgroundColor: 'grey.900',
        position: 'relative',
      }}
    >
      <Grid
        container
        component={Form}
        action={sendEmail}
        spacing={4}
        padding={4}
        maxWidth='lg'
        sx={{
          marginX: 'auto',
          paddingY: 4,
          paddingX: { xs: 0, sm: 4 }
        }}
      >
        <Grid size={12} zIndex={1}>
          <Typography variant="h4" component='h2'>
            Contact Us
          </Typography>
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
          <Stack spacing={4}>
            <TextField
              required
              name="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              required
              name="email"
              label="Email"
              variant="outlined"
            />
            <PhoneInput />
            <FormControl>
              <InputLabel id="package-label">Package</InputLabel>
              <Select
                labelId="package-label"
                name='package'
                label='Package'
                defaultValue={
                  (
                    packages.find(
                      (pack) => (pack.id == searchParams.consult)
                    )?.name
                  ) ?? ''
                }
                variant='outlined'
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
          <FormControlLabel control={<Checkbox defaultChecked name="to-sender" />} label='Send a copy to yourself' />
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
    </Box>
  )
}