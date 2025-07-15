'use client';
import { Card, CardContent, CardActions, Grid, Box, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ArrowForwardIcon from "@/lib/components/icons/ArrowForwardIcon";
import Link from "next/link";
import CheckIcon from "@/lib/components/icons/CheckIcon";
import XIcon from "@/lib/components/icons/XIcon";
import dynamic from "next/dynamic";
const ServiceAreaMap = dynamic(
  () => import('@/lib/components/ServiceAreaMap'),
  {
    ssr: false
  }
);

function getCardSizes(length, index) {
  let xs = 12;
  let md = (
    (length == (index + 1)
  ) && (
    (length % 2) != 0
  ))? 12 : 6;
  return {xs: xs, md: md}
}

export default function PackagesSection({ packages, features }) {
  return(
    <Box
      component='section'
      id="packages"
      sx={{
        backgroundColor: 'grey.900',
        position: 'relative',
        paddingX: 2
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
        <Typography variant="h3" component='h1'>
          Packages
        </Typography>
      </Box>
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
        {packages.map(((pack, index) => (
          <Grid key={index} size={getCardSizes(packages.length, index)} zIndex={1}>
            <PackageSummaryCard id={pack.id} name={pack.name} time={pack.musictime} prefered={pack.prefered} packageFeatures={pack.features} features={features}/>
          </Grid>
        )))}
      </Grid>
      <Grid
        container
        spacing={4}
        maxWidth='lg'
        columns={{ xs: 6, md: 12}}
        sx={{
          backgroundColor: { sm: 'background.paper' },
          marginX: 'auto',
          paddingX: { xs: 0, sm: 4 },
          paddingY: { xs: 0, sm: 4 },
          borderRadius: 4
        }}
        // Set it so that the grid is 12 wide when md/lg+ and 6 when xs+
      >
        <Grid
          size={6}
          sx={{
            zIndex: 1,
            alignItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'justify',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h4" component='h2'>
            Our Service Area
          </Typography>
          <Typography
            variant='body1'
          >
            Whether you’re local or a little further out, we’ve got you covered. Our standard service area includes locations within 50km of St. Thomas, Ontario with no additional charge. If your event is beyond that, we’re happy to make the trip! A travel fee will apply based on the distance, and we’ll provide a clear quote up front so there are no surprises. Wherever the party is, we’ll be there.
          </Typography>
        </Grid>
        <Grid
          size={6}
          zIndex={1}
          sx={{
            aspectRatio: '3/2',
            backgroundColor: '#090909',
            borderRadius: 'var(--mui-shape-borderRadius)'
          }}
        >
          <ServiceAreaMap />
        </Grid>
      </Grid>
      <Box
        maxWidth='lg'
        sx={{
          marginX: 'auto',
          paddingY: 4,
          paddingX: { xs: 0, sm: 4 },
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='body2'>
          The packages as shown are subject to change. We reserve the right to modify them as we see fit.<br />For pricing, please contact us for a consultation.
        </Typography>
      </Box>
    </Box>
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
          href={`/?consult=${id}#contact`}
          aria-label={`Request a consultation about the ${name}`}
        >
          Request a consultation
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  )
}