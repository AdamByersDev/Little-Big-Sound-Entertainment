import { Card, CardContent, Container, Grid } from "@mui/material";
import { headers } from 'next/headers';
import PlanSummaryCard from "../PlanSummaryCard";

async function getPlans() {
  return {
    plans: [
      {
        id: 0,
        name: 'Plan 1',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar ac dui in venenatis. Pellentesque tincidunt elementum ipsum et consequat. Donec faucibus mi id nunc blandit tincidunt. Suspendisse id nibh.',
        order: 1,
        prefered: 2
      },
      {
        id: 1,
        name: 'Plan 2',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin velit nec magna vestibulum, venenatis porttitor quam pharetra. Phasellus lacus quam, aliquam sit amet lectus vel, accumsan porta ante. Phasellus.',
        order: 2,
        prefered: 1
      },
      {
        id: 2,
        name: 'Plan 3',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend dui in accumsan ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer iaculis a mi.',
        order: 3,
        prefered: 0
      },
      {
        id: 3,
        name: 'Plan 4',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend dui in accumsan ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer iaculis a mi.',
        order: 4,
        prefered: 0
      },
      {
        id: 4,
        name: 'Plan 5',
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin velit nec magna vestibulum, venenatis porttitor quam pharetra. Phasellus lacus quam, aliquam sit amet lectus vel, accumsan porta ante. Phasellus.',
        order: 5,
        prefered: 0
      },
    ],
  }
}

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
        backgroundColor: 'background.paper'
      }}
    >
      <Grid
        container
        spacing={4}
        padding={4}
        sx={{
          alignItems: "stretch"
        }}
      >
        {data.plans.map(((plan, index) => (
          <Grid key={index} size={getCardSizes(data.plans.length, index)}>
            <PlanSummaryCard id={plan.id} name={plan.name} summary={plan.summary} prefered={plan.prefered}/>
          </Grid>
        )))}
      </Grid>
    </Container>
  )
}