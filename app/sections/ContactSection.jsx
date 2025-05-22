import { Button, Checkbox, Container, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import Form from 'next/form';
import PhoneInput from "../components/PhoneInput";
import { getPlans } from "../api";

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
          <Button
            variant="contained"
            fullWidth
            type='submit'
          >
            Send your email
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}