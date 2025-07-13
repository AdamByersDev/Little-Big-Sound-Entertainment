import { Card, CardContent, CardActions, Container, Grid, Box, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ArrowForwardIcon from "@/lib/components/icons/ArrowForwardIcon";
import Link from "next/link";
import CheckIcon from "@/lib/components/icons/CheckIcon";
import XIcon from "@/lib/components/icons/XIcon";

function getCardSizes(length, index) {
  let xs = 12;
  let md = (
    (length == (index + 1)
  ) && (
    (length % 2) != 0
  ))? 12 : 6;
  return {xs: xs, md: md}
}

export default async function PackagesSection({ packages, features }) {
  return(
    <Container
      component='section'
      id="packages"
      maxWidth='xl'
      sx={{
        backgroundColor: 'grey.900',
        position: 'relative',
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
            Our Packages
          </Typography>
        </Grid>
        {packages.map(((pack, index) => (
          <Grid key={index} size={getCardSizes(packages.length, index)} zIndex={1}>
            <PackageSummaryCard id={pack.id} name={pack.name} time={pack.musictime} prefered={pack.prefered} packageFeatures={pack.features} features={features}/>
          </Grid>
        )))}
      </Grid>
    </Container>
  )
}

function PackageSummaryCard({ id, name, time, prefered, packageFeatures, features }) {
  return(
    <Card
      id={id}
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
        },
        scrollMarginTop: { xs: '68px', sm: '76px' }
      }}
      component='article'
    >
      <CardContent
        sx={{
          flexGrow: 1,
          zIndex: 1,
          paddingBottom: 0,
        }}
      >
        <Box>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
          <Typography variant='subtitle1' component='p'>
            <strong>{time}</strong> hours of music
          </Typography>
        </Box>
        <Box sx={{
          height: (prefered > 0? 4 : 2),
          borderRadius: 2,
          width: '100%',
          backgroundColor: prefered == 2 ? 'secondary.dark' : prefered == 1 ? 'primary.main' : 'primary.dark',
        }} />
        <List>
          {features.map((feature, index) => (
            <ListItem
              disablePadding
              key={index}
            >
              <ListItemIcon
                sx={{
                  color: packageFeatures.includes(feature.id)? 'success.main' : 'error.main'
                }}
              >
                {packageFeatures.includes(feature.id)? <CheckIcon /> : <XIcon />}
              </ListItemIcon>
              <ListItemText>
              {!packageFeatures.includes(feature.id)&& 'No'} {feature.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button
          variant={prefered == 1? 'contained' : 'outlined'}
          color={prefered == 2? 'secondary' : 'primary'}
          fullWidth
          component={Link}
          href={`/?consult=${id}`}
          aria-label={`Request a consultation about the ${name}`}
        >
          Request a consultation
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  )
}