import { signOut } from "@/auth";
import Footer from "@/lib/components/sharedSections/footer";
import Header from "@/lib/components/sharedSections/header";
import { Container, Typography, Box, Button } from "@mui/material";
import Image from "next/image";

export default function NotAdmin() {
  return (
    <>
      <Header active='admin' />
      <main>
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '90vh',
            textAlign: 'center',
            gap: '8px',
            backgroundColor: 'background.paper'
          }}
        >
          <Image
            src='/logo-no-text.svg'
            width={500}
            height={0}
            alt="Little Big Sound Entertainment"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '500px',
              aspectRatio: '2385/1448'
            }}
          />
          <Typography variant="h3" component='h1'>Oops!</Typography>
          <Typography variant="body1">
            Looks like you aren't an admin! If this is an error, please contact a known admin.
          </Typography>
          <Box sx={{
            gap: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: {xs: 'column', sm: 'row'}
          }}>
            <form
              action={async () => {
                await signOut({ redirectTo: "/" })
              }}
            >
              <Button
                type="submit"
                color="primary"
                variant="contained"
              >
                Sign Out
              </Button>
            </form>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  );
}
