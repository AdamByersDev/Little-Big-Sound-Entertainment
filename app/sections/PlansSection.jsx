import { Card, CardContent, CardActions, Container, Grid, Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@/lib/components/icons/ArrowForwardIcon";
import Link from "next/link";

function getCardSizes(length, index) {
  let xs = 12;
  let sm = (
    (length == (index + 1)
  ) && (
    (length % 2) != 0
  ))? 12 : 6;
  let md = (
    (length % 3) == 1
  )? sm : (
    (
      (
        (
          (length - index) == length
        ) || (
          (length - index) == (length -1)
        )
      ) && (
        (length % 3) != 0
      )
    )? 6 : 4
  );
  return {xs: xs, sm: sm, md: md}
}

export default async function PlansSection({ plans }) {
  return(
    <Container
      component='section'
      id="plans"
      maxWidth='xl'
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
      }}
    >
      <Grid
        container
        spacing={4}
        padding={4}
        maxWidth='lg'
        sx={{
          marginX: 'auto'
        }}
      >
        <Grid size={12} zIndex={1}>
          <Typography variant="h4" component='h2'>
            Our Packages
          </Typography>
        </Grid>
        {plans.map(((plan, index) => (
          <Grid key={index} size={getCardSizes(plans.length, index)} zIndex={1}>
            <PlanSummaryCard id={plan.id} name={plan.name} summary={plan.summary} prefered={plan.prefered}/>
          </Grid>
        )))}
      </Grid>
    </Container>
  )
}

function PlanSummaryCard({ id, name, summary, prefered }) {
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
          href={`/plans#${id}`}
          aria-label={`Learn more about the ${name}`}
        >
          Learn More
          <ArrowForwardIcon />
        </Button>
      </CardActions>
    </Card>
  )
}