import { Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Form from 'next/form';
import PhoneInput from "../components/PhoneInput";
import { getPlans } from "../api";
import nodemailer from 'nodemailer';
import FormButton from "../components/FormButton";

async function sendEmail(formData) {
  'use server';

  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const plan = formData.get('plan');
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
    <p>Chosen plan: ${plan}</p>
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


  console.log(`${name}, ${email}, ${phone}, ${plan}, ${info}, ${toSender}`);
}

export default async function ContactSection() {
  const data = await getPlans();
  return (
    <Container
      component='section'
      id="contact"
      maxWidth='xl'
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
          marginX: 'auto'
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
              <InputLabel id="plan-label">Plan</InputLabel>
              <Select
                labelId="plan-label"
                name='plan'
                label='Plan'
                defaultValue=''
                variant='outlined'
              >
                <MenuItem value=''>
                  <em>Other</em>
                </MenuItem>
                {data.plans.map(((plan, index) => (
                  <MenuItem
                    key={index} value={plan.name}
                  >
                    {plan.name}
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
    </Container>
  )
}