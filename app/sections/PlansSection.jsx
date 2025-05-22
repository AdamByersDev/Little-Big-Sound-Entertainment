import { Card, CardContent, Container, Grid, Box, Typography } from "@mui/material";
import { headers } from 'next/headers';
import PlanSummaryCard from "../components/PlanSummaryCard";
import { getPlans } from "../api";

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

export default async function PlansSection() {
  const data = await getPlans();
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
            Our Plans
          </Typography>
        </Grid>
        {data.plans.map(((plan, index) => (
          <Grid key={index} size={getCardSizes(data.plans.length, index)} zIndex={1}>
            <PlanSummaryCard id={plan.id} name={plan.name} summary={plan.summary} prefered={plan.prefered}/>
          </Grid>
        )))}
      </Grid>
    </Container>
  )
}