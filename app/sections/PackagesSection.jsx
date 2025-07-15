import { Card, CardContent, CardActions, Container, Grid, Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@/lib/components/icons/ArrowForwardIcon";
import Link from "next/link";

function getCardSizes(length, index) {
  let xs = 12;
  let md = (
    (length == (index + 1)
  ) && (
    (length % 2) != 0
  ))? 12 : 6;
  return {xs: xs, md: md}
}

export default async function PackagesSection({ packages }) {
  return(
    <Box
      component='section'
      id="packages"
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        scrollMarginTop: '64px',
      }}
    >
      <Grid
        container
        spacing={4}
        maxWidth='lg'
        sx={{
          marginX: 'auto',
          paddingY: 4,
          paddingX: { xs: 0, sm: 4 }
        }}
      >
        <Grid size={12} zIndex={1}>
          <Typography variant="h4" component='h2'>
            See Our Packages
          </Typography>
        </Grid>
        {packages.map(((pack, index) => (
          <Grid key={index} size={getCardSizes(packages.length, index)} zIndex={1}>
            <PackageSummaryCard id={pack.id} name={pack.name} summary={pack.summary} prefered={pack.prefered}/>
          </Grid>
        )))}
      </Grid>
    </Box>
  )
}

function PackageSummaryCard({ id, name, summary, prefered }) {
  return(
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        outline: prefered > 0? '2px solid' : 'none',
        outlineColor: prefered == 2? 'secondary.dark' : 'primary.main',
        backgroundColor: prefered > 0 ? 'grey.900' : 'background.paper',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        }
      }}
      component='article'
    >
      {prefered == 1 && (
        <Box
          sx={{
            position: 'absolute',
            backgroundImage: 'linear-gradient(135deg, var(--mui-palette-secondary-light), var(--mui-palette-primary-dark))',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.3
          }}
        />
      )}
      <CardContent
        sx={{
          flexGrow: 1,
          zIndex: 1
        }}
      >
        <Box>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
        </Box>
        <Box sx={{
          height: (prefered > 0? 4 : 2),
          borderRadius: 2,
          width: '100%',
          backgroundColor: prefered == 2 ? 'secondary.dark' : prefered == 1 ? 'primary.main' : 'primary.dark',
        }} />
        <Typography variant='body2' sx={{ mt: 1, color: 'text.secondary' }}>
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant={prefered == 1? 'contained' : 'outlined'}
          color={prefered == 2? 'secondary' : 'primary'}
          fullWidth
          component={Link}
          href={`/packages#${id}`}
          aria-label={`Learn more about the ${name}`}
        >
          Learn More
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  )
}